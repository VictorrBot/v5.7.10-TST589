import fetch from 'node-fetch'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  if (!args[0]) throw `*Fitur Untuk Mengunduh Video Cocofun*\n\n*_Contoh: ${usedPrefix}${command} http://i.coco.fun/short/1513tui/_*`
  if (!args[1]) {
    let res = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=Shirooo&url=${args[0]}`)
    let x = await res.json()
    let message = `*COCOFUN*
*💬 Title:* ${x.result.title}
*🔖 Tag:* ${x.result.tag}
*👍 Like:* ${x.result.likes}
*👎 Dislike:* ${x.result.dislike}
*👁️ Views:* ${x.result.views}
*📂 Uploader:* ${x.result.uploader}
*⏳ Duration:* ${x.result.duration}
*👎 Dislike:* ${x.result.dislike}`
    return conn.sendFile(m.chat, x.result.nowm, x.result.title + '.mp4', message, m)
  }
  let res = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=Shirooo&url=${args[0]}`)
  let x = await res.json()
  if (args[1] == 'withwm') {
    let message = `*COCOFUN*
*💬 Title:* ${x.result.title}
*🔖 Tag:* ${x.result.tag}
*👍 Like:* ${x.result.likes}
*👎 Dislike:* ${x.result.dislike}
*👁️ Views:* ${x.result.views}
*📂 Uploader:* ${x.result.uploader}
*⏳ Duration:* ${x.result.duration}
*👎 Dislike:* ${x.result.dislike}`
    return conn.sendFile(m.chat, x.result.withwm, x.result.title + '.mp4', message, m)
  }
  if (args[1] == 'nowm') {
    let message = `*COCOFUN*
*💬 Title:* ${x.result.title}
*🔖 Tag:* ${x.result.tag}
*👍 Like:* ${x.result.likes}
*👎 Dislike:* ${x.result.dislike}
*👁️ Views:* ${x.result.views}
*📂 Uploader:* ${x.result.uploader}
*⏳ Duration:* ${x.result.duration}
*👎 Dislike:* ${x.result.dislike}`
    return conn.sendFile(m.chat, x.result.nowm, x.result.title + '.mp4', message, m)
  }
}
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.register = true
handler.limit = 1
handler.command = /^c(oco(fun(d(own(load(er)?)?|l))?|d(own(load(er)?)?|l))|cfun(d(own(load(er)?)?|l))?)$/i

export default handler
