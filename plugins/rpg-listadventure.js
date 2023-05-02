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
                     "title": `Adventure To The East`, 
                     "rowId": `${usedPrefix}adventure1` 
                   }, { 
                     "title": "Adventure To The West",  
                     "rowId": `${usedPrefix}adventure2` 
                   }, { 
                     "title": `Adventure to the South`, 
                     "rowId": `${usedPrefix}adventure3` 
                   }, { 
                     "title": `Adventure North`, 
                     "rowId": `${usedPrefix}adventure4` 
                    }, { 
                     "title": `Natural Resources`, 
                     "rowId": `${usedPrefix}infoadventure` 
                   }] 
                  }
               ]
         const listMessage = {
      text: `*List of Adventure Destinations 🏔️*


Setiap Tempat Memiliki SDA Berbeda.

*Towards the East / Timur*
• Coal
• Wood
• Fruit
• Sea Animal
• Experience
• Money

*To the west / Barat*
• Iron
• Fruit 
• Forest
• Drink
• Experience
• Money

*To the South / Selatan*
• Fruit
• Wood
• Sea Animal
• Coal
• Experience
• Money

*Towards the North / Utara*
• Wood 
• Fruit
• Sea Animal
• Coal
• Drink
• Experience
• Money

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
handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^adventure$/i

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