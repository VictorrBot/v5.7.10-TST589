let handler = async (m, { conn, args, text}) => {
    let [nama] = text.split` `
    if (!nama) throw '*Masukkan Nama Nama CH?*\n\n*_Contoh: .chname nama_*'
    let user = global.db.data.users[m.sender]
  user.chname = nama
  m.reply(`
*Sukses Menetapkan Nama Channel*\n\n*${nama}*
`)
}
handler.help = ['chname [nama]']
handler.tags = ['rpg']
handler.command = /^chname$/i
handler.register = true
export default handler