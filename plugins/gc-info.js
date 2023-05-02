let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*GROUP INFORMATION*\n
*ID:* 
${groupMetadata.id}
*Name:* 
${groupMetadata.subject}
*Total Members:*
${participants.length} Members
*Group Owner:* 
@${owner.split('@')[0]}
*Group Admins:*
${listAdmin}
*Description:* 
${groupMetadata.desc?.toString() || 'Unknown'}

*Group Settings:*
${isBanned ? 'On' : 'Off'} Banned
${welcome ? 'On' : 'Off'} Welcome
${detect ? 'On' : 'Off'} Detect
${del ? 'On' : 'Off'} Anti Delete
${antiLink ? 'On' : 'Off'} Anti Link

*Message Settings:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i
handler.register = true
handler.limit = 1
handler.group = true

export default handler