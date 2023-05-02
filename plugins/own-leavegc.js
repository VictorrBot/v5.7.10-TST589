let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('*_Goodbye all_*', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leavegc)$/i

handler.owner = true

export default handler