import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/blackpink?apikey=Shirooo'
	conn.sendFile(m.chat, await(await fetch(url)).buffer(), 'blackpink.jpg', '*Results From BlackPink*', m)
}
handler.command = /^(blackpink)$/i
handler.tags = ['internet']
handler.help = ['blackpink']
handler.limit = 1
handler.register = true
