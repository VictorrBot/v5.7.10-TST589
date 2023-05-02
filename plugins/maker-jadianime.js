import uploadImage from "../lib/uploadFile.js"
var handler = async (m, { 
conn, 
usedPrefix, 
command
 }) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			var img = await q.download?.()
			var out = await uploadImage(img)
			await conn.sendMessage(m.chat, { image: { url: `https://restapi.frteam.xyz/toanime?img=${out}&apikey=qczFstw3` }, caption: `*🤫*` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`*Gagal, Pastikan Foto Jelas.*`)
		}
	} else {
		m.reply(`Kirim Gambar Dengan Caption *${usedPrefix + command}*`)
	}
}
handler.help = ['jadianime']
handler.command = ['toanime', 'jadianime']
handler.tags = ['maker']
handler.premium = true
export default handler
