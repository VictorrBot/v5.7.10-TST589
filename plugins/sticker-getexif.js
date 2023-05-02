import { format } from 'util'
const { default: { Image } } = await import('node-webpmux')

let handler = async (m) => {
    if (!m.quoted) return m.reply('*_Reply Stikernya_*')
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new Image()
        await img.load(await m.quoted.download())
        m.reply(format(JSON.parse(img.exif.slice(22).toString())))
    }
}
handler.help = ['getexif']
handler.tags = ['sticker']
handler.register = true
handler.limit = 1
handler.command = ['getexif']

export default handler