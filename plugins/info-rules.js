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
let rules = `*#1. Bot Menjaga Privasi*
_Bot tidak menyebarkan data user maupun file-file yang user kirimkan ke bot kecuali owner yang membutuhkan data itu untuk membuat bot lebih baik._

*#2. Bot Tidak Bertanggung Jawab*
_Bot tidak akan bertanggung jawab atas fitur-fitur apa yang digunakan user yang berarti anda harus benar-benar bijak dalam menggunakan fitur_

*#3. Bot Berhak Blokir*
_Bot tidak akan diam saja jika ada yang menyalahgunakan fitur-fitur dibot ini, misalkan user yang melakukan spam atau melakukan menggunakan bot ini untuk tindak kejahatan_

*#4. Tidak Boleh Dijual*
_Bot melarang keras untuk menjual nomor bot ini_

*#5. Tidak Boleh Dicopas*
_Bot melarang keras untuk mencopas tampilan bot ini_ 

*#6. Bot Stay 24H*
_Bot full 24 jam on dan akan off jika ada perawatan_

`
let nth = `𝗧𝗘𝗥𝗠𝗦 𝗔𝗡𝗗 𝗖𝗢𝗡𝗗𝗜𝗧𝗜𝗢𝗡𝗦\n`
conn.send3ButtonImg(m.chat, `${pickRandom(flaaa2)}` + `${ucapan()} ` + `${name}`, nth, rules, '𝗠𝗘𝗡𝗨', '.menu', '𝗢𝗪𝗡𝗘𝗥', '.owner', '𝗖𝗥𝗘𝗗𝗜𝗧', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://wa.me/18459214155',
    mediaType: 2, 
    description: sgc,
    title: "么 Kitsuneee",
    body: wm,
    thumbnail: fs.readFileSync('./media/qr.png'),
    sourceUrl: 'https://wa.me/6281249122429',
     }}
  })
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
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