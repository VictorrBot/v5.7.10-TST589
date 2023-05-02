import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*_Reply/Caption Foto/Video Dengan Perintah: .tourl_*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`*🌐 Tautan:* ${link}
*📂 Ukuran:* ${media.length} Byte
*🔥 Expired:* ${isTele ? 'No Expiry Date' : 'Unknown'}`)
}
handler.help = ['upload (reply media)', 'tourl (reply media)']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
handler.limit = true
handler.register = true
export default handler