let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `*_Tag Atau Balas Pesan Yang Mau Dijadikan Premium_*`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `*_Masukkan Nomor Setelah Nomor/Tag_*`
    if (isNaN(txt)) return m.reply(`*_Hanya Nomer_*`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
    user.premium = true
    m.reply(`*${user.name}* Sekarang Sudah Premium\n*Countdown ${txt} Hari.*`)
}
handler.help = ['addprem [@user] <hari>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.rowner = true

export default handler