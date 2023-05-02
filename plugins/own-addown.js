let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*_Tag User Yang Ingin Diadd Owner_*`
    if (global.owner.includes(who.split`@`[0])) throw '*Sudah Owner*'
    global.owner.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `*@${who.split`@`[0]} Sekarang Owner*`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addowner [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i

handler.rowner = true

export default handler
