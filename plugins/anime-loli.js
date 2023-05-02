let handler = async (m, { conn, command }) => {
  let url = `https://api.lolhuman.xyz/api/random/loli?apikey=${global.lolkey}`
  try {
    await conn.sendFile(m.chat, url, null, '*Results From Loli*', m)
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, 'Terjadi kesalahan pada sistem', m)
  }
}

handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
handler.limit = true
handler.register = true

export default handler