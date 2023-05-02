let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`*MAKER PFUN2🎨*

*_Contoh: ${usedPrefix + command} choror|helo|banh_*
 
*LIST EFEK:*
neon
lifebuoy
arrow-signs
snow_writing
cinema-ticket
birthday-cake
movie_marquee`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://violetics.pw/api/photofunia/${thm}?apikey=beta&text=${text1}&text2=${text2}`
        let caption = `*${command}*
*🔍 Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.command = /^(pfunia2|pfun2)$/i
handler.tags = ['maker']
handler.help = ['pfun2','pfunia2']
handler.register = true
handler.limit = 1
export default handler