import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tebe/i.test(m.quoted.contentText)) return !0
  this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
  if (!(id in this.tebakbendera)) return m.reply('*_Soal Itu Telah Berakhir_*')
  if (m.quoted.id == this.tebakbendera[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
    if (['.tebe', '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.name.toLowerCase()) {
      global.db.data.users[m.sender].exp += this.tebakbendera[id][2]
      await this.sendBut(m.chat, `*_BENAR_* +${this.tebakbendera[id][2]} XP`, '', '𝗧𝗘𝗕𝗔𝗞-𝗕𝗘𝗡𝗗𝗘𝗥𝗔', '.tebakbendera', m)
      clearTimeout(this.tebakbendera[id][3])
      delete this.tebakbendera[id]
    } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*_DIKIT LAGI_*`)
    else m.reply(`*_SALAH_*`)
  }
  return !0
}
handler.exp = 0

export default handler
