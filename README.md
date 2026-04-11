🤖 WhatsApp Multi Bot Chat (Baileys)

Bot WhatsApp multi-session untuk simulasi percakapan otomatis menggunakan beberapa akun sekaligus.

Cocok untuk:

- simulasi grup chat
- testing bot
- eksperimen multi akun
- auto respon / ngobrol santai

---

🚀 Fitur

- ✅ Multi Session (3–6 bot)
- ✅ ".absen" → semua bot jawab hadir
- ✅ ".call" → bot ngobrol otomatis (balas-balasan)
- ✅ ".chat1 - .chat5" → kirim lirik lagu panjang
- ✅ ".gabut" → chat sendiri (solo mode)
- ✅ Delay natural (biar kayak manusia)
- ✅ Anti stuck system (auto reset)

---

📦 Install (Termux / Linux)

pkg update && pkg upgrade
pkg install nodejs git

git clone https://github.com/yoo214/Dialog-bot-telegram-multi-account.git
cd Dialog-bot-telegram-multi-account

npm install
npm start

---

🔑 Login Bot

Saat pertama run:

- Masukkan nomor WhatsApp (628xxx)
- Ambil pairing code
- Login seperti biasa

Setiap session = 1 akun WhatsApp

---

⚙️ Cara Pakai

Di grup WhatsApp:

.absen   → semua bot jawab hadir
.call    → bot ngobrol otomatis
.chat1   → lirik lagu 1
.chat2   → lirik lagu 2
.chat3   → lirik lagu 3
.chat4   → lirik lagu 4
.chat5   → lirik lagu 5
.gabut   → bot chat sendiri

---

⚠️ Penting

❗ Jangan upload / share folder berikut:

session1/
session2/
session3/

Karena itu berisi:

- login WhatsApp
- akses akun

Jika bocor:
➡️ akun bisa diambil alih

---

🧠 Cara Kerja

- Menggunakan library Baileys (WhatsApp Web API)
- Multi bot dijalankan dalam 1 script
- Sistem rotasi bot untuk simulasi percakapan
- Delay random agar terlihat natural

---

📁 Struktur Project

index.js          → main bot
chat.js           → lirik lagu
dialog.js         → percakapan bot
gabut.js          → mode solo
handler.js        → command handler
setting.js        → config

---

🔥 Tips

- Gunakan minimal 3 bot agar ".call" berjalan
- Semakin banyak bot → semakin realistis
- Jangan spam command (biar gak tabrakan)

---

👨‍💻 Author

- GitHub: https://github.com/yoo214

---

⭐ Support

Kalau project ini membantu:

- ⭐ Star repo ini
- 🍴 Fork untuk modifikasi sendiri

---

🚀 Next Update (Coming Soon)

- Auto reply AI
- Karakter bot berbeda (lucu / serius / toxic)
- Dashboard control bot
- Telegram control bot

---

⚡ Disclaimer

Script ini hanya untuk:

- pembelajaran
- eksperimen
- testing

Gunakan dengan bijak 🚫
