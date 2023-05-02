import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw '*Hanya Bisa Dibuka Digrup*'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw '*GroupMetadata Tidak Ditentukan*'
    if (!('participants' in groupMetadata)) throw '*Peserta Tidak Ditentukan*'
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '*Bot Tidak Berada Digrup Itu*'
    if (!me.admin) throw '*Bot Bukan Admin*'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.register = true
handler.botAdmin = true
handler.admin = true

export default handler