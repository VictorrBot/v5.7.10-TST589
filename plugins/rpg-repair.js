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
*「 R E P A I R 」*`

  let caption = `
*MATERIALS*
*Pickaxe ⛏️*
*_- 20 Kayu_*
*_- 12 Batu_*
*_- 12 Iron_*
*_- 4 Diamond_*

*Ax 🛶*
*_- 20 Kayu_*
*_- 12 Batu_*
*_- 12 Iron_*
*_- 4 Diamond_*

*Sword ⚔️*
*_- 20 Kayu_*
*_- 36 Iron_*
*_- 4 Diamond_*

*Armor 🥼*
*_- 60 Iron_*
*_- 12 Diamond_*
`
const sections = [
   {
	title: "𝗥𝗘𝗣𝗔𝗜𝗥 𝗔 𝗧𝗢𝗢𝗟",
	rows: [
	    {title: "Sword ⚔️", rowId: ".repair sword", description: "Repair Sword"},
	    {title: "Pickaxe ⛏️", rowId: ".repair pickaxe", description: "Repair Pickaxe"},
	    {title: "Ax 🛶", rowId: ".repair ax", description: "Repair Ax"},
	    {title: "Armor 🥼", rowId: ".repair armor", description: "Repair Armor"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "𝗥𝗘𝗣𝗔𝗜𝗥",
  sections
}

  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return m.reply('*_Item Ini Belum Memiliki Kerusakan_*')
          if (user.pickaxe == 0) return m.reply('*_Kamu Belum Memilik Item Ini_*')
            if(user.diamond < 4 || user.rock < 12 || user.wood < 20 || user.iron < 12 ) return m.reply(`*_Barang Tidak Cukup_*`)
             user.rock -= 12
             user.wood -= 20
             user.iron -= 12
             user.diamond -= 4
             user.pickaxedurability = 100
            m.reply("*_Sukses Memperbaiki_*")
            break
          case 'ax':
          if (user.axdurability > 99) return m.reply('*_Item Ini Belum Memiliki Kerusakan_*')
          if (user.ax == 0) return m.reply('*_Kamu Belum Memilik Item Ini_*')
            if(user.diamond < 4 || user.rock < 12 || user.wood < 20 || user.iron < 12 ) return m.reply(`*_Barang Tidak Cukup_*`)
             user.rock -= 12
             user.wood -= 20
             user.iron -= 12
             user.diamond -= 4
             user.axdurability = 100
            m.reply("*_Sukses Memperbaiki_*")
            break
          case 'sword':
          if (user.sworddurability > 99) return m.reply('*_Item Ini Belum Memiliki Kerusakan_*')
          if (user.sword == 0) return m.reply('*_Kamu Belum Memilik Item Ini_*')
            if(user.diamond < 4 || user.wood < 20 || user.iron < 36 ) return m.reply(`*_Barang Tidak Cukup_*`)
             user.wood -= 20
             user.iron -= 36
             user.diamond -= 4
             user.sworddurability = 100
            m.reply("*_Sukses Memperbaiki_*")
            break
            case 'armor':
          if (user.armordurability > 99) return m.reply('*_Item Ini Belum Memiliki Kerusakan_*')
          if (user.armor == 0) return m.reply('*_Kamu Belum Memilik Item Ini_*')
            if(user.diamond < 12 || user.iron < 60 ) return m.reply(`*_Barang Tidak Cukup_*`)
             user.iron -= 60
             user.diamond -= 12
             user.armordurability = 100
            m.reply("*_Sukses Memperbaiki_*")
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

handler.help = ['repair']
handler.tags = ['rpg']
handler.command = /^(repair)/i
handler.register = true
export default handler