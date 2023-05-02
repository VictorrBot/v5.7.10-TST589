/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.husbu = ["luffy", "naruto", "ichigo", "goku", "elric", "saitama", "levi","light","eren","kirito","shoyo","vegeta","killua","zoro","natsu","yato","subaru","asta","kyouma","kazima","denji","daisuke","anos","rimuru","maou","oreki","akuto","kelvin","mob","diablo","sakamoto","ainz","cid"]

var bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"enam": "⭐⭐⭐⭐⭐⭐"
}//star how good is the husbu
   
   let husb = text.trim().toLowerCase() // to filter text
     
   if (!husbu.includes(husb)) throw `*Pilih Husbu Apa Yg Kamu Inginkan:\n\n${husbu.map(husb => `› ${husb}`).join('\n')}

     Cara Menggunakan:
     *${usedPrefix + command} <namehusbu>*
     
     Contoh:
     *${usedPrefix + command} luffy*
     `

    if (user.husbu == "") {
    user.husbu = husb
    m.reply(`*Anda Telah Memilih Husbu ${husb}*`)
    } else if (user.husbu) {
    m.reply(`*Anda Sudah Punya Husbu ${user.husbu} Tidak Bisa Diganti*`)
   }

}

handler.help = ['selecthusbu <type>']
handler.tags = ['rpg']
handler.command = /^(slecthusbu|selecthusbu)$/i
handler.limit = 1
handler.register = true
export default handler
