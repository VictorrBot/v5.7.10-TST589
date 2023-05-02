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
                     "title": `Fisika 🛰️`, 
                     "rowId": `${usedPrefix}kuis1` 
                   }, { 
                     "title": "Matematika ➗",  
                     "rowId": `${usedPrefix}kuis2` 
                   }, { 
                     "title": `Kimia ⚗️`, 
                     "rowId": `${usedPrefix}kuis3` 
                   }, { 
                     "title": `Biologi 🔬`, 
                     "rowId": `${usedPrefix}kuis4` 
 }, { 
                     "title": `Astronomi 🔭`, 
                     "rowId": `${usedPrefix}kuis5` 
 }, { 
                     "title": `Bahasa Pemrograman 🈁`, 
                     "rowId": `${usedPrefix}kuis6` 
                   }] 
                  }
               ]
         const listMessage = {
      text: `*Premium Prize Quiz ⭐*

*Jawab Pertanyaan Untuk Mendapatkan Premium Gratis.*

*Fisika 🛰️*
  • Premium 10 Hari
*Matematika ➗*
  • Premium 10 Hari
*Kimia ⚗️*
  • Premium 10 Hari
*Biologi 🔬*
  • Premium 10 Hari
*Astronomi 🔭*
  • Premium 10 Hari
*Bahasa Pemrograman 🈁*
  • Premium 10 Hari

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
handler.help = ['kuis']
handler.tags = ['rpg']
handler.command = /^kuis$/i

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