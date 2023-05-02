let handler = async (m, { conn, args, text}) => {
    let who = m.mentionedJid[0] || conn.parseMention(text[0]) || (text[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (m.isGroup) who = m.mentionedJid[0]
    let [orang, nama] = text.split`| `
    if (!who) throw '*_Tag User_*'
    if (!orang) throw '*_Tag User_*'
    if (!nama) throw '*Masukkan Nama Titlenya?*\n\n*_Contoh: .titlein @mention| nama_*'
    if (!(who in global.db.data.users)) throw '*_User Tidak Terdaftar Dalam Database_*'
    let user = global.db.data.users[who]
  user.title = nama
  m.reply(`
*${conn.getName(who)} Sekarang Mendapatkan Title*\n\n*${nama}*
`)
}
handler.help = ['titlein [nama]']
handler.tags = ['owner']
handler.mods = true
handler.command = /^titlein$/i
handler.register = true
export default handler 