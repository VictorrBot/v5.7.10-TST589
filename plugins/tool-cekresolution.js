// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix, command }) => {
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `*_Reply Gambar Dengan Perintah ${usedPrefix + command}_*`

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let height = await source.getHeight()
let width = await source.getWidth()

m.reply(`*🖼️ RESOLUTION: ${width} x ${height}*

*Width:* ${width}
*Height:* ${height}
*Link:* ${link}`)
}
handler.help = ['cekresolution <reply | caption>', 'cekreso <reply | caption>']
handler.tags = ['tools']
handler.command = /^(cekreso(lution)?)$/i
handler.limit = 1
handler.register = true
export default handler