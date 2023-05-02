import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    let vte = `*Tidak Ada Sesi Voting Digrup Ini*`
 if (!(id in conn.vote)) throw await conn.sendButtonDoc(id, vte, `*_Tekan Button Untuk Memulai_*`, '𝗦𝗧𝗔𝗥𝗧 𝗩𝗢𝗧𝗘', '.startvote', m )
 
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw '*_Kamu Sudah Vote_*'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`*Done*\n\n*_${usedPrefix}cekvote - Untuk Mengecek Vote_*`)

}
handler.help = ['vote']
handler.tags = ['vote']
handler.command = /^(up|de)?vote$/i
handler.group = true
handler.register = true
export default handler 