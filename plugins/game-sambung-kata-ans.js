import fetch from 'node-fetch'

export async function before(m) {
    let id = m.chat
    this.skata = this.skata ? this.skata : {}
    if (/nyerah/i.test(m.text) && (id in this.skata)) {
        delete conn.skata[id]
        return await this.send1Button(m.chat, `*Mau Lagi?*`, wm, '𝗦𝗔𝗠𝗕𝗨𝗡𝗚-𝗞𝗔𝗧𝗔', '.skata', m)
    }
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(Mulai|Lanjut) :/i.test(m.quoted.text)) return !0
    if (!(id in this.skata)) return await this.send1Button(m.chat, `*Mau Lagi?*`, wm, '𝗦𝗔𝗠𝗕𝗨𝗡𝗚-𝗞𝗔𝗧𝗔', '.skata', m)
    if (m.quoted.id == this.skata[id][0].id) {
        let answerF = (m.text.toLowerCase().split` `[0]).trim()
        let res = await fetch('https://restapi.frteam.xyz/ceksambungkata?kata=' + m.text.toLowerCase().split(' ')[0] + '&apikey=Hrbot')
        let json = await res.json()
        if (!answerF.startsWith(this.filter(this.skata[id][1]))) {
            return m.reply(`*SALAH!*\nJawaban Harus Dimulai Dari Kata *${this.filter(this.skata[id][1].toUpperCase())}*`)
        } else if (!json.status) {
            return m.reply(`*SALAH*\nKata *${m.text.toUpperCase()}* Tidak Valid`)
        } else if (this.skata[id][1] == answerF) {
            return m.reply(`*SALAH*\n*_Jawabanmu Sama Dengan Soal, Silahkan Cari Kata Lain_*`)
        } else if (this.skata[id][2].includes(answerF)) {
            return m.reply(`*SALAH*\nKata *${m.text.toUpperCase()}* Sudah Pernah Digunakan`)
        }
        global.db.data.users[m.sender].exp += 100
        this.skata[id][2].push(answerF)
        this.skata[id] = [
            await this.reply(m.chat, 'Lanjut : *' + answerF.toUpperCase() + '*\n\n*' + this.filter(answerF.toUpperCase()) + '... ?*\n\n*Balas Pesan Ini Untuk Menjawab*', m),
            answerF,
            this.skata[id][2]
        ]
        return !0
    }
}
