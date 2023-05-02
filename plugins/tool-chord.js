import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, '*Fitur Untuk Mencari Chord Lagu*\n\n*_Contoh: ' + usedPrefix + 'Chord Hanya Rindu_*', m)
    axios.get(`https://docs-jojo.herokuapp.com/api/chord?q=` + text)
        .then((res) => {
          let hasil = `*• Chord Lagu ${text} :*\n${res.data.result}`
            conn.reply(m.chat, hasil, m)
        })
        .catch(_ => m.reply('*_Chord Lagu Tidak Ditemukan_*'))
}
handler.help = ['chord <judul lagu>']
handler.tags = ['tools']
handler.command = /^(chord)$/i
handler.limit = true
handler.register = true
export default handler 
