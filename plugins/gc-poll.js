//Credit? ImYanXiao
//Gunakan Fitur Ini Dengan Bijak Karena Ini Termasuk Bug Whatsapp
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `*Fitur Ini Untuk Polling*\nPisahkan Dengan Tanda *|*\n\n*_Format: ${usedPrefix + command} Pesan|Opsi1|Opsi2_*\n*_Contoh: ${usedPrefix + command} Suka Aku?|Ya|Tidak_*\n\n*_Opsi Bisa Lebih Dari 2_*`
if (!text.includes('|')) throw `*Fitur Ini Untuk Polling*\nPisahkan Dengan Tanda *|*\n\n*_Format: ${usedPrefix + command} Pesan|Opsi1|Opsi2_*\n*_Contoh: ${usedPrefix + command} Suka Aku?|Ya|Tidak_*\n\n*_Opsi Bisa Lebih Dari 2_*` /**/

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])}

return conn.sendPoll(m.chat, `*📩 Survei Diminta Oleh*\n       *${name}*\n\n*${text.split('|')[0]}*`, a, m)
}
handler.help = ['poll <pesan|op1|op2|dst>']
handler.tags = ['group'] 
handler.command = ['poll', 'polling'] 
handler.group = true
handler.admin = true
handler.register = true
handler.limit = 2
export default handler
