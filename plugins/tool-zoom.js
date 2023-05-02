/*
Made by https://github.com/balhisyhrl
*/
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Fitur Untuk Membuat Room Zoom*\n\n*_Contoh: ${usedPrefix + command} Password_*`
  let textfilter = text.toLowerCase()
  let res = await fetch(global.API('https://anonyzoom.herokuapp.com', '/index.php', {
    pass: textfilter
  }))
  //if (!res.ok) throw await m.reply('error')
  let json = await res.json()
  if (json.Join_URL == '') {
      throw 'API ERROR'
  } else {
    let zoomA = `
*ZOOM MEETING GENERATOR*\n
*ᴢᴏᴏᴍ ʟɪɴᴋ:* ${json.Join_URL}
*ᴘᴀssᴡᴏʀᴅ:* ${json.Password}
*sᴛᴀʀᴛ ᴛɪᴍᴇ:* ${json.Start_Time}
*ᴅᴜʀᴀᴛɪᴏɴ (ᴍɪɴᴜᴛᴇs):* ${json.Duration}`
    await conn.reply(m.chat, zoomA, m)
    //conn.reply(m.chat, hashh, null)
  }
}

handler.help = ['zoom <pass>']
handler.tags = ['tools']
handler.command = /^(zoom|zoomgen)$/i
handler.register = true
handler.limit = 1
export default handler
