import acrcloud from 'acrcloud'
let acr = new acrcloud({
	host: 'identify-eu-west-1.acrcloud.com',
	access_key: 'f692756eebf6326010ab8694246d80e7',
	access_secret: 'm2KQYmHdBCthmD7sOTtBExB9089TL7hiAazcUEmb'
})

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/video|audio/.test(mime)) {
		let buffer = await q.download()
		await m.reply('*Memproses_*')
		let { status, metadata } = await acr.identify(buffer)
		if (status.code !== 0) throw status.msg 
		let { title, artists, album, genres, release_date } = metadata.music[0]
		let txt = `*💬 Title:* ${title}${artists ? `\n*🎤 Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
		txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*💿 Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		txt += `*🔼 Release Date:* ${release_date}`
    conn.sendMessage(m.chat, { text: txt.trim(), buttons: [{ buttonText: { displayText: 'Play Music' }, buttonId: `${usedPrefix}play ${title}` }] }, { quoted: m })
		// m.reply(txt.trim())
	} else throw `*_Reply Audio/Video Dengan Perintah: ${usedPrefix + command}_*`
}
handler.help = handler.alias = ['whatmusic']
handler.tags = ['tools']
handler.command = /^(whatmusic)$/i
handler.register = true
handler.limit = 1
export default handler

