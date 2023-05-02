import { nomorhoki } from '@bochilteam/scraper'
//let jimp = require('jimp')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} 62xxxxxxx`
    const result = await nomorhoki(text)
    
let nohoki = `
*NOMOR HOKI*

*Nomor:* ${result.nomer}
*Angka Bagua Shuzi:* ${result.angka_bagua_shuzi}

*Positif:* ${result.positif.positif}
*Kekayaan:* ${result.positif.kekayaan}
*Kesehatan:* ${result.positif.kesehatan}
*Cinta:* ${result.positif.cinta}
*Kestabilan:* ${result.positif.kestabilan}

*Negatif:* ${result.negatif.negatif}
*Perselisihan:* ${result.negatif.perselisihan}
*Kehilangan:* ${result.negatif.kehilangan}
*Malapetaka:* ${result.negatif.malapetaka}
*Kehancuran:* ${result.negatif.Kehancuran}
`
await conn.sendButton(m.chat, nohoki, wm, [['𝗠𝗘𝗡𝗨', '.menu']], m)
}

handler.help = ['nomorhoki'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(nomorhoki)$/i
handler.register = true

export default handler
