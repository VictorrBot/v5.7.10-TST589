import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (/help/.test(text)) return m.reply(`
┌「 *Sambung Kata* 」
├ Sambung Kata Adalah
│ Permainan Yang Dimana Setiap
│ Pemainnya Diharuskan Membuat
│ Kata Dari Akhir Kata Yang
│ Berasal Dari Kata Sebelumnya.
└────
┌「 *Peraturan* 」
├ Jawaban Kata Tidak Mengandung
│ Spasi Dan Imbuhan (Me-, -An, Dll).
├ .skata
│ Untuk Memulai
├ Ketik *nyerah*
│ Untuk Menyerah
├ Berhasil Menjawab
│ Mendapatkan 100 Xp
└────`.trim())
    conn.skata = conn.skata ? conn.skata : {}
    let id = m.chat
    let res = await fetch('https://restapi.frteam.xyz/sambungkata?&apikey=Hrbot')
    let json = await res.json()
    if (id in conn.skata) return await conn.send1Button(m.chat, `^ soal ini belum terjawab!`, wm, '𝗡𝗬𝗘𝗥𝗔𝗛', 'nyerah', conn.skata[id][0])
    let kata = json.kata
    conn.skata[id] = [
        await conn.reply(m.chat, 'Mulai : *' + kata.toUpperCase() + '*\n\n*' + conn.filter(kata.toUpperCase()) + '... ?*\n\n*Balas Pesan Ini Untuk Menjawab*', m),
        kata.toLowerCase(),
        []
    ]
}
handler.help = ['sambungkata [help]']
handler.tags = ['game']
handler.command = /^s(ambung)?kata$/i

handler.limit = true

export default handler