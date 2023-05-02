let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

let lgocraft = `
*🏰 CASTLE SKINS SHOP 🏰*
`

  let caption = `
*Castle List:*
*Original Castle - 🏷️1 CSM*
- Tanpa Skill

*Zephyra Castle - 🏷️3 CSM*
+ 1%/Level Kecepatan buy-castleskin
- 1%/Level Subsidi buy-castleskin

*Nuvoleon Castle - 🏷️2 CSM*
+ 1%/Level Waktu CD Monthly
- 1%/Level Hadiah Monthly

*Voresham Castle - 🏷️2 CSM*
+ 1%/Level Kecepatan Pelatihan
- 1%/Level Subsidi Pelatihan

*Prysona Castle - 🏷️3 CSM*
+ 1%/Level Pengumpulan FCoin
- 1%/Level Pendapatan Fcoin

*Alterniamon Castle - 🏷️2 CSM*
+ 500 Castle Health

*❗Information*
• CSM Koin Untuk Membeli Skins Kastil
• CSM Koin Didapat Hanya Di Event
• Akan Ada Skin Baru Disetiap Event
• Hanya Satu Skin Yang Dapat Digunakan
• Mengganti Skin Dapat Mereset Level Kastil
`
const sections = [
   {
	title: "𝗕𝗨𝗬 𝗔 𝗖𝗔𝗦𝗧𝗟𝗘",
	rows: [
	    {title: "🏰 Original Castle", rowId: ".buy-castleskin oc", description: "🏷️1 CSM"},
	    {title: "🏰 Zephyra Castle", rowId: ".buy-castleskin zc", description: "🏷️3 CSM"},
	    {title: "🏰 Nuvoleon Castle", rowId: ".buy-castleskin nc", description: "🏷️2 CSM"},
	    {title: "🏰 Voresham Castle", rowId: ".buy-castleskin vc", description: "🏷️2 CSM"},
	    {title: "🏰 Prysona Castle", rowId: ".buy-castleskin pc", description: "🏷️3 CSM"},
	    {title: "🏰 Alterniamon Castle", rowId: ".buy-castleskin ac", description: "🏷️2 CSM"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",
  sections
}

  try {
    if (/buy-castleskin|buy-castleskin/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'oc':
          if (user.skinkastil > 0) return m.reply('*_Kamu Sudah Memilik Skin, Silahkan #delete-castleskin Untuk Bisa Menggunakan Skin Lain_*')
            if(user.csm < 1) return m.reply(`*Kamu Tidak Memiliki CSM, Dapatkan CSM Di Event Yang Berlangsung*`)
            global.db.data.users[m.sender].csm -= 1
            global.db.data.users[m.sender].oc += 1
            global.db.data.users[m.sender].might += 1000
            global.db.data.users[m.sender].skinkastil += 1
            user.chealth = 1000
            m.reply("*_Sukses Membeli 🏰 Original Castle_*")
            break
          case 'zc':
          if (user.skinkastil > 0) return m.reply('*_Kamu Sudah Memilik Skin, Silahkan #delete-castleskin Untuk Bisa Menggunakan Skin Lain_*')
            if(user.csm < 3) return m.reply(`*Kamu Tidak Memiliki CSM, Dapatkan CSM Di Event Yang Berlangsung*`)
            global.db.data.users[m.sender].csm -= 3
            global.db.data.users[m.sender].zc += 1
            global.db.data.users[m.sender].might += 3000
            global.db.data.users[m.sender].skinkastil += 1
            user.chealth = 1000
            m.reply("*_Sukses Membeli 🏰 Zephyra Castle_*")
            break
          case 'nc':
          if (user.skinkastil > 0) return m.reply('*_Kamu Sudah Memilik Skin, Silahkan #delete-castleskin Untuk Bisa Menggunakan Skin Lain_*')
            if(user.csm < 2) return m.reply(`*Kamu Tidak Memiliki CSM, Dapatkan CSM Di Event Yang Berlangsung*`)
            global.db.data.users[m.sender].csm -= 2
            global.db.data.users[m.sender].nc += 1
            global.db.data.users[m.sender].might += 2000
            global.db.data.users[m.sender].skinkastil += 1
            user.chealth = 1000
            m.reply("*_Sukses Membeli 🏰 Nuvoleon Castle_*")
            break
          case 'vc':
          if (user.skinkastil > 0) return m.reply('*_Kamu Sudah Memilik Skin, Silahkan #delete-castleskin Untuk Bisa Menggunakan Skin Lain_*')
            if(user.csm < 2) return m.reply(`*Kamu Tidak Memiliki CSM, Dapatkan CSM Di Event Yang Berlangsung*`)
            global.db.data.users[m.sender].csm -= 2
            global.db.data.users[m.sender].vc += 1
            global.db.data.users[m.sender].might += 2000
            global.db.data.users[m.sender].skinkastil += 1
            user.chealth = 1000
            m.reply("*_Sukses Membeli 🏰 Voresham Castle_*")
            break
          case 'pc':
          if (user.skinkastil > 0) return m.reply('*_Kamu Sudah Memilik Skin, Silahkan #delete-castleskin Untuk Bisa Menggunakan Skin Lain_*')
            if(user.csm < 3) return m.reply(`*Kamu Tidak Memiliki CSM, Dapatkan CSM Di Event Yang Berlangsung*`)
            global.db.data.users[m.sender].csm -= 3
            global.db.data.users[m.sender].pc += 1
            global.db.data.users[m.sender].might += 3000
            global.db.data.users[m.sender].skinkastil += 1
            user.chealth = 1000
            m.reply("*_Sukses Membeli 🏰 Prysona Castle_*")
            break
            case 'ac':
          if (user.skinkastil > 0) return m.reply('*_Kamu Sudah Memilik Skin, Silahkan #delete-castleskin Untuk Bisa Menggunakan Skin Lain_*')
            if(user.csm < 2) return m.reply(`*Kamu Tidak Memiliki CSM, Dapatkan CSM Di Event Yang Berlangsung*`)
            global.db.data.users[m.sender].csm -= 2
            global.db.data.users[m.sender].ac += 1
            global.db.data.users[m.sender].might += 2000
            global.db.data.users[m.sender].skinkastil += 1
            user.chealth = 1500
            m.reply("*_Sukses Membeli 🏰 Alterniamon Castle_*")
            break

          default:
            return await conn.sendMessage(m.chat, listMessage)
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

handler.help = ['buy-castleskin']
handler.tags = ['lm']
handler.command = /^(buy-castleskin)/i
handler.register = true
export default handler