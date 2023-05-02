let handler = async m => m.reply(`
Mau Lihat Menu? Lihat Di *.? Menu*
Perhatiakan Tanda *.?*

Jika Menu Tidak Terlihat
Daftar Dulu *#daftar*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['menu']
handler.tags = ['main','rpg']
handler.command = /^menu$/i
handler.register = false
handler.premium = false
export default handler