import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hgame/i.test(m.quoted.text) || /.*hgame/i.test(m.text))
        return !0
    this.tebakgame = this.tebakgame ? this.tebakgame : {}
    if (!(id in this.tebakgame))
        return conn.sendButton(m.chat, '*_Soal Itu Telah Berakhir_*', author, null, buttontebakgame, m)
    if (m.quoted.id == this.tebakgame[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakgame[id][3])
            delete this.tebakgame[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakgame, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakgame[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakgame[id][2]
            conn.sendButton(m.chat, `*_BENAR_*\n+${this.tebakgame[id][2]} XP`, author, null, buttontebakgame, m)
            clearTimeout(this.tebakgame[id][3])
            delete this.tebakgame[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*_DIKIT LAGI_*`)
        else
            conn.sendButton(m.chat, `*_SALAH_*`, author, null, [
                ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hgame'],
                ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakgame = [
    ['𝗧𝗘𝗕𝗔𝗞-𝗚𝗔𝗠𝗘', '/tebakgame']
]