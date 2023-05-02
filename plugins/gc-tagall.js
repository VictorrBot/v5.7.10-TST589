import moment from 'moment-timezone'
import fetch from 'node-fetch'
let handler = async (m, { conn, participants }) => {
  let users = participants.map(u => u.jid).filter(jid => jid.endsWith('@s.whatsapp.net') && !jid.startsWith(conn.user.jid))
  let bcbg = 'https://telegra.ph/file/6726375e0308e920330d5.jpg'
  let text = `*TAG-ALL*\n\n` + users.map(v => '@' + v.replace(/@.+/, '')).join`\n` + '\n'
  conn.sendMessage(m.chat, text, 'conversation', {
    contextInfo: {
      mentionedJid: users
    },
    thumbnail: await (await fetch(bcbg)).buffer()
  })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.register = false
handler.fail = null

export default handler
