import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*calo/i.test(m.quoted.text) || /.*(calo|bantuan)/i.test(m.text))
        return !0
    this.caklontong = this.caklontong ? this.caklontong : {}
    if (!(id in this.caklontong))
        return m.reply('*_Soal Itu Telah Berakhir_*')
    if (m.quoted.id == this.caklontong[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.caklontong[id][1]))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.caklontong[id][2]
            await this.sendButton(m.chat, `*_BENAR_* +${this.caklontong[id][2]} XP\n${json.deskripsi}`, author, null, [['𝗖𝗔𝗞-𝗟𝗢𝗡𝗧𝗢𝗡𝗚', '.caklontong']], m)
            clearTimeout(this.caklontong[id][3])
            delete this.caklontong[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*_DIKIT LAGI_*`)
        else
            m.reply(`*_SALAH_*`)
    }
    return !0
}
export const exp = 0