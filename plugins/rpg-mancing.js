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
                     "title": `Sungai Amazon, Brasil 🇧🇷`, 
                     "rowId": `${usedPrefix}mancing1`                   
                   }, { 
                     "title": `Danau Taupo, Selandia Baru 🇳🇿`, 
                     "rowId": `${usedPrefix}mancing2` 
                   }, { 
                     "title": `Pulau Christmas, Kiribati 🇰🇮`, 
                     "rowId": `${usedPrefix}mancing3` 
                    }, { 
                     "title": `Laut Karibia, Amerika Tengah 🇺🇲`, 
                     "rowId": `${usedPrefix}mancing4` 
                   }] 
                  }
               ]
         const listMessage = {
      text: `*List of Fishing Destinations 🎣*


Setiap Tempat Memiliki SDA Berbeda.

*Sungai Amazon, Brasil*
*Dibutuhkan Pancingan Level 1*
• Kepiting 🦀
• Ikan 🐟
• Udang 🦐
• Experience ✨

*Danau Taupo, Selandia Baru*
*Dibutuhkan Pancingan Level 2*
• Lumba 🐬
• Cumi 🦑
• Dory 🐠
• Experience ✨

*Pulau Christmas, Kiribati*
*Dibutuhkan Pancingan Level 3*
• Lobster 🦂
• Buntal 🐡
• Orca 🐳
• Experience ✨

*Laut Karibia, Amerika Tengah*
*Dibutuhkan Pancingan Level 4*
• Paus 🐋
• Gurita 🐙
• Hiu 🦈
• Experience ✨

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
handler.help = ['memancing']
handler.tags = ['rpg']
handler.command = /^pancing|pancingan|memancing|mancing$/i

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