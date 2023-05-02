let handler = async (m, { conn, text, usedPrefix, command }) => {
    db.data.sticker = db.data.sticker || {}
    if (!m.quoted) throw 'Balas Stiker Dengan Perintah *${usedPrefix + command}*'
    if (!m.quoted.fileSha256) throw '*SHA256 Hash Missing*'
    if (!text) throw `*_Contoh: ${usedPrefix + command} <teks>_*`
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '*Kamu Tidak Memiliki Izin Untuk Mengubah Perintah Stiker Ini*'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`*Succeed*`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <teks>')
handler.tags = ['database', 'premium']
handler.command = ['setcmd']
handler.premium = true
handler.register = true
export default handler
