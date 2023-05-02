let handler = async (m, { conn, command }) => {
  let url = `https://api.lolhuman.xyz/api/random/art?apikey=${global.lolkey}`
  try {
    await conn.sendFile(m.chat, url, null, '*Results From Fanart*', m)
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, 'Terjadi kesalahan pada sistem', m)
  }
}

handler.command = /^(fanart)$/i
handler.tags = ['premium','anime']
handler.help = ['fanart']
handler.limit = true
handler.premium = true
handler.register = true

export default handler