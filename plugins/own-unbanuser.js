let handler = async (m, { conn, text }) => {
    if (!text) throw '*_Tag User Yang Ingin Diunban_*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*_Tag Usernya_*'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, 'sᴜᴄᴄᴇs!', m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.owner = true

export default handler
