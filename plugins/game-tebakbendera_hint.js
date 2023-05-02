let handler = async (m, { conn }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```\nBalas Soalnya Bukan Pesan Ini')
}
handler.command = /^tebe$/i
handler.limit = true
export default handler
