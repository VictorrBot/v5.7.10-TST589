// ---------------------------old------------------------------------------------

/*import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*${htki} PLAY ${htka}*

${htjava} *Title:* ${title}
📤 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Views:* ${viewH}

🔗 *Url:* ${url}
📔 *Description:* ${description}
  `.trim(), wm, thumbnail, url, '📣 GO TO YOUTUBE', null, null, [
    ['🎶 Audio', `${usedPrefix}yta ${url} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true
handler.register = true

export default handler */
// ---------------------------new------------------------------------------------

import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
try {
  if (!text) throw `*Fitur Untuk Search & Unduh Video/Audio Dari YT*\n\n*_Contoh: ${usedPrefix}${command} dj old_*`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '*_Video/Audio Tidak Ditemukan_*'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let whmodsdev = `*${htki} PLAY ${htka}*

💬 *Title:* ${title}
🌐 *Url:* ${url}
📑 *Description:* ${description}

📂 *Published:* ${publishedTime}
⏳ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  await conn.sendButton(m.chat, whmodsdev, wm, botdate, [
    ['🎶 𝗠𝗣𝟯', `${usedPrefix}yta ${url} yes`],
    ['🎥 𝗠𝗣𝟰', `${usedPrefix}ytv ${url} yes`],
    ['🔎 𝗙𝗜𝗡𝗗 𝗔𝗡𝗢𝗧𝗛𝗘𝗥', `${usedPrefix}yts ${text}`]
], m, fdoc)
} catch {
if (!text) throw '*_Masukkan Pencarian_*'
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `*${htki} PLAY ${htka}*

💬 *Title:* ${title}
🌐 *Url:* ${url}
📑 *Description:* ${description}

📂 *Published:* ${publishedTime}
⏳ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  let buttons = [{ buttonText: { displayText: '🎶 𝗠𝗣𝟯' }, buttonId: `${usedPrefix}yta ${url}` }, { buttonText: { displayText: '🎥 𝗠𝗣𝟰' }, buttonId: `${usedPrefix}ytv ${url}` }, { buttonText: { displayText: '🔎 𝗙𝗜𝗡𝗗 𝗔𝗡𝗢𝗧𝗛𝗘𝗥' }, buttonId: `${usedPrefix}yts ${text}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: '*_MP3 Sedang Diproses_*', buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg })
}

}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play2?$/i
handler.register = true
handler.limit = 1
handler.exp = 0

export default handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}

