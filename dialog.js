function delay(min = 8000, max = 15000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DIALOG = [
  "Bro pada online gak?",
  "Online bro",
  "Ikut nimbrung",
  "Sama gue juga",

  "Lagi pada ngapain?",
  "Gue lagi gabut banget",
  "Sama anjir",
  "Kosong semua 🤣",

  "Ada ide ngapain?",
  "Main game?",
  "Males sih",
  "Ngobrol aja santai",

  "Iya ngobrol random aja",
  "Yang penting gak sepi",
  "Biar gak ngantuk",
  "Soalnya malam panjang",

  "Ngopi enak sih",
  "Tapi males bikin",
  "Wkwk klasik",
  "Pesen aja lah",

  "Lu kerja besok?",
  "Masuk bro",
  "Gue libur",
  "Enak banget",

  "Weekend kemana?",
  "Belum tau",
  "Rebahan aja",
  "Rebahan club 🤣",

  "Film bagus ada?",
  "Banyak sih",
  "Yang santai aja",
  "Jangan mikir 🤣",

  "Internet lu gimana?",
  "Lemot banget",
  "Sama juga",
  "Provider ampas 🤣",

  "Ngobrol gini seru juga",
  "Iya santai banget",
  "Tanpa beban",
  "Gas terus 😆"
];

export async function startCallChat(group, bots, callerBot) {

  let lastMsg = null;

  let activeBots = bots.filter(b => b?.user);

  if (activeBots.length < 3) return;

  // caller di depan
  activeBots = [
    callerBot,
    ...activeBots.filter(b => b !== callerBot)
  ];

  for (let i = 0; i < DIALOG.length; i++) {

    const d = i === 0 ? 3000 : delay();
    await new Promise(r => setTimeout(r, d));

    try {
      const bot = activeBots[i % activeBots.length];

      if (!bot?.user) continue;

      const msg = await bot.sendMessage(
        group,
        { text: DIALOG[i] },
        lastMsg ? { quoted: lastMsg } : {}
      );

      lastMsg = msg;

    } catch (e) {
        console.log("❌ error:", e.message);
      }
  }
}
