import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `*Fitur Untuk Unduh VT No Wm*\n\n*Example: ${usedPrefix + command} https://vt.tiktok.com/ZS8h6mM5f/*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `*Itu Bukan Tautan Tik Tok`, fkontak,  m)  
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `*Server Error*`, fkontak,  m)
await conn.reply(m.chat, `*Mengunduh...*`, fkontak,  m)    
conn.sendFile(m.chat, url, 'tiktok.mp4', `*Done Downloading*\n${wm}`.trim(), m)
} catch {
await conn.reply(m.chat, `*Server Error*`, fkontak,  m)  
}}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.limit = 1
export default handler