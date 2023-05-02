import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.stickauth, global.stickpack)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sgc,
    mediaType: 2,
    description: '么 Kitsuneee', 
    title: 'Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
    throw stiker.toString()
   
}

handler.customPrefix = /^(hu|huu|huuu|huuuu|huuuuu|y|iy|iya|iyaa|iyh|ya|yaa|ok|oky|oke|okk|cia|ciaaa|ciaa|bot)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/93c9028a76a5ea2e2e82c.jpg",//patrick huu
 "https://telegra.ph/file/af4b4ad2756d48f3686ab.jpg",//anime yntkts
 "https://telegra.ph/file/359dc2bd6f603d002b6d3.jpg",//windah bocil
 "https://telegra.ph/file/e5644427eb2d40b062d76.jpg",//patrick bawa minum
 "https://telegra.ph/file/2f45a18efc09676dffe95.jpg",//pak polisi pap tt
 "https://telegra.ph/file/efa9df19699e76df55d62.jpg",//kucing1
 "https://telegra.ph/file/4eed7e15c25e6a9700106.jpg",//kacamata
 "https://telegra.ph/file/1b393cdb15989f5e19c5a.jpg",//patrick pembohong
 "https://telegra.ph/file/9a7f21daca76d337a0d19.jpg",//spongebob FBI
 "https://telegra.ph/file/55bc36e6f52972dd20208.jpg",//mazowski monster inc
 "https://telegra.ph/file/09babcbc17d4a7863120c.jpg",//wkwk
 "https://telegra.ph/file/42bf16e5aa8ee07d32f9b.jpg",//kucing2
 "https://telegra.ph/file/bef7257e796072febd452.jpg",//patrick anak setan
 "https://telegra.ph/file/3f712fc396541f829774f.jpg",//mazowski 2
 "https://telegra.ph/file/6d2890ba6b98259c3b7a5.jpg",//hengker
 "https://telegra.ph/file/df5ea20c4d1c9ab1db475.jpg",//anjing
 "https://telegra.ph/file/09babcbc17d4a7863120c.jpg",//bapak bapak lovee
 "https://telegra.ph/file/7a505dfa8c53cbd1dcdc6.jpg",//abang saleh
 "https://telegra.ph/file/42bf16e5aa8ee07d32f9b.jpg"//hengker2
]
