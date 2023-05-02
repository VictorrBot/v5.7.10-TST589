import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = async (m, { conn, args, command }) => {
    let _muptime
    if (process.send) {
        process.send('uptime')
        _muptime = await new Promise(resolve => {
            process.once('message', resolve)
            setTimeout(resolve, 1000)
        }) * 1000
    }
    let muptime = clockString(_muptime)
    let tag = `@${m.sender.replace(/@.+/, '')}`
    let mentionedJid = [m.sender]
    let flaa = `${pickRandom(fla)}` + muptime
    let rtt = await (await fetch(flaa)).buffer()
    conn.sendMessage(m.chat, `*Bot Uptime*\n\n${muptime}`, 'text', { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: rtt, thumbnailUrl: sgc, title: '⌬ Felicia-MD'}}})
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']
handler.register = true

export default handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
    if (time >= 4) {
        res = "Pagi Kak 🌄 "
    }
    if (time >= 10) {
        res = "Siang Kak ☀️ "
    }
    if (time >= 15) {
        res = "Sore Kak 🌇 "
    }
    if (time >= 18) {
        res = "Malam Kak 🌙 "
    }
    return res
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, ' Jam ', m, ' Menit ', s, ' Detik '].map(v => v.toString().padStart(2, 0)).join('')
}
