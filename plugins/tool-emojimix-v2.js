import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import fs from "fs"
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
let [emoji1, emoji2] = text.split`+`
	if (emoji1 && emoji2) {
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.stickpack, global.stickauth)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
} else throw `*Fitur Untuk Menggabungkan Emoji*\n\n*_Contoh: ${usedPrefix+command} ${decodeURI('%F0%9F%92%80')}+${decodeURI('%F0%9F%92%80')}_*`

}
handler.help = ['emojimix'].map(v => v + ' emot1|emot2>')
handler.tags = ['sticker']
handler.command = /^(emojimix)$/i
export default handler
handler.register = true
handler.limit = 1
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})
