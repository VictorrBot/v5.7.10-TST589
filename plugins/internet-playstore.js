import fetch from 'node-fetch'

let handler = async (m, { conn, text, args }) => {
	if (!args[0]) throw `*Fitur Untuk Mencari APK Diplaystore*`
	let enc = encodeURIComponent(text)
try {
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()
if (!gPlay.titulo) return m.reply(`*Tidak Ditemukan*`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`*🔍 Pencarian:* ${gPlay.titulo}

*💬 Nama:* ${gPlay.id}
*🌐 Link:* ${gPlay.link}
*🖼️ Ikon:* ${gPlay.imagen}
*✍️ Developer:* ${gPlay.desarrollador}
*📜 Deskripsi:* ${gPlay.descripcion}
*💲 Uang:* ${gPlay.moneda}
*🎭 Gratis:* ${gPlay.gratis}
*💸 Harga:* ${gPlay.precio}
*📈 Rating:* ${gPlay.puntuacion}`},{quoted:m})
} catch (e) {
m.reply('*Error, Coba Lagi Dengan Kata Kunci Yang Berbeda*')
console.log(e)
}
}

handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.register = true
handler.limit = 1
export default handler 