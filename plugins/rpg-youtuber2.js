import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let user = global.db.data.users[m.sender]
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
                     "title": `CHANNEL NAME 📺`, 
                     "rowId": `${usedPrefix}chname` 
                   }, { 
                     "title": "YOUTUBER TYPE 🎥",  
                     "rowId": `${usedPrefix}select-tipeytb` 
                   }, { 
                     "title": "EQUIPMENT 📽️",  
                     "rowId": `${usedPrefix}equipment` 
                  }, { 
                     "title": "STATISTICS 💻",  
                     "rowId": `${usedPrefix}stat` 
                  }, { 
                     "title": "UPLOAD OR LIVE ❗",  
                     "rowId": `${usedPrefix}konten` 
                   }] 
                  }
               ]
         const listMessage = {
      text: `*YOUTUBERS*

*Your Channel Statistics 📺*  
*Channel: ${user.chname}*
*Like: ${user.like}*
*Dislike: ${user.dislike}*
*Subscriber: ${user.subscriber}*
*Showtime: ${user.showtime}*
*Monet: ${user.monet}*
*Video: ${user.video}*

*CHANNEL NAME*
_Tetapkan Nama Channelmu_

*YOUTUBER TYPE*
_Sebagai Apa Kamu Menjadi Youtuber_

*EQUIPMENT*
_Tingkatkan Peralatan Untuk Meningkatkan Penghasilan_

*STATISTIK*
_Seberapa Bagus Performamu_

*UPLOAD OR LIVE*
_Ungah Atau Siaran Langsung_


About Games:
*Fitur Masih Belum Full Release, Jumlah Monet Mengikuti Real Life (Tabun). Subscribermu Mempengaruhi Penghasilan Dan Juga Equipment*
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
handler.help = ['youtuber']
handler.tags = ['rpg']
handler.command = /^youtuber|youtubers|ytb|ytbrs|ytbr$/i

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