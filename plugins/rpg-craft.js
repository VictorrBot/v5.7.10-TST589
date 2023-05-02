let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let buf = user.atm
  let buff = (buf < 10 ? '5' : '' || buf < 20 ? '10' : '')
  let botol = global.botwm

let lgocraft = `
*「 C R A F T I N G 」*
`

  let caption = `
*MATERIALS*
*Pickaxe ⛏️*
*_- 40 Kayu_*
*_- 20 Batu_*
*_- 20 Iron_*
*_- 80 String_*
Level Maks 11 📊

*Ax 🛶*
*_- 40 Kayu_*
*_- 20 Batu_*
*_- 20 Iron_*
*_- 80 String_*
Level Maks 11 📊

*Sword ⚔️*
*_- 40 Kayu_*
*_- 60 Iron_*
Level Maks 11 📊

*Fishingrod 🎣*
*_- 40 Kayu_*
*_- 8 Iron_*
*_- 80 String_*
Level Maks 4 📊

*Armor 🥼*
*_- 120 Iron_*
*_- 4 Emerald_*
*_- 20 Diamond_*
Level Maks 11 📊

*ATM 💳*
*_- ${5 * buff} Plastik PVC_*
*_- ${1 * buff} Semikonduktor_*
*_- ${40000 * buff} Money (Biaya Admin)_*
Level Maks 20 📊
`
const sections = [
   {
	title: "𝗖𝗥𝗔𝗙𝗧 𝗔 𝗧𝗢𝗢𝗟",
	rows: [
	    {title: "Sword ⚔️", rowId: ".craft swordd", description: "Crafting A Sword"},
	    {title: "Pickaxe ⛏️", rowId: ".craft pickaxee", description: "Crafting A Pickaxe"},
	    {title: "Ax 🛶", rowId: ".craft axx", description: "Crafting A Ax"},
	    {title: "Fishingrod 🎣", rowId: ".craft fishingrodd", description: "Crafting A Fishingrod"},
	    {title: "Armor 🥼", rowId: ".craft armorr", description: "Crafting A Armor"},
	    {title: "ATM 💳", rowId: ".craft atmm", description: "Crafting A Atm"},
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
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxee':
          if (user.pickaxe > 10) return m.reply('*_Kamu Sudah Memilik Ini_*')
            if(user.rock < 20 || user.wood < 40 || user.iron < 20 || user.string < 80) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_40 Kayu🪵_*\n*_20 Iron⛓_*\n*_80 String🕸️_*\n*_20 Batu🪨_*`)
            global.db.data.users[m.sender].wood -= 40
            global.db.data.users[m.sender].iron -= 20
            user.rock -= 20
            global.db.data.users[m.sender].string -= 80
            global.db.data.users[m.sender].pickaxe += 1
            user.pickaxedurability = 40
            m.reply("*_Sukses Membuat 1 Pickaxe 🔨_*")
            break
          case 'axx':
          if (user.ax > 10) return m.reply('*_Kamu Sudah Memilik Ini_*')
            if(user.rock < 20 || user.wood < 40 || user.iron < 20 || user.string < 80) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_40 Kayu🪵_*\n*_20 Iron⛓_*\n*_80 String🕸️_*\n*_20 Batu🪨_*`)
            global.db.data.users[m.sender].wood -= 40
            global.db.data.users[m.sender].iron -= 20
            user.rock -= 20
            global.db.data.users[m.sender].string -= 80
            global.db.data.users[m.sender].ax += 1
            user.axdurability = 40
            m.reply("*_Sukses Membuat 1 Ax 🔨_*")
            break
          case 'swordd':
          if (user.sword > 10) return m.reply('*_Kamu Sudah Memilik Ini_*')
            if(user.wood < 40 || user.iron < 60) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_40 Kayu🪵_*\n*_60 Iron⛓️_*`)
            global.db.data.users[m.sender].wood -= 40
            global.db.data.users[m.sender].iron -= 60
            global.db.data.users[m.sender].sword += 1
            user.sworddurability = 40
            m.reply("*_Sukses membuat 1 sword 🗡️_*")
            break
          case 'fishingrodd':
          if (user.fishingrod > 3) return m.reply('*_Kamu Sudah Memilik Ini_*')
            if(user.wood < 40 || user.iron < 8 || user.string < 80) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_40 Kayu🪵_*\n*_8 Iron⛓_*\n*_80 String🕸️_*`)
            global.db.data.users[m.sender].wood -= 40
            global.db.data.users[m.sender].iron -= 8
            global.db.data.users[m.sender].string -= 80
            global.db.data.users[m.sender].fishingrod += 1
            user.fishingroddurability = 40
            m.reply("*_Sukses Membuat 1 Pancingan 🎣_*")
            break
          case 'armorr':
          if (user.armor > 10) return m.reply('*_Kamu Sudah Memilik Ini_*')
            if(user.iron < 120 || user.emerald < 4 || user.diamond < 20) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_120 Iron ⛓️_*\n*_4 Emerald ❇️_*\n*_20 Diamond 💎_*`)
            global.db.data.users[m.sender].emerald -= 4
            global.db.data.users[m.sender].iron -= 120
            global.db.data.users[m.sender].diamond -= 20
            global.db.data.users[m.sender].armor += 1
            user.armordurability = 50
            m.reply("*_Sukses Membuat 1 Armor 🥼_*")
            break
            case 'atmm':
          if (user.atm > 19) return m.reply('*_Level Max_*')
            if(user.plastikpvc < 5 * buff || user.money < 40000 * buff || user.semikonduktor < 1 * buff) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_${40000 * buff} Money 💵 (Biaya Admin)_*\n*_${5 * buff} Plastik PVC ⬜_*\n*_${1 * buff} Semikonduktor 💽_*`)
            global.db.data.users[m.sender].plastikpvc -= 5 * buff
            global.db.data.users[m.sender].money -= 40000 * buff
            global.db.data.users[m.sender].pengeluaran += 40000 * buff
            global.db.data.users[m.sender].semikonduktor -= 1 * buff
            global.db.data.users[m.sender].atm += 1
            global.db.data.users[m.sender].fullatm += 5000000
            m.reply("*_Sukses Membuat 1 ATM 💳_*")
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

handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft|crafting|chant)/i
handler.register = true
export default handler