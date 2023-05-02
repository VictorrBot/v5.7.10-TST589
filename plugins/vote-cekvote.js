let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `*Tidak Ada Voting Digrup Ini*\n\n*_${usedPrefix}mulaivote - Untuk Memulai Vote_*`
    
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(
`*V O T E*

*Alasan:* ${reason}

*UPVOTE*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*DEVOTE*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}

*${usedPrefix}hapusvote* - Untuk Menghapus Vote

`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
handler.register = true
handler.limit = 1
export default handler 
