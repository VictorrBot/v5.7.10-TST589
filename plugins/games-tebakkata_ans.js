import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*teka/i.test(m.quoted.text) || /.*(hint|teka)/i.test(m.text))
        return !0
    this.tebakkata = this.tebakkata ? this.tebakkata : {}
    if (!(id in this.tebakkata))
        return conn.sendButton(m.chat, '*_Soal Itu Telah Berakhir_*', author, ['𝗧𝗘𝗕𝗔𝗞-𝗞𝗔𝗧𝗔', '/tebakkata'], m)
    if (m.quoted.id == this.tebakkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakkata[id][2]
            conn.sendButton(m.chat, `*_BENAR_*\n+${this.tebakkata[id][2]} XP`, author, ['𝗧𝗘𝗕𝗔𝗞-𝗞𝗔𝗧𝗔', '/tebakkata'], m)
            clearTimeout(this.tebakkata[id][3])
            delete this.tebakkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*_DIKIT LAGI_*`)
        else
            m.reply(`*_SALAH_*`)
    }
    return !0
}
export const exp = 0