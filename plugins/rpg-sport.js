import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `${ucapan()}`,
    orderTitle: `${ucapan()}`,
    thumbnail:   await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [{ 
                     "title": `Sepak Bola ⚽`, 
                     "rowId": `${usedPrefix}sepakbola` 
                   }, { 
                     "title": "Basket 🏀",  
                     "rowId": `${usedPrefix}basket` 
                   }, { 
                     "title": `Tenis 🏓`, 
                     "rowId": `${usedPrefix}tenis` 
                   }, { 
                     "title": "Bulu Tangkis 🏸",  
                     "rowId": `${usedPrefix}bulutangkis` 
                   }, { 
                     "title": `Bola Voli 🏐`, 
                     "rowId": `${usedPrefix}bolavoli` 
                   }, { 
                     "title": "Renang 🏊‍♀️",  
                     "rowId": `${usedPrefix}renang` 
                   }, { 
                     "title": `Golf ⛳`, 
                     "rowId": `${usedPrefix}golf` 
                   }, { 
                     "title": `Tinju Muay Thai 🥊`, 
                     "rowId": `${usedPrefix}tinjumuaythai` 
                   }] 
                  }
               ]
         const listMessage = {
      text: `*Sports Picks List 🎽*

Menghasilkan ST ⚡

`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
    
    }
handler.help = ['sport']
handler.tags = ['rpg']
handler.command = /^sport$/i

handler.fail = null
handler.register = true
handler.limit = 1
export default handler 

function ucapan() {
    let res = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = ('Hi')
  if (time >= 0) {
    res = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    res = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    res = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    res = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    res = ('Selamat Malam🌙')
  }
  return res
}