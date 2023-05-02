let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '*Fitur Untuk Mengganti PP Grup*\n\n*_Reply Image Dengan Caption ${usedPrefix + command}_*'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `*Fitur Untuk Mengganti PP Grup*\n\n*_Reply Image Dengan Caption ${usedPrefix + command}_*`
}
handler.help = ['setpp']
handler.tags = ['group']

handler.command = /^setpp$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
