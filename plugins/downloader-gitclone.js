//AL? Offc
import fs from 'fs'
import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `*Fitur Untuk Unduh Repositori Github*\n\n*_Contoh: ${usedPrefix}gitclone https://github.com/Kitsune/Felicia-MD-V41_*`
    if (!regex.test(args[0])) throw '*Link Salah*'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    conn.sendButtonDoc(m.chat,'*GITHUB DOWNLOADER*\n\nTunggu Sebentar Kak...', wm, '𝗠𝗘𝗡𝗨', '.menu', m, { contextInfo: { externalAdReply: {
title: 'Repositori Sedang Diunduh...',
body: wm, 
thumbnail: fs.readFileSync("./thumbnail.jpg"),
mediaType:1,
mediaUrl: "https://telegra.ph/file/6d2890ba6b98259c3b7a5.jpg",
sourceUrl: sgc
}}})
   await conn.sendFile(m.chat, url, filename, null, m)
   }
handler.help = ['gitclone'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /gitclone/i
handler.register = true
handler.limit = 1

export default handler
