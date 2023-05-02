/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.skill = ["swordmaster", "necromancer", "witch", "archer", "magicswordmaster", "thief", "shadow","synesthesia","alphastigma","sharingan","rinnegan","magic","pantiesthief"]

var bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"enam": "⭐⭐⭐⭐⭐⭐"
}//star how good is the skill
   
   let skil = text.trim().toLowerCase() // to filter text
     
   if (!skill.includes(skil)) throw `*Pilih Skill Apa Yg Kamu Inginkan:\n\n${skill.map(skil => `› ${skil}`).join('\n')}

     Cara Menggunakan:
     *${usedPrefix + command} <nameskill>*
     
     Contoh:
     *${usedPrefix + command} necromancer*
     `

    if (user.skill == "") {
    user.skill = skil
    m.reply(`*Anda Telah Memilih Skill ${skil}*`)
    } else if (user.skill) {
    m.reply(`*Anda Sudah Punya Skill ${user.skill} Tidak Bisa Diganti*`)
   }

}

handler.help = ['selectskill <type>']
handler.tags = ['rpg']
handler.command = /^(slectskill|selectskill)$/i
handler.limit = 1
handler.register = true
export default handler
