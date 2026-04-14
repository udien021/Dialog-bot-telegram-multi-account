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
  "Gas terus 😆",
  
    // 🎤 MODE KONSER 🔥//
    
  "p konser  🎤🔥",
  "Woy ini lagi konser apa gimana 😆",
  "Bass-nya berasa banget 🤣",
  "Lampu mati, gas musik 🔊",
  "Teriak dong biar rame 🎶",

  "Crowd mana nih?",
  "Sorak-sorak dulu 🔥",
  "Kita bikin vibes konser 😎",
  "Beat drop lagi 💥",
  "Jangan sepi, ini konser virtual 🎤",

  "Woy angkat tangan semua 🙌",
  "Yang diem keluar 🤣",
  "MC lagi ngomong nih 🎙️",
  "Lanjut lagu berikutnya 🔥",
  "Encore! Encore! 🎶",
  
    // 🏔️ MODE MUNCAK 🔥
  "p munca 🏔️🔥",
  "Siapa yang pernah naik gunung?",
  "Gue lagi di jalur summit 🥵",
  "Capek tapi vibes-nya enak",
  "Udah setengah jalan nih 😆",
  
  "Angin di atas kenceng banget 🌬️",
  "Pemandangan gila sih 😍",
  "Jangan lupa istirahat dulu",
  "Minum air dulu bro 💧",
  "Langitnya bagus banget 🔥",
  
  "Masih jauh summit nya?",
  "Pelan tapi pasti 🏔️",
  "Kaki udah mulai pegel 🥵",
  "Tapi gak nyerah 💪",
  "Gas sampai puncak 🔥",
  
  "Foto dulu di puncak 📸",
  "Ini baru namanya healing 😆",
  "Sunrise di atas awan 🌄",
  "Capek tapi puas banget",
  "Muncak emang terbaik 🏔️",
  
  // 🏊 MODE RENANG 🔥
  "p renang🏊🔥",
  "Ada yang mau renang bareng?",
  "Airnya seger banget 😆",
  "Nyebur dulu gas 🌊",
  "Jangan lupa pemanasan 🤣",
  
  "Kolamnya rame gak nih?",
  "Gue lagi di tengah kolam 🏊",
  "Renang santai aja",
  "Airnya dingin banget 🥶",
  "Plunggg nyebur 💦",
  
  "Gaya bebas dulu 🔥",
  "Capek tapi enak 😆",
  "Jangan tenggelam wkwk 🤣",
  "Ambil nafas dulu 🌬️",
  "Balapan renang yuk 🏊",
  
  "Ombeak kecil enak banget 🌊",
  "Ini baru healing 😍",
  "Basah semua gak masalah",
  "Gas sampai ujung kolam 🔥",
  "Renang santai sore hari 🏊‍♂️",
  
  // 🕺 MODE CLUBBING 🔥
  "p clubbing bos 🕺🔥",
  "Gas ke club malam ini 😆",
  "Bass-nya udah kerasa dari sini 🔊",
  "Lampu strobo nyala semua 💥",
  "DJ lagi drop beat 🎧",
  
  "Angkat tangan semua 🙌",
  "Floor lagi rame banget 🔥",
  "Minum dulu biar santai 🤣",
  "Jangan duduk mulu bro 🕺",
  "Ini baru vibes malam 🌙",
  
  "DJ ganti lagu 🔁",
  "Bass nendang banget 💣",
  "Semua loncat 🔥",
  "Party sampai pagi 😆",
  "MC teriak lagi 🎤",
  
  "Vibes nya gak ketahan 🔊",
  "DJ paling gila malam ini 🤯",
  "Full energy semua 💃",
  "Jangan pulang dulu 🤣",
  "Encore lagi gas 🎧",
  
    // 💔 MODE PATAH HATI 🔥
  "p patah hati gaes 💔🔥",
  "Gue kira kita bakal lama… ternyata gak 😔",
  "Kamu pergi tanpa banyak kata 🤍",
  "Gue masih nunggu chat kamu, padahal gak akan datang 😆",
  "Lucu ya, dulu tiap hari chat sekarang asing 🤣",
  
  "Gue kangen, tapi gak bisa bilang 😔",
  "Kamu udah jadi cerita yang selesai 🤍",
  "Ternyata gue cuma sementara di hidup kamu 😆",
  "Sedihnya diam-diam aja 🤣",
  "Padahal gue masih sayang banget 😔",
  
  "Kenapa harus kayak gini sih 🤍",
  "Gue belajar buat biasa tanpa kamu 😆",
  "Tapi gak gampang ternyata 🤣",
  "Semua jadi sepi lagi 😔",
  "Chat terakhir masih gue simpen 🤍",
  
  "Gue harus nerima walaupun sakit 😆",
  "Kadang kangen itu gak ada obatnya 🤍",
  "Udah ah, capek sendiri 😔",
  "Tapi gue masih senyum kok 🤣",
  "Walaupun hati gak baik-baik aja 💔",
  
  // 💔 MODE BUCIN BERAT 🔥
  "p bucin berat girl 💔🔥",
  "Gue gak tau ya, tapi gue kepikiran kamu terus 😔",
  "Kenapa sih kamu selalu ada di kepala gue 🤍",
  "Chat kamu itu bikin gue tenang 😆",
  "Tapi kalau kamu lama bales, gue jadi kepikiran 🤣",
  
  "Gue gak butuh yang lain, cukup kamu aja 😳",
  "Walaupun kamu cuek, gue tetep stay 😔",
  "Gue gak tau ini baper atau emang sayang 🤍",
  "Kalau kamu hilang, gue bingung 😆",
  "Jangan pergi ya, walau cuma chat 🤣",
  
  "Gue sadar, gue terlalu mikirin kamu 😔",
  "Tapi susah buat gak peduli 🤍",
  "Kamu tuh udah kebiasaan di hati gue 😳",
  "Kalau kamu ketawa, gue ikut seneng 😆",
  "Kalau kamu sedih, gue juga down 🤣",
  
  "Udah ah, gue keliatan bucin banget 😔",
  "Tapi emang iya sih 🤍",
  "Jangan ilang ya, serius 😳",
  "Gue di sini aja cukup 😆",
  "Selama kamu ada, gue santai 🤍",
  
  // 💖 MODE PAMER PACAR 🔥
  "p pamer paca dong💖🔥",
  "Gue punya pacar wkwk 😆",
  "Pacar gue lagi sibuk katanya 🤣",
  "Dia tuh perhatian banget sih 😍",
  "Lagi chat sama dia nih 💬",
  
  "Siapa yang belum punya pacar? 🤣",
  "Gue sih santai aja, udah ada 😎",
  "Dia selalu bawelin gue wkwk 💖",
  "Kalau dia marah serem juga 😆",
  "Tapi gemes sih 🤣",
  
  "Dia paling gak suka gue begadang 😴",
  "Tapi gue masih nongkrong sini wkwk",
  "Pacar gue tipe yang perhatian 🔥",
  "Kadang receh juga orangnya 😆",
  "Yang penting dia ada 💖",
  
  "Jangan pada baper ya 🤣",
  "Gue cuma pamer dikit wkwk",
  "Dia lagi off dulu 😆",
  "Nanti gue kasih tau dia 🔥",
  "Udah ah malu-maluin 🤣",
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
