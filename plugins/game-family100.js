import { family100 } from '@bochilteam/scraper'
const winScore = 5999
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, '*_Masih Ada Kuis Yang Belum Terjawab Dichat Ini_*', this.game[id].msg)
        throw false
    }
    const json = await family100()
    let caption = `
*FAMILY100 GAMES 🎮*

*📚 Soal:* ${json.soal}

Terdapat *${json.jawaban.length}* Jawaban${json.jawaban.find(v => v.includes(' ')) ? `
*(Beberapa Jawaban Terdapat Spasi)*
`: ''}
*+${winScore} XP* Setiap Jawaban Benar
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButton(m.chat, caption, author, null, [['𝗦𝗨𝗥𝗥𝗘𝗡𝗗', 'nyerah']], m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i
handler.register = true
handler.limit = 2
export default handler