import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn }) => {

    let pp = fs.readFileSync('./thumbnail.jpg')
    let gc1 = 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa'
    let caption = `*🍀 FELICIA ROOM*\n*_https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa_*\n\n*🍀 FELICIA CLUB*\n*_https://chat.whatsapp.com/EggiK9aee8JBbzBQseuSZT_*`
    await conn.sendFile(m.chat, pp, 'thumbnail.jpg', caption, m, { 
        contextInfo: {
            externalAdReply: {
                sourceUrl: `${gc1}`,
                title: '𝗠𝘆 𝗚𝗿𝗼𝘂𝗽 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹', 
                body: '⌬ 𝗙𝗲𝗹𝗶𝗰𝗶𝗮-𝗠𝗗',
                thumbnail: pp
            } 
        }
    })
}
handler.help = ['gcbot']
handler.tags = ['info','main']
handler.command = /^gcbot$/i
export default handler
