let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${nomorown2.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *DEV & OWN* ${htka}

*Dev Christina*
@${nomorown.split`@`[0]}


`

//------------ BIO
let ppown2 = await conn.profilePictureUrl(nomorown2 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `${htki} *BIODATA OWN* ${htka}
*💬 Nama:* Avri
*✉️ Nama RL:* Dika F.A
*⚧ Gender:* Male
*📿 Agama:* Islam
*📆 Ultah:* 13 Mei
*🗒️ Umur:* 15
*🏫 Kelas:* Private
*❤️ Hobby:* Game + YT
*☁️ Sifat:* Pendiam
*🗺️ Tinggal:* Sukoharjo
*♀️ Waifu:* Miku Nakano

*📷 Instagram:* -
*▶️ You Tube:* -
*🎵 Tik Tok:* -
*🐈 Github:* -
•·––––––––––––––––––––––––––·•
`
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA DEV* ${htka}
*💬 Nama:* Kei
*✉️ Nama RL:* Keizha
*⚧ Gender:* Female
*📿 Agama:* Islam
*📆 Ultah:* 12 September
*🗒️ Umur:* 17
*🏫 Kelas:* XI
*❤️ Hobby:* -
*☁️ Sifat:* Introvert
*🗺️ Tinggal:* Kaltim
*♂️ Husbu:* Kyouma

*📷 Instagram:* -
*▶️ You Tube:* -
*🎵 Tik Tok:* -
*🐈 Github:* -
•·––––––––––––––––––––––––––·•
`
  let teks = '*_Silahkan Pilih Opsi Dibawah_*'
const sections = [
   {
	title: `OWNER –––––––––·•`,
	rows: [
	{title: "𝗡𝗼𝗺𝗼𝗿 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿", rowId: ".owner2"},
	{title: "𝗕𝗶𝗼𝗱𝗮𝘁𝗮 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿", rowId: ".owner bio"},
	]
  }
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *DEV & OWN* ${htka}`,
  buttonText: "𝗦𝗘𝗟𝗘𝗖𝗧 𝗛𝗘𝗥𝗘",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio,  wm, ppown, [
                ['𝗦𝗘𝗪𝗔 𝗕𝗢𝗧', `${usedPrefix}sewa`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m)
            break
            case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio2,  wm, ppown2, [
                ['𝗦𝗘𝗪𝗔 𝗕𝗢𝗧', `${usedPrefix}sewa`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ 𝗠𝗘𝗡𝗨`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator','pengembang']
handler.tags = ['main']
handler.command = /^(owner|creator|pengembang)/i
handler.register = true
export default handler
