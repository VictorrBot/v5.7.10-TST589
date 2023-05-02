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
                     "title": `01 Hour Shield 🛡️`, 
                     "rowId": `${usedPrefix}perisai01` 
                   }, { 
                     "title": "03 Hour Shield 🛡️",  
                     "rowId": `${usedPrefix}perisai03` 
                   }, { 
                     "title": `09 Hour Shield 🛡️`, 
                     "rowId": `${usedPrefix}perisai09` 
                   }, { 
                     "title": `12 Hour Shield 🛡️`, 
                     "rowId": `${usedPrefix}perisai12` 
                     }, { 
                     "title": "24 Hour Shield 🛡️",  
                     "rowId": `${usedPrefix}perisai24` 
                   }, { 
                     "title": `03 Day Shield 🛡️`, 
                     "rowId": `${usedPrefix}perisai033` 
                   }, { 
                     "title": `07 Day Shield`, 
                     "rowId": `${usedPrefix}perisai07` 
                     }, { 
                     "title": "14 Day Shield",  
                     "rowId": `${usedPrefix}perisai14`                   
                    }, { 
                     "title": `30 Day Shield`, 
                     "rowId": `${usedPrefix}perisai30` 
 }, { 
                     "title": `Shield`, 
                     "rowId": `${usedPrefix}infoperisai` 
                   }] 
                  }
               ]
         const listMessage = {
      text: `*Shield List 🛡️*

Shield / Perisai Melindungimu Dari Pencurian.

*01 Hour Shield*
 • Price 8 Limit

*03 Hour Shield*
 • Price 20 Limit

*09 Hour Shield*
 • Price 57 Limit

*12 Hour Shield*
 • Price 71 Limit
 
*24 Jam Shield*
 • Price 142 Limit

*03 Day Shield*
 • Price 250 Limit

*07 Day Shield*
 • Price 500 Limit
 
*14 Day Shield*
 • Price 900 Limit
 
*30 Day Shield*
 • Price 1500 Limit

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
handler.help = ['perisai']
handler.tags = ['rpg']
handler.command = /^perisai$/i

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