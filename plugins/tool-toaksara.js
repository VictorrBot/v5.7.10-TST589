import { latinToAksara } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Fitur Ubah Latin Ke Aksara Jawa*\n\n*_Contoh: ${usedPrefix + command} Hai_*`
	try {
		let anu = await latinToAksara(`${text}`)
		m.reply(`*Hasil:*\n${anu}`)
	} catch (e) {
		console.log(e)
		m.reply(`*ERROR*`)
	}
}

handler.help = ['toaksara <teks>']
handler.tags = ['tools']
handler.command = /^((latin)?toaksara)$/i
handler.register = true
handler.limit = 1
export default handler