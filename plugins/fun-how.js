let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    throw `Gunakan contoh: ${usedPrefix}${command} seseorang`
  }
  
  const personalityTraits = [
    'gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones',
    'sadboy', 'jelek', 'bijaksana', 'mandiri', 'supel', 'sabar', 'humoris', 'kreatif', 'integritas',
    'kritis', 'idealis', 'kejujuran', 'dermawan', 'hormat', 'setia', 'adil', 'murah hati', 'sopan',
    'optimis', 'tekun', 'rajin', 'bisa diandalkan', 'penyayang', 'disiplin', 'bertanggung jawab',
    'berani', 'percaya diri', 'tawakal', 'bersyukur', 'ceria', 'sombong', 'labil', 'minder', 'caper',
    'pendendam', 'perfeksionis', 'sulit dipuaskan', 'sensitif', 'penyendiri', 'moody', 'egois', 'pesimis',
    'bosan', 'pembangkang', 'pelit', 'ambisius'
  ]

  if (!personalityTraits.includes(command.replace(/^how/i, '').toLowerCase())) {
    throw `Maaf, ${command} bukan pertanyaan yang valid. Silakan gunakan ${usedPrefix}help untuk mendapatkan daftar pertanyaan yang valid.`
  }

  const randomPercentage = (Math.random() * 100).toFixed(0)
  const answer = `${text} itu ${randomPercentage}% ${command.replace('how', '').toUpperCase()}`
  
  conn.reply(m.chat, `*Pengukur Sifat Individual*\n\n${answer}`, m, m.mentionedJid ? {
    mentions: m.mentionedJid
  } : {})
}

handler.help = personalityTraits.map(v => `how${v} siapa?`)
handler.tags = ['kerang', 'fun']
handler.command = /^how(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy|jelek|bijaksana|mandiri|supel|sabar|humoris|kreatif|integritas|kritis|idealis|kejujuran|dermawan|hormat|setia|adil|murah hati|sopan|optimis|tekun|rajin|bisa diandalkan|penyayang|disiplin|bertanggung jawab|berani|percaya diri|tawakal|bersyukur|ceria|sombong|labil|minder|caper|pendendam|perfeksionis|sulit dipuaskan|sensitif|penyendiri|moody|egois|pesimis|bosan|pembangkang|pelit|ambisius)$/i
handler.register = true
export default handler
