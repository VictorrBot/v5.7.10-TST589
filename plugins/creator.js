import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  
 const ini = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown2+'@s.whatsapp.net')}`, `Developer Bot  👑`, `Bingung... 🙂`, `⁨Nothing`, `🇮🇩 Indonesia`, `-`, `Nothing`]
  ], fkontak)
  await conn.send2ButtonDoc(m.chat, `*👋 Hai Kak @${m.sender.split(`@`)[0]}*\nItu Nomor Owner-ku`, wm, '𝗠𝗘𝗡𝗨', '.menu', '𝗗𝗢𝗡𝗔𝗧𝗘', '.donasi', ini, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: wm}}})
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.register = true
handler.command = /^(owner2|pengembang2|creator2)$/i

export default handler
