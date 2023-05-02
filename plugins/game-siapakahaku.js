import { siapakahaku } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
*SIAPAKAH-AKU Games 🎮*

*Siapakah Aku ${json.soal}*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}who Untuk Bantuan
*🎁 Prize* ${poin} XP
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, author, ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', `${usedPrefix}who`], m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.jawaban}*`, author, ['𝗦𝗜𝗔𝗣𝗔𝗞𝗔𝗛-𝗔𝗞𝗨', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i
handler.register = true
handler.limit = 1
export default handler
