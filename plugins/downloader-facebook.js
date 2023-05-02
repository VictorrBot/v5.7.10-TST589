import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `*Fitur Untuk Unduh Video FB*\n\n*_Contoh: ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/_*`
  }

  const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
  
  for (const { url, isVideo } of result.reverse()) {
    conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `*FACEBOOK DOWNLOADER*\n\n*🌐 URL:* ${url}`, m)
  }
}

handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloader|dl)?)$/i
handler.register = true
handler.limit = 1

export default handler
