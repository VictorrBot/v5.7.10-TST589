let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`*MAKER PFUN 🎨*

*_Contoh: ${usedPrefix + command} noir helo_*

*LIST EFEK:*
balloon
beach-sign
blood_writing
bracelet
cemetery-gates
chalk_writing
christmas-writing
cookies_writing
denim-emdroidery
einstein
foggy_window_writing
fortune-cookie
frosty-window-writing
haunted-hotel
heart_tattoo
light-graffiti
lipstick-writing
love-lock
nightmare-writing
noir
pendant
plane-banner
sand_writing
snow-sign
soup_letters
street-sign
typewriter
water-writing
wooden_sign
yacht`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
        let images = `https://violetics.pw/api/photofunia/${thm}?apikey=beta&text=${text1}`
        let caption = `*${command}*
*🔍 Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.command = /^(pfunia|pfun)$/i
handler.tags = ['maker']
handler.help = ['pfunia']
handler.limit = true
handler.register = true
export default handler