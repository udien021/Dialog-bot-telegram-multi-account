// ===== HELPER =====
function delay(min = 5000, max = 20000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===== TEKS GABUT (LEBIH PANJANG & NATURAL) =====
const GABUT_CHAT = [
  "Aduh gabut banget hari ini 😩",
  "Ngapain ya enaknya 🤔",
  "Scroll tiktok bosen juga",
  "IG juga gitu2 aja",
  "Main game juga males",
  "Laptop dibuka malah bengong",
  "Kayaknya lagi burnout deh 🤣",
  "Tidur lagi aja kali ya",
  "Eh tapi baru bangun 😭",
  "Yaudah rebahan aja deh",
  "Enak sih rebahan sambil scroll",
  "Tapi tetep aja kosong rasanya 😅",
  "Mau keluar males panas",
  "Mau nongkrong juga lagi sepi",
  "Temen2 juga pada sibuk kayaknya",
  "Yaudah sendiri dulu aja",
  "Kadang enak sih sendiri",
  "Tapi lama2 bosen juga",
  "Besok harus lebih produktif deh",
  "Serius besok 😤",
  "Hari ini santai dulu aja lah",
  "Ngopi sendiri enak kali ya ☕",
  "Atau nonton film aja",
  "Tapi milih film aja lama 🤣",
  "Yaudah lanjut rebahan lagi"
];

// ===== MAIN =====
export async function startGabutChat(sock, group) {
  for (let i = 0; i < GABUT_CHAT.length; i++) {

    const d = i === 0 ? 3000 : delay();
    await new Promise(r => setTimeout(r, d));

    try {
      await sock.sendMessage(group, {
        text: GABUT_CHAT[i]
      });
    } catch {}
  }
}
