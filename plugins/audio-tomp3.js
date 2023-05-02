import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `*Fitur Ini Untuk Mengubah Vidio/VN Menjadi Audio/MP3*\n\n*_Reply Vidio/VN Dengan Caption ${usedPrefix + command}_*`
    let media = await q.download?.()
    if (!media) throw '*Gagal Mengunduh Media*'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '*Gagal Mengkonversi*'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.register = true
handler.limit = 1
handler.command = /^to(mp3|a(udio)?)$/i

export default handler