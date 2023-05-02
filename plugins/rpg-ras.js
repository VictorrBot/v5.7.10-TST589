/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.ras = ["manusia", "elf", "orc", "dwarf", "goblin", "vampir", "werewolf","demon","angel","slime","yokai","naga","mermaid","dragon","peri","kemono","alien","android","shinigami"]

var bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"enam": "⭐⭐⭐⭐⭐⭐"
}//star how good is the ras
   
   let ra = text.trim().toLowerCase() // to filter text
     
   if (!ras.includes(ra)) throw `*Pilih Ras Apa Yg Kamu Inginkan:\n\n${ras.map(ra => `› ${ra}`).join('\n')}

     Cara Menggunakan:
     *${usedPrefix + command} <nameras>*
     
     Contoh:
     *${usedPrefix + command} manusia*
     `

    if (user.ras == "") {
    user.ras = ra
    m.reply(`*Anda Telah Memilih Ras ${ra}*`)
    } else if (user.ras) {
    m.reply(`*Anda Sudah Punya Ras ${user.ras} Tidak Bisa Diganti*`)
   }

}

handler.help = ['selectras <type>']
handler.tags = ['rpg']
handler.command = /^(slectras|selectras)$/i
handler.limit = 1
handler.register = true
export default handler
