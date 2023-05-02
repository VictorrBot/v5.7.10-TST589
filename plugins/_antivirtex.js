let handler = m => m

handler.before = function (m, { user, text }) {

  if (m.isBaileys && m.fromMe) return
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)

  if (chat.antiVirtex && text > 2000) {
    this.reply(m.chat `
*VIRTEX DETECTED*

Terdeteksi *${name}* Telah Mengirim Virtex
`.trim(), m)

    this.groupRemove(m.chat, [m.sender])
  } else return false
}
handler.group = true

export default handler
