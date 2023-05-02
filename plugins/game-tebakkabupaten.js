import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
  let id = m.chat
  if (id in conn.tebakkabupaten) {
    conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', conn.tebakkabupaten[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
*TEBAK-KABUPATEN GAMES 🎮*

*🏙️ Kabupaten Apakah Ini?*
*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}tebu Untuk Bantuan
*🎁 Prize* ${poin} XP
    `.trim()
  conn.tebakkabupaten[id] = [
    await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), caption, '', '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '.tebu', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakkabupaten[id]) await conn.sendBut(m.chat, `*Waktu Habis ⏱️*\nJawabannya adalah *${json.title}*`, '', '𝗧𝗘𝗕𝗔𝗞-𝗞𝗔𝗕𝗨𝗣𝗔𝗧𝗘𝗡', '.tebakkabupaten', conn.tebakkabupaten[id][0])
      delete conn.tebakkabupaten[id]
    }, timeout)
  ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i
handler.register = true
handler.limit = 1
export default handler
