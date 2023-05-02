import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/cecan?apikey=Shirooo'
	conn.sendFile(m.chat, await(await fetch(url)).buffer(), 'cecan.jpg', '*Results From Cecan*', m)
}
handler.command = /^(cecan)$/i
handler.tags = ['internet']
handler.help = ['cecan']
handler.limit = 1
handler.register = true
export default handler
