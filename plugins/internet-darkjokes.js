import fetch from 'node-fetch'
import bo from 'dhn-api'

let handler = async (m, { conn }) => {
  const res = await bo.Darkjokes()
  await conn.sendMessage(m.chat, res.text, MessageType.text, { quoted: m })
}

handler.help = ['darkjoke', 'darkjokes']
handler.tags = ['internet']
handler.command = /^(darkjoke|darkjokes)$/i
handler.limit = 1
handler.register = true

export default handler
