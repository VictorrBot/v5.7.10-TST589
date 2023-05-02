
import { toDataURL } from 'qrcode'

let handler = async (m, { conn, text }) => conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '*_Done Making QRC_*', m)

handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.register = true
handler.limit = 1

export default handler