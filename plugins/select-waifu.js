/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.waifu = ["rem", "asuna", "mikasa", "saber", "kagome", "taiga", "holo","rin","megumin","yuno","kyouko","emilia","chitoge","tohru","zerotwo","rias","sakura","yui","ayase","erza","mio","rukia","albedo","alice","siesta","origami","elaina","ninymralei","aqua","bocchi","makise","nami","ayase"]

var bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"enam": "⭐⭐⭐⭐⭐⭐"
}//star how good is the waifu
   
   let waif = text.trim().toLowerCase() // to filter text
     
   if (!waifu.includes(waif)) throw `*Pilih Waifu Apa Yg Kamu Inginkan:\n\n${waifu.map(waif => `› ${waif}`).join('\n')}

     Cara Menggunakan:
     *${usedPrefix + command} <namewaifu>*
     
     Contoh:
     *${usedPrefix + command} rem*
     `

    if (user.waifu == "") {
    user.waifu = waif
    m.reply(`*Anda Telah Memilih Waifu ${waif}*`)
    } else if (user.waifu) {
    m.reply(`*Anda Sudah Punya Waifu ${user.waifu} Tidak Bisa Diganti*`)
   }

}

handler.help = ['selectwaifu <type>']
handler.tags = ['rpg']
handler.command = /^(slectwaifu|selectwaifu)$/i
handler.limit = 1
handler.register = true
export default handler
