// ===== HELPER =====
function delay(min = 10000, max = 15000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===== LIST LIRIK (PANJANG) =====
const LYRICS = {

  chat1: [
    "Ku kira kita akan bersama selamanya",
    "Menjalani hari tanpa rasa curiga",
    "Namun semua berubah begitu saja",
    "Saat kau memilih untuk pergi dariku",
    "Tanpa alasan yang jelas kau menghilang",
    "Meninggalkan luka yang begitu dalam",
    "Aku mencoba tuk bertahan sendiri",
    "Namun bayangmu terus menghantui",
    "Setiap malam ku teringat dirimu",
    "Yang dulu selalu ada di sampingku",
    "Kini semua hanya tinggal kenangan",
    "Yang tak mungkin bisa ku ulang kembali",
    "Aku lelah berharap kau kembali",
    "Karena kau tak pernah peduli",
    "Dan kini aku belajar merelakanmu 😔"
  ],

  chat2: [
    "Aku bukanlah seseorang yang kau inginkan",
    "Aku hanya tempat persinggahan sementara",
    "Saat kau lelah dan butuh sandaran",
    "Namun bukan untuk kau pertahankan",
    "Aku sadar siapa diriku ini",
    "Tak sebanding dengan dia yang kau pilih",
    "Namun hatiku tetap saja berharap",
    "Meski ku tahu ini akan menyakitkan",
    "Setiap kata yang kau ucapkan",
    "Selalu membuatku bertahan",
    "Namun akhirnya kau pergi juga",
    "Meninggalkan aku sendirian",
    "Kini ku hanya bisa menerima",
    "Bahwa kita tak ditakdirkan bersama 😭"
  ],

  chat3: [
    "Mungkin ini memang sudah jalannya",
    "Kita dipertemukan lalu dipisahkan",
    "Tanpa pernah benar-benar memiliki",
    "Namun terasa begitu berarti",
    "Aku mencoba untuk melupakan",
    "Namun kenangan terus bermunculan",
    "Setiap sudut kota mengingatkanku padamu",
    "Dan semua hal yang pernah kita lalui",
    "Aku tahu ini tak akan mudah",
    "Namun harus ku jalani juga",
    "Walau hati ini masih mencintaimu",
    "Aku harus belajar melepaskan",
    "Karena memaksakan hanya akan menyakitkan",
    "Dan aku tak ingin terluka lebih dalam 😔"
  ],

  chat4: [
    "Masih jelas teringat senyummu",
    "Yang dulu selalu membuatku tenang",
    "Kini semua hanya bayangan",
    "Yang datang dan pergi tanpa arah",
    "Aku mencoba mencari pengganti",
    "Namun tak ada yang seperti dirimu",
    "Semua terasa berbeda",
    "Dan hatiku tetap kosong",
    "Waktu terus berjalan tanpa henti",
    "Namun rasa ini tak kunjung hilang",
    "Aku lelah dengan semua ini",
    "Namun tak tahu harus bagaimana",
    "Jika memang ini akhirnya",
    "Biarlah aku belajar menerima 😞"
  ],

  chat5: [
    "Jika waktu bisa ku ulang kembali",
    "Aku ingin memperbaiki segalanya",
    "Tak akan ku biarkan kau pergi",
    "Tanpa mencoba untuk bertahan",
    "Namun kini semua sudah terlambat",
    "Kau telah memilih jalanmu sendiri",
    "Dan aku hanya bisa diam",
    "Melihatmu bahagia tanpa diriku",
    "Aku mencoba tersenyum",
    "Walau hati ini hancur",
    "Karena aku tahu",
    "Cintaku tak lagi berarti bagimu",
    "Dan kini aku harus melanjutkan hidup",
    "Meski tanpamu di sisiku 😔"
  ]

};

// ===== MAIN =====
export async function startLyricsChat(group, bots, type) {

  const lyrics = LYRICS[type];
  if (!lyrics) return;

  let lastMsg = null;

  for (let i = 0; i < lyrics.length; i++) {
    const text = lyrics[i];

    const d = i === 0 ? 3000 : delay();
    await new Promise(r => setTimeout(r, d));

    try {
      const bot = bots[i % bots.length];
      if (!bot?.user) continue;

      const msg = await bot.sendMessage(
        group,
        { text },
        lastMsg ? { quoted: lastMsg } : {}
      );

      lastMsg = msg;

    } catch (e) {
         console.log("❌ error:", e.message);
      }
  }
}
