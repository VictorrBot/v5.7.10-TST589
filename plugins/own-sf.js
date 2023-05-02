import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*Masukkan Nama Plugins*\n\n*_Format: ${usedPrefix + command} <teks>_*\n*_Contoh: ${usedPrefix + command} plugins/menu.js_*`
    if (!m.quoted.text) throw `*_Reply Pesannya_*`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`*_Tersimpan Di ${path}_*`)
}
handler.help = ['sf'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true
export default handler