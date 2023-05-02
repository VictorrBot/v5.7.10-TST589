let handler = async (m, { conn, usedPrefix, text, command }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `*Tidak Ada Hash*`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw '*Kamu Tidak Memiliki Izin Untuk Menghapus Perintah Stiker Ini*'
    delete sticker[hash]
    m.reply(`*Succeed*`)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database', 'premium']
handler.command = ['delcmd']
handler.premium = true
handler.register = true
export default handler
