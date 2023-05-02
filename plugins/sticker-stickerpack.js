/* By https://github.com/ALBERTO9883/NyanCatBot-MD */
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Example: ${usedPrefix + command} https://getstickerpack.com/stickers/flork-memes-4-1*`
try {
let url = text
let res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`)
let json = await res.json()
for (let data of (json.result || json)) {
const stikers = await sticker(false, data, global.stickpack, global.stickauth)
conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': true }}, { quoted: m })
await delay(5000)
}} catch {   
await m.reply('*Link Error/Tidak Support*')  
}}
handler.command = /^stickerpack$/i
handler.help = ['stickerpack <link>']
handler.tags = ['sticker']
handler.limit = 1
handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))
