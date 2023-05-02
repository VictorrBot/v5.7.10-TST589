import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*(who|hint)/i.test(m.quoted.text) || /.*(who|hint)/i.test(m.text)) return !0
    this.siapakahaku = this.siapakahaku ? this.siapakahaku : {}
    if (!(id in this.siapakahaku)) return conn.sendButton(m.chat, '*_Soal Itu Telah Berakhir_*', author, ['𝗦𝗜𝗔𝗣𝗔𝗞𝗔𝗛-𝗔𝗞𝗨', '/siapakahaku'], m)
    if (m.quoted.id == this.siapakahaku[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.siapakahaku[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].
                exp += this.siapakahaku[id][2]
            conn.sendButton(m.chat, `*_BENAR_*\n+${this.siapakahaku[id][2]} XP`, author, ['𝗦𝗜𝗔𝗣𝗔𝗞𝗔𝗛-𝗔𝗞𝗨', '/siapakahaku'], m)
            clearTimeout(this.siapakahaku[id][3])
            delete this.siapakahaku[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*_DIKIT LAGI_*`)
        else m.reply(`*_SALAH_*`)
    }
    return !0
}
handler.exp = 0

export default handler