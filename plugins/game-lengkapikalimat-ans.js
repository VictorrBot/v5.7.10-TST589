import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hlen/i.test(m.quoted.text) || /.*hlen/i.test(m.text))
        return !0
    this.lengkapikalimat = this.lengkapikalimat ? this.lengkapikalimat : {}
    if (!(id in this.lengkapikalimat))
        return conn.sendButton(m.chat, '*_Soal Itu Telah Berakhir_*', author, null, buttonlengkapikalimat, m)
    if (m.quoted.id == this.lengkapikalimat[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.lengkapikalimat[id][3])
            delete this.lengkapikalimat[id]
            return conn.sendButton(m.chat, '*Kok Menyerah?*', author, null, buttonlengkapikalimat, m)
        }
        let json = JSON.parse(JSON.stringify(this.lengkapikalimat[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.lengkapikalimat[id][2]
            conn.sendButton(m.chat, `*_BENAR_*\n+${this.lengkapikalimat[id][2]} XP`, author, null, buttonlengkapikalimat, m)
            clearTimeout(this.lengkapikalimat[id][3])
            delete this.lengkapikalimat[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*_DIKIT LAGI_*`)
        else
            conn.sendButton(m.chat, `*_SALAH_*`, author, null, [
                ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hlen'],
                ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttonlengkapikalimat = [
    ['𝗟𝗘𝗡𝗚𝗞𝗔𝗣𝗜-𝗞𝗔𝗟𝗜𝗠𝗔𝗧', '/lengkapikalimat']
]