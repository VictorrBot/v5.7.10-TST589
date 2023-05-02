let handler = async (m, { conn, text }) => {
    if (!text) throw '*_Tag Orang Yang Mau Dibanned_*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*_Tag Orang Yang Mau Dibanned_*'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, '*_Done_*', m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.owner = true

export default handler
