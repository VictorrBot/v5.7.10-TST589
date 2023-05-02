import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Fitur Searching Foto Dari App Pinterest*\n\n*_Contoh: ${usedPrefix + command} Kayes_*`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*PINTEREST SEARCH*

*🔍 Result From* ${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i
handler.register = true
handler.limit = 1
export default handler