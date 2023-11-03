/*
 * Information
 * Creator / Developer: Rull DVinz(Hoiril Anam.) - FullStack Engineer
 * Contact creator / Developer: 0859 3939 1878 (WhatsApp), contact@wrdaaratu@gmail.com (Email)
*/

/* Thanks to
 * Rull DVinz. - FullStack Engineer (Creator / Developer)
 * daniapi.biz.id (API provider)
 * api.caliph.biz.id (API provider)
 * @DVinz/scraper (Scraper provider)
 * @whiskeysockets/baileys (Library "Baileys" provider)
 * @adiwajshing/keyed-db
 * @hapi/boom
 * pino
 * qrcode-terminal
 * chalk
 * mongoose
 * node-cron
 * nodemon
 * other
*/

/*
true = enable,
false = disable.

understand?
*/

module.exports = {
  pairing_mode: true,
  session_folder_name: 'session',
  browser: ["Chrome (Windows)", "latest"],
  prefix: '.',
  public_mode: true,
  chat_mode: 'both', // Private, Group, Both/All
  offline_status: false,
  auto_update_profile_status: false,
  auto_read_messages: true,
  auto_typing: true,
  auto_recording: false,
  mongodb_uri: 'mongodb+srv://DARKSHAN:1000@cluster0.t1wsjlv.mongodb.net', // Register here: https://mongodb.com/#sign-up
  api: {
    dani: {
      api_url: 'https://daniapi.biz.id',
      api_key: 'sk-tv0749luixgs79f70' // Register here: https://daniapi.biz.id/#sign-up
    },
    caliph: {
      api_url: 'https://api.caliph.biz.id', // Register here: https://api.caliph.biz.id/#sign-up
      api_key: 'hjkFDzvw'
    }
  },
  bot: {
    name: 'Wardaa BOT',
    profile_status: 'Bot aktif hingga kiamat or 24/7'
  },
  owner: {
    name: ["Rull - DVinz"],
    number: ["6285939391878"]
  },
  daily_limit: {
    free: 100,
    premium: Infinity
  },
  watermark: {
    sticker: {
      package_name: 'Created By Wardaa BOT ',
      author_name: 'DVinz'
    }
  },
  react: {
    process: '⏳',
    success: '✅',
    failed: '❌'
  },
  cron_jobs: {
    time: '0 0 * * *',
    timzone: 'Asia/Sumenep'
  },
  image_url: 'https://i.imgur.com/IbRtZs1.jpg',
  audio_url: 'https://cdn.danitechno.com/audio/dj-joanna-breakbeat.mp3',
  message: {
    plans_and_pricing: '*Plans & Pricing*\n\n*Plan:*\n- Free (benefit): Limit 10/day\n- Premium (benefit): Limit infinity/unlimited\n\n*Price:*\n- Premium 7 hari: 3rb\n- Premium 14 hari: 5rb\n- Premium 1 bulan 10rb\n- Premium 2 bulan: 20rb\n- Premium 1 tahun: 120rb\n\n*Contact owner:* 628xxx',
    not_registered: 'Anda belum terdaftar sebagai pengguna. Untuk mendaftar, ketik: *.register*.',
    especially_premium: 'Anda harus memiliki akun Premium untuk mengakses fitur ini. Ketik: *.upgrade* untuk mengupgrade akun.',
    especially_owners: 'Anda tidak diizinkan mengakses fitur ini. Fitur ini hanya bisa diakses oleh owner bot.',
    daily_limit: 'Maaf, limit harian Anda telah habis. Limit akan direset setiap pukul jam 12 malam WIB.\nKetik: *.upgrade* untuk mengupgrade akun, dan dapatkan benefit limit tanpa batas.'
  },
  date: {
    country: 'id-ID',
    time_zone: 'Asia/Sumenep'
  }
};
