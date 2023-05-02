let handler = async (m, { conn, command }) => {
  let url = `https://api.lolhuman.xyz/api/random/sfw/neko?apikey=${global.lolkey}`
  try {
    await conn.sendFile(m.chat, url, null, '*Results From Neko*', m)
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, 'Terjadi kesalahan pada sistem', m)
  }
}

handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.limit = true
handler.register = true

export default handler