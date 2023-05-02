let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Example: ${usedPrefix}${command} Paimon*`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    let whmods = `*${htki} GOOGLE IMAGE ${htka}*
    🔎 *Result:* ${text}
    🌎 *Source:* Google`
    conn.sendFile(m.chat, link, '', whmods, m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tag = ['internet']
handler.command = /^(gimage|image)$/i

export default handler
