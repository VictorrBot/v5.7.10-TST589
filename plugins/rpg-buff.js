let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  let buf1 = user.boosta
  let buf2 = user.boostb
  let buf3 = user.boosts
  let buf4 = user.boostk
  let buff1 = (buf1 == 0 ? '5' : '' || buf1 == 1 ? '10' : '' || buf1 == 2 ? '15' : '' || buf1 == 3 ? '20' : '' || buf1 == 4 ? '25' : '' || buf1 == 5 ? '30' : '' || buf1 == 6 ? '35' : '' || buf1 == 7 ? '40' : '' || buf1 == 8 ? '45' : '' || buf1 == 9 ? '50' : '' || buf1 == 10 ? '100' : '')
  let buff2 = (buf2 == 0 ? '5' : '' || buf2 == 1 ? '10' : '' || buf2 == 2 ? '15' : '' || buf2 == 3 ? '20' : '' || buf2 == 4 ? '25' : '' || buf2 == 5 ? '30' : '' || buf2 == 6 ? '35' : '' || buf2 == 7 ? '40' : '' || buf2 == 8 ? '45' : '' || buf2 == 9 ? '50' : '' || buf2 == 10 ? '100' : '')
  let buff3 = (buf3 == 0 ? '5' : '' || buf3 == 1 ? '10' : '' || buf3 == 2 ? '15' : '' || buf3 == 3 ? '20' : '' || buf3 == 4 ? '25' : '' || buf3 == 5 ? '30' : '' || buf3 == 6 ? '35' : '' || buf3 == 7 ? '40' : '' || buf3 == 8 ? '45' : '' || buf3 == 9 ? '50' : '' || buf3 == 10 ? '100' : '')
  let buff4 = (buf4 == 0 ? '5' : '' || buf4 == 1 ? '10' : '' || buf4 == 2 ? '15' : '' || buf4 == 3 ? '20' : '' || buf4 == 4 ? '25' : '' || buf4 == 5 ? '30' : '' || buf4 == 6 ? '35' : '' || buf4 == 7 ? '40' : '' || buf4 == 8 ? '45' : '' || buf4 == 9 ? '50' : '' || buf4 == 10 ? '100' : '')
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

let lgocraft = `
*🏰 BOOSTER SHOP 🏰*
`

  let caption = `
Your Booster Level 📊
• Adventure: *${user.boosta}*
• Begal: *${user.boostb}*
• Shop: *${user.boosts}*  
  
Booster List:
Adventure
 + 100% All Item Per-Level
    Maks 5 Level

Begal
 + 100% Limit Per-Level
    Maks 5 Level

Shop
 - 2% Harga Item Per-Level
    Maks 5 Level

Korupsi
 + 300K Uang Korupsi Per-Level
    Maks 5 Level

*❗Information*
• Dapatkan Gems Di #TopUp & Fitur RPG
`
const sections = [
   {
	title: "𝗨𝗣𝗚𝗥𝗔𝗗𝗘 𝗧𝗛𝗘 𝗕𝗢𝗢𝗦𝗧𝗘𝗥",
	rows: [
	    {title: "⚡ Upgrade Adventure", rowId: ".boost adventure", description: "Pendorong Adventure"},
	    {title: "⚡ Upgrade Begal", rowId: ".boost begal", description: "Pendorong Begal"},
	    {title: "⚡ Upgrade Shop", rowId: ".boost shop", description: "Pendorong Shop"},
	    {title: "⚡ Upgrade Korupsi", rowId: ".boost korupsi", description: "Pendorong Korupsi"},
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
    if (/boost|Boost/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'adventure':
          if (user.boosta > 4) return m.reply('*_Level Boost Kamu Sudah Max_*')
            if(user.gems < 89 * buff1 || user.money < 59999 * buff1) return m.reply(`*Kamu Membutuhkan*\n• Gems ${89 * buff1} 💠\n• Money ${59999 * buff1} 💵`)
            global.db.data.users[m.sender].boosta += 1
            global.db.data.users[m.sender].gems -= 89 * buff1
            global.db.data.users[m.sender].money -= 59999 * buff1
            m.reply("*_Sukses Meningkatkan Booster Adventure ⚡_*")
            break
          case 'begal':
          if (user.boostb > 4) return m.reply('*_Level Boost Kamu Sudah Max_*')
            if(user.gems < 59 * buff2 || user.money < 39999 * buff2) return m.reply(`*Kamu Membutuhkan*\n• Gems ${59 * buff2} 💠\n• Money ${39999 * buff2} 💵`)
            global.db.data.users[m.sender].boostb += 1
            global.db.data.users[m.sender].gems -= 59 * buff2
            global.db.data.users[m.sender].money -= 39999 * buff2
            m.reply("*_Sukses Meningkatkan Booster Begal ⚡_*")
            break
          case 'shop':
          if (user.boosts> 4) return m.reply('*_Level Boost Kamu Sudah Max_*')
            if(user.gems < 59 * buff3 || user.money < 39999 * buff3) return m.reply(`*Kamu Membutuhkan*\n• Gems ${59 * buff3} 💠\n• Money ${39999 * buff3} 💵`)
            global.db.data.users[m.sender].boosts += 1
            global.db.data.users[m.sender].gems -= 59 * buff3
            global.db.data.users[m.sender].money -= 39999 * buff3
            m.reply("*_Sukses Meningkatkan Booster Shop ⚡_*")
            break
          case 'korupsi':
          if (user.boostk> 4) return m.reply('*_Level Boost Kamu Sudah Max_*')
            if(user.gems < 69 * buff4 || user.money < 49999 * buff4) return m.reply(`*Kamu Membutuhkan*\n• Gems ${69 * buff4} 💠\n• Money ${49999 * buff4} 💵`)
            global.db.data.users[m.sender].boostk += 1
            global.db.data.users[m.sender].gems -= 69 * buff4
            global.db.data.users[m.sender].money -= 49999 * buff4
            m.reply("*_Sukses Meningkatkan Booster Korupsi ⚡_*")
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

handler.help = ['boost']
handler.tags = ['rpg']
handler.command = /^(boost)/i
handler.register = true
export default handler