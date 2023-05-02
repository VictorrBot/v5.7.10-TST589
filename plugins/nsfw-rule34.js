import { googleImage, pinterest } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.reply(m.chat, '*_Fitur NSFW Tidak Akti Digrup Ini_*', m)

    if (!text) throw `*_Contoh: ${usedPrefix}${command} Sagiri`
const res = await (await googleImage('rule34 ' + text)).getRandom()
conn.sendFile(m.chat, res, 'rule34.jpg', `➩ Random Nsfw Rule34 ${text ? text.capitalize() : false}`, m)
}
handler.help = ['rule34 <character>']
handler.tags = ['nsfw','premium']
handler.command = ['rule34']

handler.premium = true
handler.limit = 5

export default handler
