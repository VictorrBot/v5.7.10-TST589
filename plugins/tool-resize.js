// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix, args}) => {
	let towidth = args[0]
	let toheight = args[1]
	if (!towidth) throw '*Fitur Untuk Ubah Ukuran Foto*\n*Reply Foto Yang Ingin Diresize*\n\n*_Contoh: .resize 1000 1000_*'
	if (!toheight) throw '*Fitur Untuk Ubah Ukuran Foto*\n*Reply Foto Yang Ingin Diresize*\n\n*_Contoh: .resize 1000 1000_*'
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "*Fitur Untuk Ubah Ukuran Foto*\n*Reply Foto Yang Ingin Diresize*\n\n*_Contoh: .resize 1000 1000_*"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `Mime ${mime} Tidak Didukung`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await conn.resize(link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `*${htki} RESIZE PHOTOS ${htka}*

*BEFORE*
*• ᴡɪᴅᴛʜ:* ${size.before.width}
*• ʜᴇɪɢʜᴛ:* ${size.before.height}

*AFTER*
*ᴡɪᴅᴛʜ:* ${size.after.width}
*ʜᴇɪɢʜᴛ:* ${size.after.height}

*LINK*
*ᴏʀɪɢɪɴᴀʟ:* ${link}
*ᴄᴏᴍᴘʀᴇss:* ${linkcompres}`, m)
}
handler.help = ['resize <width> <height> (reply|caption)']
handler.tags = ['tools']
handler.command = /^(resize)$/i
handler.register = true
handler.limit = 1
export default handler
