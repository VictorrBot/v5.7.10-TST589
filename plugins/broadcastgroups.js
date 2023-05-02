/*import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? `${htki} *BROADCAST* ${htka}\n` + teks : `${htki} *BROADCAST* ${htka}\n` + teks + '\n' + readMore + '\n\n' + botdate), true).catch(_ => _)
  m.reply('Selesai Broadcast All Group :)')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
*/
import moment from 'moment-timezone'

let handler = async (m, { conn,isOwner, isROwner, text }) => {
//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    //batas
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
    let bcbg = `${pickRandom(['https://telegra.ph/file/af4b4ad2756d48f3686ab.jpg', 'https://telegra.ph/file/93c9028a76a5ea2e2e82c.jpg','https://telegra.ph/file/55bc36e6f52972dd20208.jpg','https://telegra.ph/file/9a7f21daca76d337a0d19.jpg','https://telegra.ph/file/1b393cdb15989f5e19c5a.jpg','https://telegra.ph/file/6d2890ba6b98259c3b7a5.jpg','https://telegra.ph/file/df5ea20c4d1c9ab1db475.jpg','https://telegra.ph/file/2f45a18efc09676dffe95.jpg','https://telegra.ph/file/359dc2bd6f603d002b6d3.jpg'])}`
    for (let i of anu) {
  conn.send3ButtonImg(i, bcbg, `*${global.namebot} BROADCAST GROUP*\n`,`

${pesan}

`,
   '𝗠𝗘𝗡𝗨','.menu',
     '𝗢𝗪𝗡𝗘𝗥','.owner',
       '𝗗𝗢𝗡𝗔𝗧𝗘','.donasi'
       )
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgc <teks>']
handler.tags = ['owner']
handler.command = /^(broadcastgc|bcgc)$/i

handler.rowner = true
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

export default handler
