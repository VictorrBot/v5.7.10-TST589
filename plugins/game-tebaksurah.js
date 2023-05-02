import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {


    conn.tebaksurah = conn.tebaksurah ? conn.tebaksurah : {}
    let id = m.chat
    if (id in conn.tebaksurah) {
        conn.sendButton(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', author, null, buttons, conn.tebaksurah[id][0])
        throw false
    }
    let ran = 6236
    let res = await fetch('https://api.alquran.cloud/v1/ayah/' + ran.getRandom() + '/ar.alafasy')
    if (res.status !== 200) throw await res.text()
    let result = await res.json()
    let json = result.data
    if (result.code == '200') {
    // if (!json.status) throw json
    let caption = `*${command.toUpperCase()} Games 🎮*

*📕 Number In Surah:* ${json.numberInSurah}
*🎙️ By:* ${json.edition.name} ${json.edition.englishName}

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} detik*
*🔍 Ketik ${usedPrefix}hsur Untuk Bantuan
*🎁 Bonus: ${poin} XP

*_Balas Pesan Ini Untuk Menjawab_*`.trim()

let captu = `
*${json.surah.englishName}*

*INFORMATION*
*Surah Number:* ${json.surah.number}
*Surah Name:* ${json.surah.name} ${json.surah.englishName}
*Eng Name:* ${json.surah.englishNameTranslation}
*Number Of Ayahs:* ${json.surah.numberOfAyahs}
*Type:* ${json.surah.revelationType}
`

    conn.tebaksurah[id] = [
        await conn.sendButton(m.chat, caption, author, `${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaksurah[id]) conn.sendButton(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah ${captu}`, author, null, [
                ['𝗧𝗘𝗕𝗔𝗞-𝗦𝗨𝗥𝗔𝗛', '/tebaksurah']
            ], conn.tebaksurah[id][0])
            delete conn.tebaksurah[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.audio, 'coba-lagi.mp3', '', m)
    } else if (result.code == '404') {
    m.reply(`*_Ulangi Command ${usedPrefix + command} Karena ${json.data}_*`)
    }
}
handler.help = ['tebaksurah']
handler.tags = ['game']
handler.command = /^tebaksurah/i
handler.register = true
handler.limit = 1
export default handler

const buttons = [
    ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hsur'],
    ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
]