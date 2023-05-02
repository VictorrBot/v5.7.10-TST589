let handler = async (m, { conn, command }) => {
  let url = `https://api.lolhuman.xyz/api/random/kanna?apikey=${global.lolkey}`
  try {
    await conn.sendFile(m.chat, url, null, '*Results From Kanna*', m)
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, 'Terjadi kesalahan pada sistem', m)
  }
}

handler.command = /^(kanna)$/i
handler.tags = ['anime']
handler.help = ['kanna']
handler.limit = true
handler.register = true

export default handler