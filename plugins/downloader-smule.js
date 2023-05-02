import fetch from 'node-fetch'

let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.getProfilePicture(who).catch(_ => hwaifu.getRandom())
  let name = await conn.getName(who)
  if (!args[0]) throw `*_Contoh: ${usedPrefix}${command} http://i.coco.fun/short/1513tui/_*`
  if (!args[1]) {
    throw `Pilih tipe yang ingin diunduh (video atau audio) dengan menambahkan argumen kedua, contoh: ${usedPrefix}${command} ${args[0]} video`
  }
  let type = args[1].toLowerCase()
  if (type !== 'video' && type !== 'audio') {
    throw `Tipe tidak valid, pilih di antara "video" atau "audio"`
  }
  let res = await fetch(`https://api.lolhuman.xyz/api/smule?apikey=Shirooo&url=${args[0]}`)
  let x = await res.json()
  if (type === 'video') {
    await conn.sendVideo(m.chat, x.result.video, `*${htki} SMULE ${htka}*
*Title:* ${x.result.title}
`, m)
  } else if (type === 'audio') {
    await conn.sendFile(m.chat, x.result.audio, 'audio.mp3', '', m, null, { 
      fileLength: fsizedoc, 
      seconds: fsizedoc, 
      contextInfo: {
        mimetype: 'audio/mp4',
        externalAdReply: {
          mediaUrl: sig,
          mediaType: 2,
          description: wm, 
          title: '👋 Hai, ' + name + ' ' + ucapan,
          body: botdate,
          thumbnail: await (await fetch(pp)).buffer(),
          sourceUrl: x.result.audio
        }
      }
    })
  }
}

handler.help = ['smule'].map(v => v + ' <url> <tipe>')
handler.tags = ['downloader']
handler.command = /^((smule)(downloader|dl)?)$/i
handler.register = true
handler.limit = 1

export default handler
