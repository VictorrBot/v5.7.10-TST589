const handler = async (m, { conn }) => {
  const question = m.text.replace(/^kapan(kah)? /i, '').replace(/\?$/, '')
  const time = `${(1000).getRandom()} ${['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'].getRandom()} lagi`
  const reply = `*Pertanyaan:* ${question}\n*Jawaban:* ${time}...`

  conn.reply(m.chat, reply, m.mentionedJid ? { mentions: m.mentionedJid } : {})
}

handler.help = ['', 'kah'].map(v => `kapan${v} <pertanyaan>`)
handler.tags = ['kerang', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^kapan(kah)?$/i
handler.register = true

export default handler
