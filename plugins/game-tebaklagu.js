import fetch from 'node-fetch'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebaklagu[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    
    let src = await (await fetch('https://raw.githubusercontent.com/Aiinne/scrape/main/tebaklagu.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    // if (!json.status) throw json
    let caption = `
    *TEBAK-LAGU Games*
    
*👤 Artis:* ${json.artis}
*💬 Judul:* _____
*⏱️ Timeout:* *${(timeout / 1000).toFixed(2)} detik*
*🔎 Ketik:* *${usedPrefix}cek* untuk bantuan
*🎁 Bonus:* ${poin} XP

*_Balas Pesan Ini Untuk Menjawab._*`.trim()
    conn.tebaklagu[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[id]) conn.reply(m.chat, `*⏱️ Waktu Habis!*\nJawabannya Adalah *${json.judul}*`, conn.tebaklagu[id][0])
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.lagu, 'audio.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i
handler.limit = true
handler.group = true
export default handler