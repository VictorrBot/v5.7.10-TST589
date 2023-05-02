let handler = async (m, { conn, usedPrefix: _p, args, text, usedPrefix}) => {
	
	if (!m.quoted) throw '*_Reply Chat Yang Ingin Direact_*'
	if (text.length > 2) throw '*_Maksimal 1 Emoji_*'
	if (!text) throw `*_Contoh: ${usedPrefix}react 🤫_*`
conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `${text}`}}, { messageId: m.id })
 }
 handler.help = ['react <emoji>']
handler.tags = ['tools']
handler.command = /^(react)$/i
handler.register = true
export default handler