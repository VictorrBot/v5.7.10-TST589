import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `*Fitur Untuk Mencari Lirik Lagu*\n\n*_Contoh: ${usedPrefix}${command} Faded_*`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
🎶 Lyrics *${result.title}*
👤 Author *${result.author}*


${result.lyrics}


🌐 URL *${result.link}*
`.trim())
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.register = true
handler.limit = 1
export default handler