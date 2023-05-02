let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  let buf1 = user.skillsport
  let buff1 = (buf1 == 0 ? '1' : '' || buf1 == 1 ? '2' : '' || buf1 == 2 ? '3' : '' || buf1 == 3 ? '4' : '' || buf1 == 4 ? '5' : '' || buf1 == 5 ? '6' : '' || buf1 == 6 ? '7' : '' || buf1 == 7 ? '8' : '' || buf1 == 8 ? '9' : '' || buf1 == 9 ? '10' : '' || buf1 == 10 ? '11' : '')
  let buf2 = user.skilladventure
  let buff2 = (buf2 == 0 ? '1' : '' || buf2 == 1 ? '2' : '' || buf2 == 2 ? '3' : '' || buf2 == 3 ? '4' : '' || buf2 == 4 ? '5' : '' || buf2 == 5 ? '6' : '' || buf2 == 6 ? '7' : '' || buf2 == 7 ? '8' : '' || buf2 == 8 ? '9' : '' || buf2 == 9 ? '10' : '' || buf2 == 10 ? '11' : '')
  let buf3 = user.skillgardening
  let buff3 = (buf3 == 0 ? '1' : '' || buf3 == 1 ? '2' : '' || buf3 == 2 ? '3' : '' || buf3 == 3 ? '4' : '' || buf3 == 4 ? '5' : '' || buf3 == 5 ? '6' : '' || buf3 == 6 ? '7' : '' || buf3 == 7 ? '8' : '' || buf3 == 8 ? '9' : '' || buf3 == 9 ? '10' : '' || buf3 == 10 ? '11' : '')
  let buf4 = user.skillfishing
  let buff4 = (buf4 == 0 ? '1' : '' || buf4 == 1 ? '2' : '' || buf4 == 2 ? '3' : '' || buf4 == 3 ? '4' : '' || buf4 == 4 ? '5' : '' || buf4 == 5 ? '6' : '' || buf4 == 6 ? '7' : '' || buf4 == 7 ? '8' : '' || buf4 == 8 ? '9' : '' || buf4 == 9 ? '10' : '' || buf4 == 10 ? '11' : '')
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

let lgocraft = `
*📚 LIBRARY 📚*
`

  let caption = `
*"Perpustakaan adalah jendela dunia, tempat di mana pikiran dapat berkembang dan kebijaksanaan dapat diperoleh." - Clarence Brown*

*Intelligence Sub-Sports Ability*
*Level ${user.skillsport}/10*
  *- Dibutuhkan ${30 * buff1} Gems 💠*
  
*Intelligence Sub-Adventure Ability*
*Level ${user.skilladventure}/4*
  *- Dibutuhkan ${250000 * buff2} Money 💵*
  
*Intelligence Sub-Gardening Ability*
*Level ${user.skillgardening}/3*
  *- Dibutuhkan ${200000 * buff3} Money 💵*

*Intelligence Sub-Fishing Ability*
*Level ${user.skillfishing}/4*
  *- Dibutuhkan ${230000 * buff4} Money 💵*

`
const sections = [
   {
	title: "LIBRARY",
	rows: [
	    {title: "Sports Ability 🎽", rowId: ".library sa", description: "Membuka Banyak Pilihan Olahraga"},
	    {title: "Adventure Ability 🏔️", rowId: ".library aa", description: "Membuka Banyak Pilihan Adventure"},
	    {title: "Gardening Ability 🍒", rowId: ".library ga", description: "Membuka Banyak Pilihan Berkebun"},
	    {title: "Fishing Ability 🎣", rowId: ".library fa", description: "Membuka Banyak Pilihan Memancing"},
	]
}
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",
  sections
}

  try {
    if (/library|library/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'sa':
          if (user.skillsport > 9) return m.reply('*_Ability Ini Sudah Maksimal_*')
            if(user.gems < 30 * buff1) return m.reply(`*Kamu Membutuhkan ${30 * buff1} Gems 💠*`)
            global.db.data.users[m.sender].gems -= 30 * buff1
            global.db.data.users[m.sender].skillsport += 1
            m.reply("*_Sukses Meningkatkan Sport Ability 🎽_*")
            break
           case 'aa':
          if (user.skilladventure > 2) return m.reply('*_Ability Ini Sudah Maksimal_*')
            if(user.money < 250000 * buff2) return m.reply(`*Kamu Membutuhkan ${250000 * buff2} Money 💵*`)
            global.db.data.users[m.sender].money -= 250000 * buff2
            global.db.data.users[m.sender].skilladventure += 1
            m.reply("*_Sukses Meningkatkan Adventure Ability 🏔️_*")
            break
         case 'ga':
          if (user.skillgardening > 2) return m.reply('*_Ability Ini Sudah Maksimal_*')
            if(user.money < 200000 * buff3) return m.reply(`*Kamu Membutuhkan ${200000 * buff3} Money 💵*`)
            global.db.data.users[m.sender].money -= 200000 * buff3
            global.db.data.users[m.sender].skillgardening += 1
            m.reply("*_Sukses Meningkatkan Gardening Ability 🍒_*")
            break
         case 'fa':
          if (user.skillfishing > 3) return m.reply('*_Ability Ini Sudah Maksimal_*')
            if(user.money < 230000 * buff4) return m.reply(`*Kamu Membutuhkan ${230000 * buff4} Money 💵*`)
            global.db.data.users[m.sender].money -= 230000 * buff4
            global.db.data.users[m.sender].skillfishing += 1
            m.reply("*_Sukses Meningkatkan Fishing Ability 🎣_*")
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

handler.help = ['library']
handler.tags = ['rpg']
handler.command = /^(library)/i
handler.register = true
export default handler