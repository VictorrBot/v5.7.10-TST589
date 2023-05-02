import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) throw `*Fitur Untuk Screenshot Situs*\n\n*_Contoh:  ${usedPrefix + command} https://s.id_*`

	let lis = [
'https://hadi-api.herokuapp.com/api/ssweb?url=' + args[0] + '&device=tablet&full=on',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + args[0] + '&device=tablet&full=off',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + args[0] + '&device=desktop&full=on',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + args[0] + '&device=desktop&full=off',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + args[0] + '&device=phone&full=on',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + args[0] + '&device=phone&full=off',
'https://hadi-api.herokuapp.com/api/ssweb2?url=' + args[0],
'https://nurutomo.herokuapp.com/api/ssweb?url=' + args[0],
'https://shot.screenshotapi.net/screenshot?token=WCCYKR0-X5CMMV0-JB4G5Z5-P6SPC8R&url=' + args[0] + '&full_page=true&fresh=true&output=image&file_type=jpg',
'https://api.popcat.xyz/screenshot?url=' + args[0],
'https://api.apiflash.com/v1/urltoimage?access_key=7eea5c14db5041ecb528f68062a7ab5d&wait_until=page_loaded&url=' + args[0]
]
let liss = [
'𝗛𝗔𝗗𝗜-𝗔𝗣𝗜 𝗧𝗔𝗕𝗟𝗘𝗧 𝗙𝗨𝗟𝗟 𝗢𝗡',
'𝗛𝗔𝗗𝗜-𝗔𝗣𝗜 𝗧𝗔𝗕𝗟𝗘𝗧 𝗙𝗨𝗟𝗟 𝗢𝗙𝗙',
'𝗛𝗔𝗗𝗜-𝗔𝗣𝗜 𝗗𝗘𝗦𝗞𝗧𝗢𝗣 𝗙𝗨𝗟𝗟 𝗢𝗡',
'𝗛𝗔𝗗𝗜-𝗔𝗣𝗜 𝗗𝗘𝗦𝗞𝗧𝗢𝗣 𝗙𝗨𝗟𝗟 𝗢𝗙𝗙',
'𝗛𝗔𝗗𝗜-𝗔𝗣𝗜 𝗣𝗛𝗢𝗡𝗘 𝗙𝗨𝗟𝗟 𝗢𝗡',
'𝗛𝗔𝗗𝗜-𝗔𝗣𝗜 𝗣𝗛𝗢𝗡𝗘 𝗙𝗨𝗟𝗟 𝗢𝗙𝗙',
'𝗛𝗔𝗗𝗜-𝗔𝗣𝗜 𝗢𝗥𝗜𝗚𝗜𝗡𝗔𝗟',
'𝗡𝗨𝗥𝗨𝗧𝗢𝗠𝗢',
'𝗦𝗛𝗢𝗧.𝗦𝗖𝗥𝗘𝗘𝗡𝗦𝗛𝗢𝗧𝗔𝗣𝗜',
'𝗔𝗣𝗜.𝗣𝗢𝗣𝗖𝗔𝗧',
'𝗔𝗣𝗜.𝗔𝗣𝗜𝗙𝗟𝗔𝗦𝗛'
]
let row = Object.keys(lis, liss).map((v, index) => ({
		title: '𝗕𝗬 ' + liss[v],
		description: '𝗕𝗢𝗧 ' + author,
		rowId: usedPrefix + 'get ' + lis[v]
	}))
	let button = {
		buttonText: `𝗦𝗖𝗥𝗘𝗘𝗡𝗦𝗛𝗢𝗧 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*Silahkan pilih opsi screenshot dibawah.*`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?|scre?e?nshu?o?t|sswebdown$/i
handler.register = true
handler.limit = 1
export default handler