let handler = async (m, { conn }) => {
    conn.tebaksurah = conn.tebaksurah ? conn.tebaksurah : {}
    let id = m.chat
    if (!(id in conn.tebaksurah)) throw false
    let json = conn.tebaksurah[id][1]
    conn.sendButton(m.chat, '```' + json.surah.englishName.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
    ], m)
}
handler.command = /^hsur$/i

handler.limit = true

export default handler