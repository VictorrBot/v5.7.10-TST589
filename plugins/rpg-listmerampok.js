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
                     "title": `Beginner Robber`, 
                     "rowId": `${usedPrefix}merampok1` 
                   }, { 
                     "title": `Professional Robber`, 
                     "rowId": `${usedPrefix}merampok2` 
                     }, { 
                     "title": "High Class Robber",  
                     "rowId": `${usedPrefix}merampok3`                   
                    }, { 
                     "title": `Legendary Robber`, 
                     "rowId": `${usedPrefix}merampok4` 
 }, { 
                     "title": `Rob`, 
                     "rowId": `${usedPrefix}infomerampok` 
                   }] 
                  }
               ]
         const listMessage = {
      text: `*Raiding List 🧢*

*Beginner Robber*
 • Maks 100K
Cooldown 1 Jam
Minimal Level 10 📊

*Professional Robber*
 • Maks 200K
Cooldown 1 Jam
Minimal Level 50 📊

*High Class Robber*
 • Maks 400K
Cooldown 1 Jam
Minimal Level 100 📊

*Legendary Robber*
 • Maks 400K
 Cooldown 40 Menit
Minimal Level 200 📊

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
handler.help = ['merampok']
handler.tags = ['rpg']
handler.command = /^merampok$/i

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