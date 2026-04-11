// ===== HELPER =====
function delay(min = 5000, max = 20000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===== DATA CHAT PRIBADI =====
const PRIVATE_CHAT = [
  [
    { from: 0, to: 1, text: "Bro lagi sibuk gak?" },
    { from: 1, to: 0, text: "Santai aja, kenapa?" },
    { from: 0, to: 1, text: "Mau tanya sesuatu" },
    { from: 1, to: 0, text: "Tanya aja" },
    { from: 0, to: 1, text: "Menurut lu enakan kerja pagi atau malam?" },
    { from: 1, to: 0, text: "Gue lebih suka malam sih 🤣" },
    { from: 0, to: 1, text: "Iya sih lebih tenang" }
  ],

  [
    { from: 2, to: 1, text: "Lu udah makan belum?" },
    { from: 1, to: 2, text: "Belum nih" },
    { from: 2, to: 1, text: "Makan dulu bro jangan lupa" },
    { from: 1, to: 2, text: "Iya bentar lagi" },
    { from: 2, to: 1, text: "Jangan kelamaan 🤣" }
  ]
];

// ===== MAIN =====
export async function startPrivateChat(bots) {
  const convo = PRIVATE_CHAT[Math.floor(Math.random() * PRIVATE_CHAT.length)];

  for (let i = 0; i < convo.length; i++) {
    const step = convo[i];

    const d = i === 0 ? 3000 : delay();
    await new Promise(r => setTimeout(r, d));

    try {
      const sender = bots[step.from];
      const receiver = bots[step.to];

      if (!sender?.user || !receiver?.user) continue;

      const jid = receiver.user.id;

      await sender.sendMessage(jid, {
        text: step.text
      });

    } catch {}
  }
}
