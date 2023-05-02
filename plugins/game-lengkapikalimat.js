import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.lengkapikalimat = conn.lengkapikalimat ? conn.lengkapikalimat : {}
    let id = m.chat
    if (id in conn.lengkapikalimat) {
        conn.sendButton(m.chat, '*_Masih Ada Soal Belum Terjawab Di Chat Ini_*', author, null, buttons, conn.lengkapikalimat[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/lengkapikalimat.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*${command.toUpperCase()} Games 🎮*

*${json.pertanyaan}*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}hlen Untuk Bantuan
*🎁 Prize* ${poin} XP
    `.trim()
    conn.lengkapikalimat[id] = [
        await conn.sendButton(m.chat, caption, author, `${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.lengkapikalimat[id]) conn.sendButton(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝗟𝗘𝗡𝗚𝗞𝗔𝗣𝗜-𝗞𝗔𝗟𝗜𝗠𝗔𝗧', '/lengkapikalimat']
            ], conn.lengkapikalimat[id][0])
            delete conn.lengkapikalimat[id]
        }, timeout)
    ]
}
handler.help = ['lengkapikalimat']
handler.tags = ['game']
handler.command = /^lengkapikalimat/i
handler.register = true
handler.limit = 1
export default handler

const buttons = [
    ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hlen'],
    ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
]