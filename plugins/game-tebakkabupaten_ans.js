import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tebu/i.test(m.quoted.contentText)) return !0
  this.tebakkabupaten = this.tebakkabupaten ? this.tebakkabupaten : {}
  if (!(id in this.tebakkabupaten)) return m.reply('*_Soal Itu Telah Berakhir_*')
  if (m.quoted.id == this.tebakkabupaten[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakkabupaten[id][1]))
    if (['.tebu', '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.title.toLowerCase()) {
      global.db.data.users[m.sender].exp += this.tebakkabupaten[id][2]
      await this.sendBut(m.chat, `*_BENAR_* +${this.tebakkabupaten[id][2]} XP`, '', '𝗧𝗘𝗕𝗔𝗞-𝗞𝗔𝗕𝗨𝗣𝗔𝗧𝗘𝗡', '.tebakkabupaten', m)
      clearTimeout(this.tebakkabupaten[id][3])
      delete this.tebakkabupaten[id]
    } else if (similarity(m.text.toLowerCase(), json.title.toLowerCase().trim()) >= threshold) m.reply(`*_DIKIT LAGI_*`)
    else m.reply(`*_SALAH_*`)
  }
  return !0
}
handler.exp = 0

export default handler
