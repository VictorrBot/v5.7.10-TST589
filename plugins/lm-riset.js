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
*🏰 ACADEMY 🏰*
`

  let caption = `
*ECONOMY 🌾*
*Penghasilan SDA Per-Hari*
   Level $.{user.psda}/10
   
*Bonus Ledakan SDA*
   Level ${user.blsda}/10
   
*Bonus Rampasan SDA*
   Level ${user.brsda}/10
   
*Bonus Pencurian SDA*
   Level ${user.bpsda}/10
   
*Bonus F-Coin*
   Level ${user.bfc}/10
   
*DEFENSE 🛡️*
*Health Dinding Kastil*
   Level ${user.hdk}/10

*Durasi Perisai*
   Level ${user.dp}/10

*MILITARY ⚔️*
*Damage Pasukan*
   Level ${user.dp2}/10

*Pertahanan Pasukan*
   Level ${user.ps}/10 

*Mengurangi CD Pelatihan*
   Level ${user.mcp}/10

*Menambah Batas Pelatihan*
   Level ${user.mbp}/10
 
*LEADERSHIP 👑*
   
*❗Information*
• CSM Koin Untuk Membeli Skins Kastil
• CSM Koin Didapat Hanya Di Event
• Akan Ada Skin Baru Disetiap Event
• Hanya 1 Skin Yang Dapat Digunakan
• Mengganti Skin Dapat Mereset Level Kastil
`
const sections = [
   {
	title: "𝗕𝗨𝗬 𝗔 𝗖𝗔𝗦𝗧𝗟𝗘",
	rows: [
	    {title: "🏰 Original Castle", rowId: ".riset oc", description: "🏷️1 CSM"},
	    {title: "🏰 Zephyra Castle", rowId: ".riset zc", description: "🏷️3 CSM"},
	    {title: "🏰 Nuvoleon Castle", rowId: ".riset nc", description: "🏷️2 CSM"},
	    {title: "🏰 Voresham Castle", rowId: ".riset vc", description: "🏷️2 CSM"},
	    {title: "🏰 Prysona Castle", rowId: ".riset pc", description: "🏷️3 CSM"},
	    {title: "🏰 Alterniamon Castle", rowId: ".riset ac", description: "🏷️2 CSM"},
	]
}, {
	title: "𝗕𝗨𝗬 𝗔 𝗖𝗔𝗦𝗧𝗟𝗘",
	rows: [
	    {title: "🏰 Original Castle", rowId: ".riset oc", description: "🏷️1 CSM"},
	    {title: "🏰 Zephyra Castle", rowId: ".riset zc", description: "🏷️3 CSM"},
	    {title: "🏰 Nuvoleon Castle", rowId: ".riset nc", description: "🏷️2 CSM"},
	    {title: "🏰 Voresham Castle", rowId: ".riset vc", description: "🏷️2 CSM"},
	    {title: "🏰 Prysona Castle", rowId: ".riset pc", description: "🏷️3 CSM"},
	    {title: "🏰 Alterniamon Castle", rowId: ".riset ac", description: "🏷️2 CSM"},
	]}]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",
  sections
}

  try {
    if (/riset|riset/i.test(command)) {
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

handler.help = ['riset']
handler.tags = ['lm']
handler.command = /^(riset)/i
handler.register = true
export default handler