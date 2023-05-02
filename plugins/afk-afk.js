let handler = async (m, { text }) => {
  let name = conn.getName(m.sender)
  let user = global.db.data.users[m.sender]
  user.afk = true
  user.afkReason = text || ''
  conn.reply(m.chat, `${name} sedang AFK${text ? ' dengan alasan ' + text : ''}`, m)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler