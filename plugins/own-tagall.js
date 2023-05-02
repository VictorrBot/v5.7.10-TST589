import moment from 'moment-timezone'
let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    let bcbg = 'https://telegra.ph/file/f9ee793128e98e36fb29c.jpg'
    conn.send3ButtonLoc(m.chat, bcbg, wm, `${text ? `${text}\n` : ''}*TAG ALL*\n` + users.map(v => '@' + v.replace(/@.+/, '')).join`\n` + '\n','𝗠𝗘𝗡𝗨', '.menu', '𝗢𝗪𝗡𝗘𝗥', '.owner', `\nlove u owner`, '.huuu', null,
 /*let m.reply(`${text ? `${text}\n` : ''}┌─「 Tag All 」\n` + users.map(v => '│◦❒ @' + v.replace(/@.+/, '')).join`\n` + '\n└────', null, */{
        mentions: users
    })
}

handler.help = ['o-tagall']
handler.tags = ['owner']
handler.command = ['o-tagall']
handler.owner = true
handler.group = true
handler.register = true
export default handler
