let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `*Tidak Ada Voting Digrup Ini*\n\n*_${usedPrefix}mulaivote - Untuk Memulai Vote_*`
    delete conn.vote[id]
    m.reply(`*_Success_*`)

}
handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus)vote$/i
handler.group = true
handler.admin = true
export default handler 