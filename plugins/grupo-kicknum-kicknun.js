/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`*Fitur Untuk Mengeluarkan Nomor Dengan Kode Negara Tertentu*\n\n*Example: ${usedPrefix + command} 62*`) 
if (isNaN(args[0])) return m.reply(`*Fitur Untuk Mengeluarkan Nomor Dengan Kode Negara Tertentu*\n\n*Example: ${usedPrefix + command} 62*`) 
let lol = args[0].replace(/[+]/g, '') 
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`*Tidak Ada Kode Negara Tersebut Di Grup Ini +${lol}*`)
let numeros = ps.map(v=> '⭔ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `*List Nomor Dengan Kode +${lol}:*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply('*Aktifkan Restrict Di Grup Ini*') 
if (!isBotAdmin) return m.reply('*Jadikan Bot Sebagai Admin*')          
conn.reply(m.chat, `*[❗] 𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙲𝙸𝙾𝙽 𝙳𝙴 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 +${lol}, 𝙲𝙰𝙳𝙰 𝟷0 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁𝙰 𝙰 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} ʏᴀ ʜᴀ sɪᴅᴏ ᴇʟɪᴍɪɴᴀᴅᴏ ᴏ ʜᴀ ᴀʙᴀɴᴅᴏɴᴀᴅᴏ ᴇʟ ɢʀᴜᴘᴏ*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('*Error*')}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
handler.tags = ['premium']
handler.help = ['kicknum','listanum']
handler.register = true
handler.premium = true
export default handler