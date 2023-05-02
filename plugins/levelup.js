import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
  
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
*FAILED LEVEL UP*

Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* Lagi
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    
    let pp = 'https://telegra.ph/file/8fef8b5ed06a222cc45cc.jpg'
    const vv = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
              
    let hh = API('males', '/levelup', {
                                pp: vv,
                                })
    if (before !== user.level) {
        let teks = `.             ${user.role}`
        let str = `
*SUCCESSFUL LEVEL UP*

*${before}* Ke *${user.level}*
Tier *${user.role}*
`.trim()
        try {
        const img = await levelup(teks, user.level)
            conn.send3ButtonImg(m.chat, await(await fetch(hh)).buffer(), `*SELAMAT...*\n*Anda Telah Naik Level*\n*📊 Level:* ${user.level}\n*🏆 Tier:* ${user.role}`, botdate, '𝗠𝗘𝗡𝗨', '.menu', '𝗢𝗪𝗡𝗘𝗥', '.owner', '𝗖𝗥𝗘𝗗𝗜𝗧', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://facebook.com/',
    mediaType: 1, 
    description: sgc,
    title: "⌬ Felicia-MD",
    body: wm,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
   }}})
        } catch (e) {
       /*     conn.sendButton(m.chat, str, botdate, [['INVENTORY', '.inv']], m)*/
            conn.send3ButtonImg(m.chat, await(await fetch(hh)).buffer(), `*SELAMAT...*\n*Anda Telah Naik Level*\n*📊 Level:* ${user.level}\n*🏆 Tier:* ${user.role}`, botdate, '𝗠𝗘𝗡𝗨', '.menu', '𝗢𝗪𝗡𝗘𝗥', '.owner', '𝗖𝗥𝗘𝗗𝗜𝗧', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/',
    mediaType: 2, 
    description: sgc,
    title: "⌬ Felicia-MD",
    body: wm,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
   }}})
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp','rpg']
handler.register = true
handler.command = /^level(|up)$/i

export default handler
