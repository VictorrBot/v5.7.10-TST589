
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    
    let fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6282127487538-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./media/ok.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let scnya = `*T Q T O*`
    let footerny = `\n*Recode By:* 么 Keizha
*Wa Owner:* 6281347927862

*THANK YOU SO MUCH*
*_• Allah YME_*
*_• Orang Tua_*
*_• Penyedia Api_*
*_• Penyedia Module_*
*_• Nurutomo_*
*_• Jarot OFC_*
*_• Zeeone OFC_*
*_• Arull OFC_*
*_• Focus ID_*
*_• Aine_*
*_• Ilman_*
*_• Fajar_*
*_• Ramlan_*
*_• GempyTon_*
*_• Fzone_*
*_• Istikmal_*
*_• Amirul_*
*_• Elaina_*
*_• Ariffb_*
*_• Kriyzn_*
*_• Hyzer_*
*_• Deffri_*
*_• KannaChan_*
*_• Christian ID_*
*_• Elaina_*
`
 conn.send3ButtonImg(m.chat, `https://telegra.ph/file/2f45a18efc09676dffe95.jpg`, scnya, footerny, '𝗠𝗘𝗡𝗨', '.menu', '𝗢𝗪𝗡𝗘𝗥', '.owner', '𝗖𝗥𝗘𝗗𝗜𝗧', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'bit.ly/3tqDwMO',
    mediaType: 2, 
    description: sgc,
    title: "𝗕𝗼𝘁 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗚𝗿𝗼𝘂𝗽",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['tqto','credit']
handler.tags = ['info']
handler.command = ['tqto','credit']
handler.register = true 
handler.limit = 1
export default handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}