function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // delay fleksibel (lebih natural)
    function humanDelay(text = "") {
      const base = rand(3000, 9000);
      const typingTime = text.length * rand(40, 90); // lama ngetik tergantung panjang teks
      return base + typingTime;
    }
    
    // gaya tiap bot
    const STYLES = [
      { name: "santai", suffix: ["", " 😆", " wkwk", " sih"], typo: 0.2 },
      { name: "toxic", suffix: [" 😏", " lah", " bego", " njir"], typo: 0.3 },
      { name: "kalem", suffix: ["", " sih", " ya", " mungkin"], typo: 0.1 },
      { name: "random", suffix: [" 😂", " 😭", " 😅", ""], typo: 0.25 }
    ];
    
    // dialog base (pakai punyamu yang panjang)
    const DIALOG = [
      "Eh lagi apa nih?",
      "Nongkrong aja 😆",
      "Gabut banget sih",
      "Sama, kosong total",
      
      "Mau ngapain hari ini?",
      "Belum tau",
      "Cari hiburan aja",
      "Iya biar gak bosan",
      
      "Main game yuk",
      "Gas",
      "Game apa?",
      "Yang santai aja",
      
      "Free Fire?",
      "Boleh",
      "Aku ikut",
      "Gas main",
      
      "Siapa jago?",
      "Aku dikit 😎",
      "Hahaha bohong",
      "Aku masih belajar",
      
      "Wkwk ngakak",
      "Santai aja",
      "Seru juga",
      "Lanjut terus",
      
      "Laper gak?",
      "Lumayan",
      "Iya nih",
      "Makan yuk",
      
      "Makan apa?",
      "Indomie aja",
      "Setuju",
      "Tambah telur",
      
      "Siapa masak?",
      "Aku gak mau 😂",
      "Jangan aku",
      "Giliran random",
      
      "Wkwk kacau",
      "Biasa aja",
      "Yang penting kenyang",
      "Setuju",
      
      "Abis ini?",
      "Tidur mungkin",
      "Scroll HP",
      "Nonton YouTube",
      
      "Capek gak?",
      "Lumayan",
      "Iya juga",
      "Rebahan aja",
      
      "Besok ngapain?",
      "Kerja/sekolah",
      "Rutinitas lagi",
      "Semangat",
      
      "Udah mandi?",
      "Belum 😆",
      "Buruan",
      "Nanti aja",
      
      "Malam ngapain?",
      "Tidur",
      "Main HP",
      "Nonton film",
      
      "Film apa?",
      "Action",
      "Komedi",
      "Terserah",
      
      "Bosen ya?",
      "Iya sedikit",
      "Chat aja",
      "Biar rame",
      
      "Kenapa diam?",
      "Lagi mikir",
      "Mikir apa?",
      "Hidup 😆",
      
      "Lucu kamu",
      "Apanya?",
      "Kelakuan kamu",
      "Wkwk",
      
      "Stres gimana?",
      "Rebahan",
      "Denger musik",
      "Main HP",
      
      "Musik apa?",
      "Lo-fi",
      "Santai",
      "Biar tenang",
      
      "Besok ketemu?",
      "Harus",
      "Insyaallah",
      "Gas",
      
      "Oke kalau gitu",
      "Bye",
      "Dadah",
      "Sampai jumpa",
      
      "Jangan begadang",
      "Iya siap",
      "Oke noted",
      "Siap"
      
      ];
    
    // shuffle
    function shuffle(arr) {
      return arr.sort(() => Math.random() - 0.5);
    }
    
    let pool = shuffle([...DIALOG]);
    
    function getNextDialog() {
      if (pool.length === 0) pool = shuffle([...DIALOG]);
      return pool.shift();
    }
    
    // bikin typo ringan
    function typoText(text) {
      if (text.length < 4) return text;
    
      const i = rand(0, text.length - 2);
      return text.slice(0, i) + text[i + 1] + text[i] + text.slice(i + 2);
    }
    
    // apply style
    function applyStyle(text, style) {
      let t = text;
    
      // typo kemungkinan
      if (Math.random() < style.typo) {
        t = typoText(t);
    
        // kadang langsung benerin
        if (Math.random() < 0.5) {
          return [t, text];
        }
      }
    
      // tambah suffix
      const suf = style.suffix[rand(0, style.suffix.length - 1)];
      return [t + suf];
    }
    
    // mapping bot ke style
    const botStyles = new Map();
    
    function getBotStyle(bot) {
      if (!botStyles.has(bot)) {
        botStyles.set(bot, STYLES[rand(0, STYLES.length - 1)]);
      }
      return botStyles.get(bot);
    }
    
    // MAIN
    export async function startCallChat(group, bots, callerBot) {
    
      let lastMsg = null;
    
      let activeBots = bots.filter(b => b?.user);
      if (activeBots.length < 3) return;
    
      activeBots = [callerBot, ...activeBots.filter(b => b !== callerBot)];
    
      // delay awal random (biar gak langsung nyaut)
      await new Promise(r => setTimeout(r, rand(3000, 8000)));
    
      while (global.activeGroups[group]) {
    
        // 20% kemungkinan diem (ghosting)
        if (Math.random() < 0.2) {
          await new Promise(r => setTimeout(r, rand(5000, 15000)));
          continue;
        }
    
        try {
          const bot = activeBots[rand(0, activeBots.length - 1)];
          if (!bot?.user) continue;
    
          const style = getBotStyle(bot);
          const baseText = getNextDialog();
          const messages = applyStyle(baseText, style);
    
          for (let m of messages) {
    
            // typing effect
            await bot.sendPresenceUpdate('composing', group);
    
            await new Promise(r => setTimeout(r, humanDelay(m)));
    
            const msg = await bot.sendMessage(
              group,
              { text: m },
              lastMsg ? { quoted: lastMsg } : {}
            );
    
            lastMsg = msg;
    
            // jeda kecil antar pesan (kalau typo + koreksi)
            await new Promise(r => setTimeout(r, rand(1000, 3000)));
          }
    
        } catch (e) {
          console.log("❌ error:", e.message);
        }
      }
    
      console.log("🛑 berhenti:", group);
    }
