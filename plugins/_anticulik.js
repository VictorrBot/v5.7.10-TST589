import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `*INVITE GROUP*
    
• 3 Hari: 4K/Grup
• 7 Hari: 7K/Grup
• 15 Hari: 13K/Grup
• 30 Hari: 23K/Grup
• 90 Hari: 43K/Grup

Mau Free? Chat Owner.

Jika Berminat Hubungi:
*wa.me/6281249122429*

*_#Real100%_*
*_#Mahal?Ditawar_*
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
