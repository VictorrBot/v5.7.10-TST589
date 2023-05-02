import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `*Masukkan Pencarian*` 
	
    try {
	const link =  await axios.get(`https://id.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`*WIKIPEDIA*

‣ Hasil Dari: *${wik}*

${resulw}`)
} catch (e) {
  m.reply('*Tidak Ditemukan, Pastikan Kata Kunci Benar')
}
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['wiki','wikipedia'] 
handler.register = true

export default handler
