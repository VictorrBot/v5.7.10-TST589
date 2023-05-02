import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*Fitur Untuk Mencari Grup WA*\n\n*_Contoh: ${usedPrefix + command} bot_*`
    
    let json = await fetch(`https://anabotofc.herokuapp.com/api/carigrup?apikey=AnaBot&query=${text}`)
        let jsons = await json.json()
        let caption = `*SEARCH GRUP WHATSAPP*`
        for (let x of jsons.result) {
        caption += `
*💬 Nama* : ${x.title}
*🌐 Link :* ${x.link}
*📑 Desc :* ${x.desc}
`}
        return m.reply(caption)
        
}
handler.help = ['carigrup <pencarian>']
handler.tags = ['tools']
handler.register = true
handler.limit = 1
handler.command = /^carig(ro?up|c)/i

export default handler
