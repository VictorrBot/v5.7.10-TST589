let handler = async (m, { conn, command }) => {
  let url = `https://api.lolhuman.xyz/api/random/sfw/megumin?apikey=${global.lolkey}`
  try {
    await conn.sendFile(m.chat, url, null, '*Results From Megumin*', m)
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, 'Terjadi kesalahan pada sistem', m)
  }
}

handler.command = /^(megumin)$/i
handler.tags = ['anime']
handler.help = ['megumin']
handler.limit = true
handler.register = true

export default handler