import { tebakkata } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', conn.tebakkata[id][0])
        throw false
    }
    const json = await tebakkata()
    let caption = `
*TEBAK-KATA Games 🎮*

*${json.soal}*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} detik*
*🔍 Ketik* ${usedPrefix}teka Untuk Bantuan
*🎁 Bonus* ${poin} XP
`.trim()
    conn.tebakkata[id] = [
        await conn.sendButton(m.chat, caption, author, ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', `${usedPrefix}teka`], m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.sendButton(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.jawaban}*`, author, ['𝗧𝗘𝗕𝗔𝗞-𝗞𝗔𝗧𝗔', `${usedPrefix}tebakkata`], conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i
handler.register = true
handler.limit = 1
export default handler
