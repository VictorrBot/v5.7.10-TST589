import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw 'Reply Sticker Dengan Perintah *.wm pack|author*'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Reply Sticker Dengan Perintah *.wm pack|author*'
    let img = await m.quoted.download()
    if (!img) throw 'Reply Sticker Dengan Perintah *.wm pack|author*'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw '*_Conversion Failed_*'
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker','premium']
handler.command = /^wm|stickerwm|stickerwatermark|swm$/i
handler.premium = true
handler.register = true
handler.limit = 1
export default handler
