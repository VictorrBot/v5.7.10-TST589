import { caklontong } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) return conn.reply(m.chat, 'Masih Ada Soal Belum Terjawab Dichat Ini', conn.caklontong[id][0])
    let json = await caklontong()
    let caption = `
CAK-LONTONG Games 🎮

${json.soal}

⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik
🔍 Ketik ${usedPrefix}calo Untuk Bantuan
🎁 Prize ${poin} XP
`.trim()
    conn.caklontong[id] = [
      m.reply(`${caption}\n`),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `Waktu Habis⏱️\nJawabannya Adalah ${json.jawaban}\n${json.deskripsi}`, author, null, [['𝗖𝗔𝗞-𝗟𝗢𝗡𝗧𝗢𝗡𝗚', `${usedPrefix}caklontong`]], conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.register = true
handler.limit = 1
export default handler