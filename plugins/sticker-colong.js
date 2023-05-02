//
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw '*_Reply Stikernya_*'
      stiker = await sticker(img, false, '', '╼━┅⎔┅━━━━━━━━━━━━━━━┅⎔┅━╾\n\n\n\n#2005\n#Kaltim\n#XI\n\n\n\nㅤㅤㅤㅤ ㅤ𝗣𝘂𝗻𝘆𝗮 ᴋᴇɪᴢʜᴀ >>>\nㅤㅤ  ㅤ ㅤ🏵️ 𝟲𝟮𝟴𝟭𝟮𝟰𝟵𝟭𝟮𝟮𝟰𝟮𝟵\n\n\n\n\n\n- Bot Wa Keizha: 𝟲𝟮𝟱𝟭𝟲𝟯𝟬𝟴𝟯𝟳𝟱𝟬\n╼━┅⎔┅━━━━━━━━━━━━━━━┅⎔┅━╾')
    } else if (args[0]) stiker = await sticker(false, args[0], '', '么 Kitsuneee')
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw 'Conversion failed'
  }
}
handler.help = ['colong']
handler.tags = ['sticker']
handler.command = /^colong|c$/i
handler.owner = true

export default handler
