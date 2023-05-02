let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
    if (!event) return await conn.sendButton(m.chat, `*Simulasi Tersedia:*
*_${usedPrefix + command} welcome @user_*
*_${usedPrefix + command} bye @user_*
*_${usedPrefix + command} promote @user_*
*_${usedPrefix + command} demote @user_*`.trim(), wm, null, [['Welcome', '#simulate welcome'], ['Bye', '#simulate bye']])
    let mentions = text.replace(event, '').trimStart()
    let who = mentions ? conn.parseMention(mentions) : []
    let part = who.length ? who : [m.sender]
    let act = false
    m.reply(`*${htjava} Simulating ${event}...*`)
    switch (event.toLowerCase()) {
        case 'add':
        case 'invite':
        case 'welcome':
            act = 'add'
            break
        case 'bye':
        case 'kick':
        case 'leave':
        case 'remove':
            act = 'remove'
            break
        case 'promote':
            act = 'promote'
            break
        case 'demote':
            act = 'demote'
            break
/*        case 'delete':
            deleted = m
            break
*/
        default:
            throw eror
    }
    if (act) return conn.participantsUpdate({
        id: m.chat,
        participants: part,
        action: act
    })
//    return conn.onDelete(m)
}
handler.help = ['simulate <event> [@mention]']
handler.tags = ['owner']
handler.owner = true
handler.command = /^simulate$/i
export default handler