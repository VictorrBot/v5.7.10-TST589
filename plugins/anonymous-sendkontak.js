import { MessageType, Presence } from '@adiwajshing/baileys'

async function handler(m, { command, conn, text }) {
  this.anonymous = this.anonymous ? this.anonymous : {}
  const who = m.mentionedJid?.[0] || (m.fromMe ? conn.user.jid : m.sender)
  const room = Object.values(this.anonymous).find((room) => room.check(who))
  if (!room) throw '*Kamu tidak berada di anonymous chat*'
  const other = room.other(who)
  const name = text || conn.getName(m.sender)
  const number = who.split('@')[0]
  const tks = `Nomor: *${m.sender.split`@`[0]}*\nNama: *${name}*`
  await this.reply(m.chat, '*Mengirimkan kontak...*')
  if (other) this.reply(other, `Partner mengirimkan kontak kepadamu`)
  if (other) {
    const profilePic = await conn.getProfilePicture(m.sender).catch(_ => './src/avatar_contact.png')
    const contactMessage = {
      displayName: name,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nFN:${name}\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`,
      jpegThumbnail: await conn.downloadProfilePicture(m.sender).catch(_ => null)
    }
    await this.sendMessage(other, contactMessage, MessageType.contact)
  }
}

handler.help = ['sendkontak']
handler.tags = ['anonymous']
handler.command = /^(sendkontak)$/i
handler.private = true
handler.register = true
handler.limit = 1

export default handler
