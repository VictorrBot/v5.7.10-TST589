import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hben/i.test(m.quoted.text) || /.*hben/i.test(m.text))
        return !0
    this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
    if (!(id in this.tebakbendera))
        return conn.sendButton(m.chat, '*_Soal Itu Telah Berakhir_*', author, null, buttontebakbendera, m)
    if (m.quoted.id == this.tebakbendera[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
            return conn.sendButton(m.chat, '*Kok Menyerah*', author, null, buttontebakbendera, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakbendera[id][2]
            conn.sendButton(m.chat, `*_BENAR_*\n+${this.tebakbendera[id][2]} XP`, author, null, buttontebakbendera, m)
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
            m.reply(`*_DIKIT LAGI_*`)
        else
            conn.sendButton(m.chat, `*_SALAH_*`, author, null, [
                ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hben'],
                ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakbendera = [
    ['𝗧𝗘𝗕𝗔𝗞-𝗕𝗘𝗡𝗗𝗘𝗥𝗔', '/tebakbendera']
]