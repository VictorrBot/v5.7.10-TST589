import { sticker } from '../lib/sticker.js' 
 import { stickerLine, stickerTelegram } from '@bochilteam/scraper' 
  
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
     // TODO: add stickerly 
     const isTele = /tele/i.test(command) 
     if (!args[0]) throw `*Fitur Untuk Search Sticker*\n
*_Contoh: ${usedPrefix + command} naruto_*` 
     const json = await (isTele ? stickerTelegram : stickerLine)(args[0]) 
     m.reply(` 
 *Total Sticker:* ${(json[0]?.stickers || json).length} 
 `.trim()) 
     for (let data of (json[0]?.stickers || json)) { 
         const stiker = await sticker(false, data.sticker || data, global.stickpack, global.stickauth) 
         await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m).catch(console.error) 
         await delay(1500) 
     } 
 } 
 handler.help = ['stikersearch <name>'] 
 handler.tags = ['sticker', 'premium'] 
 handler.command = /^(ss|stickers|stickersearch|ssearch)$/i 
  
handler.limit = true 
handler.premium = true

 export default handler 
  
 const delay = time => new Promise(res => setTimeout(res, time))