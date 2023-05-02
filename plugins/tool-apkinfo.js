import moment from 'moment-timezone'
import gplay from 'google-play-scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let [url, appId] = text.match(/([a-zA-Z]+(\.[a-zA-Z]+)+)/g) || []
	if (url !== 'play.google.com') throw `*Fitur Mencari Info Apk Dari Play Store*\n\n*_Contoh: ${usedPrefix + command} https://play.google.com/store/apps/details?id=com.whatsapp_*`
	// if (!appId) throw 'App ID not found'
	let res = await gplay.app({ appId })
	let { title, summary, installs, scoreText, priceText, size, androidVersionText, developer, icon, screenshots, released, updated, version } = res
	let str = `*💬 Title:* ${title}\n  ${summary}\n*🔽 Installs:* ${installs}\n*⭐ Score:* ${scoreText}\n*🛒 Price:* ${priceText}\n`
		+ `*🗂️ Size:* ${size}\n*📱 Android Ver:* ${androidVersionText}\n*👤 Dev:* ${developer}\n*📂 Released:* ${released}\n`
		+ `*🔼 Updated:* ${moment(updated).locale('en').format('MMM D, Y')}\n*⚙️ Version:* ${version}`
	let opt = { contextInfo: { externalAdReply: { title, body: summary, thumbnail: (await conn.getFile(icon)).data, sourceUrl: res.url }}}
	conn.sendMessage(m.chat, { image: { url: screenshots.getRandom() }, caption: str, ...opt }, { quoted: m })
}
handler.command = /^(apk(info|detail))$/i
handler.register = true
handler.limit = 1
export default handler
