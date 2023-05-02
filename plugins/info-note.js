import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
let esce = `text nya `
let flaaa2 = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
let rules = `*#1. Fitur RPG Sedikit?*
_Developer akan merilis banyak fitur RPG jika yang memainkan fitur RPG banyak_

*#2. Fitur Error/Tidak Merespon?*
_Mungkin terjadi kesalahan pengcodingan, kamu bisa laporkan itu ke owner dengan cara #report_

*#3. Bot Tidak Ada Respon?*
_Mungkin bot sedang offline atau perawatan_

*#4. Kenapa Limit Tidak Reset?*
_Limit tidak akan reset setiap 24H, silahkan mainkan sedikit RPG dan dapatkan money untuk beli limit_

*#5. Bot Gratis?*
_Tentu, tapi hanya trial 3D. kamu bisa hubungi .owner untuk memintanya menambahkan bot ini ke grupmu_

`
let nth = `𝗙𝗥𝗘𝗤𝗨𝗘𝗡𝗧𝗟𝗬 𝗔𝗦𝗞𝗘𝗗 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡𝗦\n`
conn.send3ButtonImg(m.chat, `${pickRandom(flaaa2)}` + `${ucapan()} ` + `${name}`, nth, rules, '𝗠𝗘𝗡𝗨', '.menu', '𝗢𝗪𝗡𝗘𝗥', '.owner', '𝗖𝗥𝗘𝗗𝗜𝗧', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://wa.me/6281347927862',
    mediaType: 2, 
    description: sgc,
    title: "么 Kitsuneee",
    body: wm,
    thumbnail: fs.readFileSync('./media/qr.png'),
    sourceUrl: 'https://wa.me/6281249122429',
     }}
  })
}
handler.help = ['faq']
handler.tags = ['info','main']
handler.command = /^(faq)$/i
handler.register = false
export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)