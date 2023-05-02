import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (id in conn.tebaktebakan) {
        conn.sendButton(m.chat, '*_Masih Ada Soal Belum Terjawab Di Chat Ini_*', author, null, buttons, conn.tebaktebakan[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*${command.toUpperCase()} Games 🎮*

*${json.soal}*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}hteb Untuk Bantuan
*🎁 Prize* ${poin} XP
    `.trim()
    conn.tebaktebakan[id] = [
        await conn.sendButton(m.chat, caption, author, `${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaktebakan[id]) conn.sendButton(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝗧𝗘𝗕𝗔𝗞-𝗧𝗘𝗕𝗔𝗞𝗔𝗡', '/tebaktebakan']
            ], conn.tebaktebakan[id][0])
            delete conn.tebaktebakan[id]
        }, timeout)
    ]
}
handler.help = ['tebaktebakan']
handler.tags = ['game']
handler.command = /^tebaktebakan/i
handler.register = true
handler.limit = 1
export default handler

const buttons = [
    ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hteb'],
    ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
]