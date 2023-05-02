import { webp2png } from '../lib/webp2mp4.js'
import { URL_REGEX } from '@adiwajshing/baileys'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '*_Gambar Tidak Ditemukan_*'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `*_Reply/Caption Gambar Dengan Balasan ${usedPrefix + command}_*`
}
handler.help = ['setppgroup']
handler.tags = ['group']

handler.command = /^setppgroup|setppgc|setppgrup$/i
handler.register = true
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler