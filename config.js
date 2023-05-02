
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
 /*   let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)*/
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

      /*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
 // my youtube channel

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ NO OWNER ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.owner = [
['6281231850242'],
['6281248537085', '么 ', true]
]
global.mods = []
global.prems = ['6281248537085','6281231850242']
global.nomorbot = '6281231850242'
global.nomorown = '6281248537085'
global.nomorown1 = '0'
global.nomorown2 = '0'
global.nomorwa = '0'



//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ WM ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.readMore = readMore
global.author = '𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗫𝗮𝘃𝗶𝗲𝗿'
global.namebot = '⌬ 𝗙𝗲𝗹𝗶𝗰𝗶𝗮-𝗠𝗗'
global.wm = '© 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗫𝗮𝘃𝗶𝗲𝗿'
global.media = 'https://telegra.ph/file/0fbf9fcbc81bdd0f2d9e8.jpg'
global.watermark = wm
global.wm2 = '⌬ 𝗙𝗲𝗹𝗶𝗰𝗶𝗮-𝗠𝗗 '
global.botdate = `𝗗𝗔𝗧𝗘: ${week} ${date}\n𝗧𝗜𝗠𝗘: ${wktuwib}`
global.packname = wm
global.bottime = `𝗧 𝗜 𝗠 𝗘: ${wktuwib}`
global.titlebot = `𝗔𝗿𝗶𝗻𝗕𝗼𝘁-𝗩𝟱`
global.stickpack = ''
global.stickauth = `🖍️ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿𝘀 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗕𝗼𝘁 ⌬ 𝗔𝗿𝗶𝗻𝗕𝗼𝘁\n\n• 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿 么  𝗫𝗮𝘃𝗶𝗲𝗿\n• 𝗕𝗼𝘁 𝗡𝘂𝗺𝗯𝗲𝗿 𝟬𝟴𝟭𝟮-𝟯𝟭𝟴𝟱-𝟬𝟮𝟰𝟮\n• 𝗕𝗼𝘁 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝟱`
global.wmpack = ''
global.wmauth = `\n\n\n\n\n\n\n\n\n𝗣𝘂𝗻𝘆𝗮 𝗫𝗮𝘃𝗶𝗲𝗿 >>>\n🪀 𝟲𝟮𝟴𝟭𝟮𝟯𝟭𝟴𝟱𝟬𝟮𝟰𝟮\n\n\n\n\n\n\n\n\n`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ OWNER INFO ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.nameown1= '𝗫𝗮𝘃𝗶𝗲𝗿'
global.nameown2 = '𝗫𝗮𝘃𝗶𝗲𝗿'
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ MEDIA LINK ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.Linkgc = 'https://chat.whatsapp.com/Ll5tsF3V6adD0ATOEIr3Pn'
global.lynk = '-'


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ MEDIA SOSSIAL ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.sig = 'https://chat.whatsapp.com/Ll5tsF3V6adD0ATOEIr3Pn'
global.sgh = 'https://github.com/ArinbotOffc' //github
global.sgc = 'https://chat.whatsapp.com/Ll5tsF3V6adD0ATOEIr3Pn' //group whatsapp
global.sdc = 'https://chat.whatsapp.com/Ll5tsF3V6adD0ATOEIr3Pn' //discord
global.snh = 'https://chat.whatsapp.com/Ll5tsF3V6adD0ATOEIr3Pn'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ DONASI ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.pdana = '0812-4853-7085'
global.povo = '0812-4853-7085'
global.pgopay = '0812-4853-7085'
global.plinkaja = '-' //link aja
global.ppulsa = '0812-4853-7085'
global.ppulsa2 = '0812-4853-7085'
global.psaweria = 'https://saweria.co/ArinBotz'


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.ListHargaSewa = '├ 5 Hari IDR 4.000\n├ 7 Hari IDR 6.000\n├ 20 Hari IDR 11.000\n├ 30 Hari IDR 17.000'
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.LyAtas1 = '☰ ┄┈━━『 '
global.LyAtas2 = ' 』━━┄┈ ☰'
global.Ly = '┃'
global.lybwh = '┗━━━╾┈'
global.sym = '⎔ '
global.sym2 = '▣ '
global.dmenut = '⎔═════⎔' //top
global.dmenub = '╟• ' //body
global.dmenub2 = '║' //body for info cmd on Default menu
global.dmenuf = '⎔═════════⎔' //footer
global.dashmenu = '⎔════⎔ *DASHBOARD* ⎔════⎔'
global.cmenut = '⎔═════⎔' //top
global.cmenuh = '⎔═════⎔' //header
global.cmenub = '╟• ' //body
global.cmenuf = '⎔══════════⎔\n' //footer
global.cmenua = '\n     '
global.pmenus = '⎔'
global.htki = '─ ─ ─ ─  ─ ｢' // Hiasan Titile (KIRI)
global.htka = '｣ ─ ─ ─ ─ ─' // Hiasan Title  (KANAN)
global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = '🅛' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⛶'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ RESPOND ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.stiker_wait = '*Membuat Stiker...*'
global.wait = '*Memproses...*'
global.eror = '*Mohon Maaf Server Kami Sedang Error*'


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ RESPOND GEME ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.benar = '*Benar ✔️*'
global.salah = '*Salah ✖️*'
global.dikit = "*Sedikit Lagi*"


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ RPG GAME ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.multiplier = 27 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵',
      memperkosa: '🔞',
      diperkosa: '🤰',
      osr: '💦',
      os: '💧',
      gems: '💠',
      panda: '🐼',
      kambing: '🐐',
      harimau: '🐅',
      gajah: '🐘',
      banteng: '🐂',
      babihutan: '🐗',
      monyet: '🐒',
      kerbau: '🐃',
      sapi: '🐄',
      buaya: '🐊',
      babi: '🐷',
      ayam: ' 🐓',
      anggur: '🍇',
      apel: '🍎',
      mangga: '🍐',
      jeruk: '🍊',
      pisang: '🍌',
      coal: '🌑',
      ayambakar: '🍖',
      gulaiayam: '🍗',
      rendang: '🥓',
      ayamgoreng: '🍗',
      oporayam: '🍖',
      steak: '🥓',
      babipanggang: '🍖',
      ikanbakar: '🍣',
      lelebakar: '🍣',
      nilabakar: '🍣',
      bawalbakar: '🍣',
      udangbakar: '🍣',
      pausbakar: '🍣',
      kepitingbakar: '🍣',      
      paus: '🐋',      
      kepiting: '🦀',
      gurita: '🍣',      
      lobster: '🍣',
      lumba: '🐬',
      dory: '🐠',
      buntal: '🐡',
      cumi: '🦑',
      orca: '🐳',
      ikan: '🐟',      
      udang: '🦐',
      hiu: '🦈',      
      manar: '🔌',      
      botol: '🍶',
      kaleng: '🥫',      
      kardus: '📦',
      ramuan: '🧙‍♂️',      
      weapon: '🔫',
      anakpancingan: '🎣',
      misi: '📰',
      mana: '⚡',      
      crystal: '🔮',
      skill: '⚔️',
      husbu: '♂️',
      waifu: '♀️',
      mooncard: '🌙',
      starcard: '⭐',
      nickname: '📛',
      intelligence: '🧠',
      rune: '🌀',
      pengeluaran: '💶',
      drink: '🍹',
      pisanggoreng: '🍌',
      jusmangga: '🍸',
      minyak: '🛢️',
      susu: '🥛',
      plastikpvc: '⬜',
      semikonduktor: '💽',
      ax: '🛶',
         mie :'🍜',
                    telur: '🥚',
                    bawangmerah: '🍅',
                    bawangputih: '▫️',
                    kecap: '▪️',
                    garam: '◽',
                    saostiram: '🍷',
                    merica: '🥔',
                    air: '💧',
                    daunbawang: '🍃',
                    mieayam: '🍝',
                    ruko: '🏘️',
                    pajak: '💲',
                    subscriber: '❤️',
                    chname: '📛',
      ras: '⚜️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ WEBSITE APIKEY ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.zenzkey = 'b8040941f7'
global.lolkey = 'Shirooo' // PUNYA WAHID 357d3c85079c4e0818731e6b
global.openaikey = "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"
global.APIs = { // API Prefix
  // name: 'https://website'
  bear: 'https://saipulanuar.ga',
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://sekha.me',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/', 
  violetics : 'https://violetics.pw',
  ziy : 'https://ziy.herokuapp.com',
  males : 'https://malesin.xyz',
  pasha : 'https://api.nataganz.com',
  fgmods: 'https://api-fgmods.ddns.net'
}

//⳹ NOTE !! EXAMPLE ➢ Name Api: 'website api'

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://saipulanuar.ga/': 'zahirgans',
  'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Shirooo',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://sekha.me': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://ziy.herokuapp.com' : 'xZiyy',
  'https://api.nataganz.com' : 'Pasha',
  'https://api-fgmods.ddns.net': 'fg-dylux'
}
//⳹ NOTE !! EXAMPLE ➢ 'https://WebsiteApi': 'Apikey'


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ OTHER ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?
global.thumb = 'https://telegra.ph/file/abaf8ae07b7902db53b76.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/0fbf9fcbc81bdd0f2d9e8.jpg'
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumbs = ['https://telegra.ph/file/685a803f6fd2f16695023.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/daf059ddd21a1a057df18.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/b5cecbda87fb6f0151db9.jpg' //ini juga ganti 
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://telegra.ph/file/fe4fad309fad02ca9a5e2.jpg']
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg','https://telegra.ph/file/9b76375f3869440818d57.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg','https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg','https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg','https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg','https://telegra.ph/file/0525a7929f819cb8278f3.jpg']


global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg','https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg','https://telegra.ph/file/1d886f66a44871205335f.jpg','https://telegra.ph/file/54d19a9094dc509370bf9.jpg','https://telegra.ph/file/e649475bcde78a9977ee5.jpg','https://telegra.ph/file/32ba20b6139b129c559c8.jpg','https://telegra.ph/file/948434cda49e4af5d9f11.jpg','https://telegra.ph/file/6f353c68533283fe79871.jpg','https://telegra.ph/file/de268ca9b01101acf2b8a.jpg','https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg', 'https://telegra.ph/file/efb70bb0988640f841742.jpg', 'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg','https://telegra.ph/file/6e4623464a659dd8d902b.jpg','https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg','https://telegra.ph/file/10454b9ad693e1eefea58.jpg','https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg','https://telegra.ph/file/8d7c4eadb7a4722747074.jpg','https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg','https://telegra.ph/file/95f4b43439d7888f15ea5.jpg','https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg', 'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg','https://telegra.ph/file/3a5231aade245665633bd.jpg','https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg','https://telegra.ph/file/dabb70983b4e833d98344.jpg','https://telegra.ph/file/75193a893e38fc580afe6.jpg','https://telegra.ph/file/217aa0f4ec76273808aa4.jpg','https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg','https://telegra.ph/file/092df720701575a7ceaaa.jpg','https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg','https://telegra.ph/file/140eff27be983e0cd6781.jpg','https://telegra.ph/file/1581b791e16d0029e16b5.jpg','https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg','https://telegra.ph/file/093caff422f194f00bc6c.jpg','https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg','https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg','https://telegra.ph/file/1889878933264d16c58bf.jpg','https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg','https://telegra.ph/file/fcf861516db09dda164e0.jpg','https://telegra.ph/file/355d96d7e06d109435f67.jpg']
global.logo = 'https://telegra.ph/file/2e9939b2f734f5e8bfcc6.jpg'

global.dtu = '𝗚𝗥𝗨𝗣 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟'
global.urlnya = "https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa"
global.dtc = '𝗖𝗔𝗟𝗟 𝗢𝗪𝗡𝗘𝗥'
global.phn = '0812 4853 7085'

global.thumbdoc = 'https://telegra.ph/file/2e9939b2f734f5e8bfcc6.jpg'
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ JNGN DI UBAH ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/2e9939b2f734f5e8bfcc6.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
