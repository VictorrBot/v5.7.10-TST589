import fetch from 'node-fetch'

let handler = async (m, { text }) => {
	if (!text) throw '*_Contoh: .npm brainly_*'
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Hasil Dari *"${text}"* Tidak Ditemukan`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
handler.help = ['npmsearch']
handler.tags = ['tools']
handler.command = /^npm(js|search)?$/i
handler.register = true
handler.limit = 2
export default handler
