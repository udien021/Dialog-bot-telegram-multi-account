process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import makeWASocket, {
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason
} from "baileys";

import Pino from "pino";
import readline from "readline";

import { startCallChat } from "./dialog.js";
import { startLyricsChat } from "./chat.js";

// ===== INPUT =====
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const ask = (q) => new Promise(res => rl.question(q, res));

// ===== GLOBAL =====
global.bots = [];
global.activeGroups = {}; // 🔥 PER GROUP LOCK

// ===== AUTO RESET ANTI STUCK =====
setInterval(() => {
  global.activeGroups = {};
  console.log("♻️ Reset lock system");
}, 600000); // 10 menit

// ===== START BOT =====
async function startBot(sessionName) {
  const { state, saveCreds } = await useMultiFileAuthState(`./${sessionName}`);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    auth: state,
    version,
    logger: Pino({ level: "silent" })
  });

  sock.sessionName = sessionName;

  sock.ev.on("creds.update", saveCreds);

  // simpan bot
  const idx = global.bots.findIndex(b => b.sessionName === sessionName);
  if (idx !== -1) global.bots[idx] = sock;
  else global.bots.push(sock);

  // ===== PAIRING =====
  if (!sock.authState.creds.registered) {
    const number = await ask(`📱 Nomor (${sessionName}) 628xxx: `);
    const code = await sock.requestPairingCode(number);
    console.log(`🔑 ${sessionName}: ${code}`);
  }

  // ===== CONNECTION =====
  sock.ev.on("connection.update", ({ connection, lastDisconnect }) => {
    if (connection === "open") {
      console.log(`✅ ${sessionName} Connected`);
    }

    if (connection === "close") {
      console.log(`⚠️ ${sessionName} reconnecting...`);
      setTimeout(() => startBot(sessionName), 5000);
    }
  });

  // ===== MESSAGE =====
  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    if (type !== "notify") return;

    const msg = messages[0];
    if (!msg.message) return;

    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text;

    const from = msg.key.remoteJid;

    const activeBots = global.bots.filter(
      b => b?.user && b?.authState?.creds
    );

    console.log("🤖 BOT AKTIF:", activeBots.length);

    // ======================
    // 🔥 ABSEN (SEMUA BOT)
    // ======================
    if (from.endsWith("@g.us") && text?.toLowerCase() === ".absen") {

      const names = ["Andi","Budi","Rizky","Dika","Fajar","Rian"];

      activeBots.forEach((bot, i) => {
        setTimeout(() => {
          bot.sendMessage(from, {
            text: `Hadir ${names[i % names.length]}`
          }).catch(e => console.log("❌ absen error:", e.message));
        }, i * 4000);
      });
    }

    // ======================
    // 🔥 CALL MODE
    // ======================
    if (from.endsWith("@g.us") && text?.toLowerCase() === ".call") {

      if (global.activeGroups[from]) return;

      if (activeBots.length < 3) {
        await sock.sendMessage(from, {
          text: "⚠️ Minimal 3 bot untuk ngobrol"
        });
        return;
      }

      global.activeGroups[from] = true;

      try {
        await startCallChat(from, activeBots, sock);
      } catch (e) {
        console.log("❌ call error:", e.message);
      }

      global.activeGroups[from] = false;
    }

    // ======================
    // 🔥 LIRIK MODE
    // ======================
    if (from.endsWith("@g.us") && text?.toLowerCase().startsWith(".chat")) {

      const cmd = text.toLowerCase().trim();
      const valid = [".chat1",".chat2",".chat3",".chat4",".chat5"];

      if (!valid.includes(cmd)) return;
      if (global.activeGroups[from]) return;

      global.activeGroups[from] = true;

      try {
        await startLyricsChat(from, activeBots, cmd.replace(".", ""));
      } catch (e) {
        console.log("❌ chat error:", e.message);
      }

      global.activeGroups[from] = false;
    }

  });
}

// ===== MAIN =====
async function main() {

  console.log("🔥 BOT FINAL ANTI STUCK\n");

  const totalInput = await ask("Jumlah bot (3-6): ");
  const TOTAL_BOT = Math.min(Math.max(parseInt(totalInput) || 3, 1), 6);

  for (let i = 1; i <= TOTAL_BOT; i++) {
    console.log(`\n=== session${i} ===`);

    await startBot(`session${i}`);

    if (i < TOTAL_BOT) {
      const lanjut = await ask("Lanjut? (y/n): ");
      if (lanjut !== "y") break;
    }
  }

  console.log("\n🔥 Semua bot aktif");
}

main();
setInterval(() => {}, 1000);
