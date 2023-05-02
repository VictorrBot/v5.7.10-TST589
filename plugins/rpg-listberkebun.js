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
                     "title": `Beginner Gardening`, 
                     "rowId": `${usedPrefix}kebun1` 
                   }, { 
                     "title": "Expert Gardening",  
                     "rowId": `${usedPrefix}kebun2` 
                   }, { 
                     "title": `Professional Gardening`, 
                     "rowId": `${usedPrefix}kebun3` 
                   }, { 
                     "title": `The King of Gardening`, 
                     "rowId": `${usedPrefix}kebun4` 
 }, { 
                     "title": `Gardening`, 
                     "rowId": `${usedPrefix}infoberkebun` 
                   }] 
                  }
               ]
         const listMessage = {
      text: `*List of Gardening Options 🍒*

*Setiap Tingkatan Memiliki Untung Berbeda*

*Beginner Gardening*
  • Modal 100 > Penghasilan 100
*Expert Gardening*
  • Modal 90 > Penghasilan 110
*Professional Gardening*
  • Modal 70 > Penghasilan 130
*The King of Gardening*
  • Modal 50 > Penghasilan 150
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
handler.help = ['berkebun']
handler.tags = ['rpg']
handler.command = /^berkebun$/i

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