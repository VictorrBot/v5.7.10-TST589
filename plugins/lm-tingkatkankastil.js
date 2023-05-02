let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  let buf1 = user.oc
  let buf2 = user.zc
  let buf3 = user.nc
  let buf4 = user.vc
  let buf5 = user.pc
  let buf6 = user.ac
  let buff1 = (buf1 == 0 ? '5' : '' || buf1 == 1 ? '10' : '' || buf1 == 2 ? '15' : '' || buf1 == 3 ? '20' : '' || buf1 == 4 ? '25' : '' || buf1 == 5 ? '30' : '' || buf1 == 6 ? '35' : '' || buf1 == 7 ? '40' : '' || buf1 == 8 ? '45' : '' || buf1 == 9 ? '50' : '' || buf1 == 10 ? '100' : '')
  let buff2 = (buf2 == 0 ? '5' : '' || buf2 == 1 ? '10' : '' || buf2 == 2 ? '15' : '' || buf2 == 3 ? '20' : '' || buf2 == 4 ? '25' : '' || buf2 == 5 ? '30' : '' || buf2 == 6 ? '35' : '' || buf2 == 7 ? '40' : '' || buf2 == 8 ? '45' : '' || buf2 == 9 ? '50' : '' || buf2 == 10 ? '100' : '')
  let buff3 = (buf3 == 0 ? '5' : '' || buf3 == 1 ? '10' : '' || buf3 == 2 ? '15' : '' || buf3 == 3 ? '20' : '' || buf3 == 4 ? '25' : '' || buf3 == 5 ? '30' : '' || buf3 == 6 ? '35' : '' || buf3 == 7 ? '40' : '' || buf3 == 8 ? '45' : '' || buf3 == 9 ? '50' : '' || buf3 == 10 ? '100' : '')
  let buff4 = (buf4 == 0 ? '5' : '' || buf4 == 1 ? '10' : '' || buf4 == 2 ? '15' : '' || buf4 == 3 ? '20' : '' || buf4 == 4 ? '25' : '' || buf4 == 5 ? '30' : '' || buf4 == 6 ? '35' : '' || buf4 == 7 ? '40' : '' || buf4 == 8 ? '45' : '' || buf4 == 9 ? '50' : '' || buf4 == 10 ? '100' : '')
  let buff5 = (buf5 == 0 ? '5' : '' || buf5 == 1 ? '10' : '' || buf5 == 2 ? '15' : '' || buf5 == 3 ? '20' : '' || buf5 == 4 ? '25' : '' || buf5 == 5 ? '30' : '' || buf5 == 6 ? '35' : '' || buf5 == 7 ? '40' : '' || buf5 == 8 ? '45' : '' || buf5 == 9 ? '50' : '' || buf5 == 10 ? '100' : '')
  let buff6 = (buf6 == 0 ? '5' : '' || buf6 == 1 ? '10' : '' || buf6 == 2 ? '15' : '' || buf6 == 3 ? '20' : '' || buf6 == 4 ? '25' : '' || buf6 == 5 ? '30' : '' || buf6 == 6 ? '35' : '' || buf6 == 7 ? '40' : '' || buf6 == 8 ? '45' : '' || buf6 == 9 ? '50' : '' || buf6 == 10 ? '100' : '')
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

let lgocraft = `
*🏰 CASTLE UPGRADES 🏰*
`

  let caption = `
SDA Untuk Upgrade Kastil
- 350K Padi 🌾/Level 
- 450K Kayu 🪨/Level 
- 350K Batu 🪵/Level 
- 390K Bijih 🫘/Level 
- 290K Emas 🎗️/Level 

Manfaat Peningkatan Kastil
- Menambah Batas Pasukan
- Membuat Skill Lebih Efektif
- Menambah Jumlah Pasukan
  Yang Bisa Dikirim

*❗Information*
• Menambang Untuk Mendapatkan SDA
• SDA Dapat Dibeli Dan Ditransfer
• Meningkatkan Skin Juga Meningkatkan
  Skill Dari Kastil Tersebut
`
const sections = [
   {
	title: "𝗨𝗣𝗚𝗥𝗔𝗗𝗘 𝗧𝗛𝗘 𝗖𝗔𝗦𝗧𝗟𝗘",
	rows: [
	    {title: "🏰 Original Castle", rowId: ".upgrade-castleskin oc", description: "Tingkatkan Kastil Original"},
	    {title: "🏰 Zephyra Castle", rowId: ".upgrade-castleskin zc", description: "Tingkatkan Kastil Zephyra"},
	    {title: "🏰 Nuvoleon Castle", rowId: ".upgrade-castleskin nc", description: "Tingkatkan Kastil Nuvoleon"},
	    {title: "🏰 Voresham Castle", rowId: ".upgrade-castleskin vc", description: "Tingkatkan Kastil Voresham"},
	    {title: "🏰 Prysona Castle", rowId: ".upgrade-castleskin pc", description: "Tingkatkan Kastil Prysona"},
	    {title: "🏰 Alterniamon Castle", rowId: ".upgrade-castleskin ac", description: "Tingkatkan Kastil Alterniamon"},
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
    if (/upgrade-castleskin|Upgrade-castleskin/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'oc':
          if (user.oc > 9) return m.reply('*_Level Kastil Kamu Sudah Max_*')
            if(user.padi < 350000 * buf1 || user.kayu < 450000 * buf1 || user.batu < 350000 * buf1 || user.bijih < 390000 * buf1 || user.emas < 290000 * buf1) return m.reply(`*Kamu Membutuhkan SDA*\n• Padi ${350000 * buf1} 🌾\n• Kayu ${450000 * buf1} 🪵\n• Batu ${350000 * buf1} 🪨\n• Bijih ${390000 * buf1} 🫘\n• Emas ${290000 * buf1} 🎗️`)
            if(user.oc < 1) return m.reply(`*Kamu Tidak Memiliki Skin Ini, Dapatkan Skin Ini Di #buy-castleskin*`)
            global.db.data.users[m.sender].might += 1736 + (buff1 * 1294)
            global.db.data.users[m.sender].oc += 1
            global.db.data.users[m.sender].chealth += 500
            global.db.data.users[m.sender].padi -= 350000 * buf1
            global.db.data.users[m.sender].kayu -= 450000 * buf1
            global.db.data.users[m.sender].batu -= 350000 * buf1
            global.db.data.users[m.sender].bijih -= 390000 * buf1
            global.db.data.users[m.sender].emas -= 290000 * buf1
            m.reply("*_Sukses Meningkatkan 🏰 Original Castle_*")
            break
          case 'zc':
          if (user.zc > 9) return m.reply('*_Level Kastil Kamu Sudah Max_*')
            if(user.padi < 350000 * buf2 || user.kayu < 450000 * buf2 || user.batu < 350000 * buf2 || user.bijih < 390000 * buf2 || user.emas < 290000 * buf2) return m.reply(`*Kamu Membutuhkan SDA*\n• Padi ${350000 * buf2} 🌾\n• Kayu ${450000 * buf2} 🪵\n• Batu ${350000 * buf2} 🪨\n• Bijih ${390000 * buf2} 🫘\n• Emas ${290000 * buf2} 🎗️`)
            if(user.zc < 1) return m.reply(`*Kamu Tidak Memiliki Skin Ini, Dapatkan Skin Ini Di #buy-castleskin*`)
            global.db.data.users[m.sender].might += 3815 + (buff2 * 3277)
            global.db.data.users[m.sender].zc += 1
            global.db.data.users[m.sender].chealth += 500
            global.db.data.users[m.sender].padi -= 350000 * buf2
            global.db.data.users[m.sender].kayu -= 450000 * buf2
            global.db.data.users[m.sender].batu -= 350000 * buf2
            global.db.data.users[m.sender].bijih -= 390000 * buf2
            global.db.data.users[m.sender].emas -= 290000 * buf2
            m.reply("*_Sukses Meningkatkan 🏰 Zephyra Castle_*")
            break
          case 'nc':
          if (user.nc > 9) return m.reply('*_Level Kastil Kamu Sudah Max_*')
            if(user.padi < 350000 * buf3 || user.kayu < 450000 * buf3 || user.batu < 350000 * buf3 || user.bijih < 390000 * buf3 || user.emas < 290000 * buf3) return m.reply(`*Kamu Membutuhkan SDA*\n• Padi ${350000 * buf3} 🌾\n• Kayu ${450000 * buf3} 🪵\n• Batu ${350000 * buf3} 🪨\n• Bijih ${390000 * buf3} 🫘\n• Emas ${290000 * buf3} 🎗️`)
            if(user.nc < 1) return m.reply(`*Kamu Tidak Memiliki Skin Ini, Dapatkan Skin Ini Di #buy-castleskin*`)
            global.db.data.users[m.sender].might += 2917 + (buff3 * 2233)
            global.db.data.users[m.sender].nc += 1
            global.db.data.users[m.sender].chealth += 500
            global.db.data.users[m.sender].padi -= 350000 * buf3
            global.db.data.users[m.sender].kayu -= 450000 * buf3
            global.db.data.users[m.sender].batu -= 350000 * buf3
            global.db.data.users[m.sender].bijih -= 390000 * buf3
            global.db.data.users[m.sender].emas -= 290000 * buf3
            m.reply("*_Sukses Meningkatkan 🏰 Nuvoleon Castle_*")
            break
          case 'vc':
          if (user.vc > 9) return m.reply('*_Level Kastil Kamu Sudah Max_*')
            if(user.padi < 350000 * buf4 || user.kayu < 450000 * buf4 || user.batu < 350000 * buf4 || user.bijih < 390000 * buf4 || user.emas < 290000 * buf4) return m.reply(`*Kamu Membutuhkan SDA*\n• Padi ${350000 * buf4} 🌾\n• Kayu ${450000 * buf4} 🪵\n• Batu ${350000 * buf4} 🪨\n• Bijih ${390000 * buf4} 🫘\n• Emas ${290000 * buf4} 🎗️`)
            if(user.vc < 1) return m.reply(`*Kamu Tidak Memiliki Skin Ini, Dapatkan Skin Ini Di #buy-castleskin*`)
            global.db.data.users[m.sender].might += 2876 + (buff4 * 2355)
            global.db.data.users[m.sender].vc += 1
            global.db.data.users[m.sender].chealth += 500
            global.db.data.users[m.sender].padi -= 350000 * buf4
            global.db.data.users[m.sender].kayu -= 450000 * buf4
            global.db.data.users[m.sender].batu -= 350000 * buf4
            global.db.data.users[m.sender].bijih -= 390000 * buf4
            global.db.data.users[m.sender].emas -= 290000 * buf4
            m.reply("*_Sukses Meningkatkan 🏰 Nuvoleon Castle_*")
            break
          case 'pc':
          if (user.pc > 9) return m.reply('*_Level Kastil Kamu Sudah Max_*')
            if(user.padi < 350000 * buf5 || user.kayu < 450000 * buf5 || user.batu < 350000 * buf5 || user.bijih < 390000 * buf5 || user.emas < 290000 * buf5) return m.reply(`*Kamu Membutuhkan SDA*\n• Padi ${350000 * buf5} 🌾\n• Kayu ${450000 * buf5} 🪵\n• Batu ${350000 * buf5} 🪨\n• Bijih ${390000 * buf5} 🫘\n• Emas ${290000 * buf5} 🎗️`)
            if(user.pc < 1) return m.reply(`*Kamu Tidak Memiliki Skin Ini, Dapatkan Skin Ini Di #buy-castleskin*`)
            global.db.data.users[m.sender].might += 3345 + (buff4 * 3647)
            global.db.data.users[m.sender].pc += 1
            global.db.data.users[m.sender].chealth += 500
            global.db.data.users[m.sender].padi -= 350000 * buf5
            global.db.data.users[m.sender].kayu -= 450000 * buf5
            global.db.data.users[m.sender].batu -= 350000 * buf5
            global.db.data.users[m.sender].bijih -= 390000 * buf5
            global.db.data.users[m.sender].emas -= 290000 * buf5
            m.reply("*_Sukses Meningkatkan 🏰 Prysona Castle_*")
            break
            case 'ac':
          if (user.ac > 9) return m.reply('*_Level Kastil Kamu Sudah Max_*')
            if(user.padi < 350000 * buf6 || user.kayu < 450000 * buf6 || user.batu < 350000 * buf6 || user.bijih < 390000 * buf6 || user.emas < 290000 * buf6) return m.reply(`*Kamu Membutuhkan SDA*\n• Padi ${350000 * buf6} 🌾\n• Kayu ${450000 * buf6} 🪵\n• Batu ${350000 * buf6} 🪨\n• Bijih ${390000 * buf6} 🫘\n• Emas ${290000 * buf6} 🎗️`)
            if(user.ac < 1) return m.reply(`*Kamu Tidak Memiliki Skin Ini, Dapatkan Skin Ini Di #buy-castleskin*`)
            global.db.data.users[m.sender].might += 2944 + (buff4 * 2234)
            global.db.data.users[m.sender].ac += 1
            global.db.data.users[m.sender].chealth += 700
            global.db.data.users[m.sender].padi -= 350000 * buf6
            global.db.data.users[m.sender].kayu -= 450000 * buf6
            global.db.data.users[m.sender].batu -= 350000 * buf6
            global.db.data.users[m.sender].bijih -= 390000 * buf6
            global.db.data.users[m.sender].emas -= 290000 * buf6
            m.reply("*_Sukses Meningkatkan 🏰 Alterniamon Castle_*")
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

handler.help = ['upgrade-castleskin']
handler.tags = ['lm']
handler.command = /^(upgrade-castleskin)/i
handler.register = true
export default handler