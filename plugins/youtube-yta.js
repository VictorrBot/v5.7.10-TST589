let limit = 80
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw '*Fitur Untuk Unduh MP3 Dari YT*\n\n*_Contoh: .yta https://www.youtube.com/watch?v=1luByK1RCQI_*'
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || '*_Tidak Bisa Mengunduh Audio_*')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${htki} YOUTUBE MP3 ${htka}*

*💬 Title:* ${title}
*🗂️ Type:* mp3
*📂 Filesize:* ${audio.fileSizeH}

*_File Sedang Diproses_*
`.trim(), m)
  if (!isLimit) await conn.sendFile(m.chat, source, title + '.mp3', `
*${htki} YOUTUBE MP3 ${htka}*

*💬 Title:* ${title}
*🗂️ Type:* mp3
*📂 Filesize:* ${audio.fileSizeH}

*_File Sedang Diproses_*
`.trim(), m, null, {
    asDocument: chat.useDocument
  })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.exp = 0
handler.register = true
handler.limit = true

export default handler