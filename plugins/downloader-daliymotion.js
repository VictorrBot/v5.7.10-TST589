import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let name = await conn.getName(who)
    if (!text) throw '*Fitur Untuk Unduh Video Dailymotion*\n\n*_Contoh: .dailymotion https://www.dailymotion.com/video/x6dmhc9_*'
    let res = await axios('https://violetics.pw/api/downloader/dailymotion?apikey=beta&url=' + text)
    let json = res.data
    let dapet = json.result.url
    let row = Object.values(dapet).map((v, index) => ({
        title: htjava + ' * 🎥 Quality:* ' + v.quality,
        description: '\n*⌚ ID:* ' + json.result.id + '\n*💬 Title:* ' + json.result.meta.title + '\n*🌐 URL:* ' + v.url + '\n*🌍 Source:* ' + json.result.meta.source + '\n*👁️ Views:* ' + json.result.meta.duration + '\n*📌 SD:* ' + json.result.sd.url + '\n\n*📌 HD:* ' + json.result.hd.url,
        rowId: usedPrefix + 'get ' + v.url
    }))
    let message = `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`
    message += row.map(e => e.title + '\n' + e.description).join('\n\n')
    return conn.reply(m.chat, message, m)
}
handler.help = ['dailymotion'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(dm|dailymotion)?$/i

handler.exp = 0
handler.register = true
handler.limit = 1

export default handler
