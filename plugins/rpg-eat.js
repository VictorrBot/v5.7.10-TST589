let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let buf = user.atm
  let buff = (buf == 0 ? '1' : '' || buf == 1 ? '1' : '' || buf == 2 ? '1' : '' || buf == 3 ? '1' : '' || buf == 4 ? '1' : '' || buf == 5 ? '1' : '' || buf == 6 ? '1' : '' || buf == 7 ? '1' : '' || buf == 8 ? '1' : '' || buf == 9 ? '1' : '' || buf == 10 ? '1' : '' || buf == 11 ? '1' : '') 
  let botol = global.botwm

let lgoeat = `
*「 E A T 」*
`

  let caption = `
*Ayam Bakar 🍗*
+ 40 Stamina ⚡

*Ayam Goreng 🍗*
+ 50 Stamina ⚡

*Steak 🥩*
+ 70 Stamina ⚡

*Ikan Bakar 🐟*
+ 44 Stamina ⚡

*Udang Bakar  🍤*
+ 60 Stamina ⚡

*Babi Panggang 🥓*
+ 58 Stamina ⚡

*Jus Mangga 🍸*
+ 60 Stamina ⚡

*Pisang Goreng 🍌*
+ 60 Stamina ⚡

*Mie Ayam 🍝*
+ 110 Stamina ⚡


*Makanan Bisa Dijual Di #jualan*
`
const sections = [
   {
	title: "𝗘𝗔𝗧𝗜𝗡𝗚 𝗙𝗢𝗢𝗗",
	rows: [
	    {title: "Ayam Bakar 🍗", rowId: ".eat ayamb", description: "+ 40 Stamina ⚡"},
	    {title: "Ayam Goreng 🍗", rowId: ".eat ayamg", description: "+ 50 Stamina ⚡"},
	    {title: "Steak 🥩", rowId: ".eat steak", description: "+ 70 Stamina ⚡"},
	    {title: "Ikan Bakar 🐟", rowId: ".eat ikan", description: "+ 44 Stamina ⚡"},
	    {title: "Udang Bakar 🍤", rowId: ".eat udang", description: "+ 60 Stamina ⚡"},
	    {title: "Babi Panggang 🥓", rowId: ".eat babi", description: "+ 58 Stamina ⚡"},
	    {title: "Jus Mangga 🍸", rowId: ".eat jusmangga", description: "+ 60 Stamina ⚡"},
	    {title: "Pisang Goreng 🍌", rowId: ".eat pisanggoreng", description: "+ 60 Stamina ⚡"},
	    {title: "Mie Ayam 🍝", rowId: ".eat mieayamm", description: "+ 110 Stamina ⚡"},

	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgoeat,
  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",
  sections
}

  try {
    if (/eat|Eat/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'ayamb':
          if (user.stamina > 500) return m.reply('*_Stamina Penuh_*')
            if(user.ayambakar < 1) return m.reply(`*Makanan Tidak Cukup*\n\n*_Cari Ayam Di #berburu & Masak Ayam Di #cook_*`)
            global.db.data.users[m.sender].ayambakar -= 1
            global.db.data.users[m.sender].stamina += 40
            m.reply("*_Sukses Memakan 1 Ayam Bakar 🍗_*\n*_Menambah 40 Stamina ⚡_*")
            break
          case 'ayamg':
          if (user.stamina > 500) return m.reply('*_Stamina Penuh_*')
            if(user.ayamgoreng < 1) return m.reply(`*Makanan Tidak Cukup*\n\n*_Cari Ayam Di #berburu & Masak Ayam Di #cook_*`)
            global.db.data.users[m.sender].ayamgoreng -= 1
            global.db.data.users[m.sender].stamina += 50
            m.reply("*_Sukses Memakan 1 Ayam Goreng 🍗_*\n*_Menambah 50 Stamina ⚡_*")
            break
          case 'steak':
          if (user.stamina > 500) return m.reply('*_Stamina Penuh_*')
            if(user.steak < 1) return m.reply(`*Makanan Tidak Cukup*\n\n*_Cari Sapi Di #berburu & Masak Sapi Di #cook_*`)
            global.db.data.users[m.sender].steak -= 1
            global.db.data.users[m.sender].stamina += 70
            m.reply("*_Sukses Memakan 1 Steak  🥩_*\n*_Menambah 70 Stamina ⚡_*")
            break
          case 'ikan':
          if (user.stamina > 500) return m.reply('*_Stamina Penuh_*')
            if(user.ikanbakar < 1) return m.reply(`*Makanan Tidak Cukup*\n\n*_Cari Ikan Di #memancing & Masak Ikan Di #cook_*`)
            global.db.data.users[m.sender].ikanbakar -= 1
            global.db.data.users[m.sender].stamina += 44
            m.reply("*_Sukses Memakan 1 Ikan Bakar 🐟_*\n*_Menambah 44 Stamina ⚡_*")
            break
          case 'udang':
          if (user.stamina > 500) return m.reply('*_Stamina Penuh_*')
            if(user.udangbakar < 1) return m.reply(`*Makanan Tidak Cukup*\n\n*_Cari Udang Di #memancing & Masak Ikan Di #cook_*`)
            global.db.data.users[m.sender].udangbakar -= 1
            global.db.data.users[m.sender].stamina += 60
            m.reply("*_Sukses Memakan 1 Udang Bakar 🍤_*\n*_Menambah 60 Stamina ⚡_*")
            break
          case 'babi':
          if (user.stamina > 500) return m.reply('*_Stamina Penuh_*')
            if(user.babipanggang < 1) return m.reply(`*Makanan Tidak Cukup*\n\n*_Cari Babi Di #berburu & Masak Babi Di #cook_*`)
            global.db.data.users[m.sender].babipanggang -= 1
            global.db.data.users[m.sender].stamina += 58
            m.reply("*_Sukses Memakan 1 Babi Panggang 🥓_*\n*_Menambah 58 Stamina ⚡_*")
            break
          case 'jusmangga':
          if (user.stamina > 500) return m.reply('*_Stamina Penuh_*')
            if(user.jusmangga < 1) return m.reply(`*Makanan Tidak Cukup*\n\n*_Cari Mangga Di #adventure / #berkebun & Buat Jus Di #cook_*`)
            global.db.data.users[m.sender].jusmangga -= 1
            global.db.data.users[m.sender].stamina += 60
            m.reply("*_Sukses Memakan 1 Jus Mangga 🍸_*\n*_Menambah 60 Stamina ⚡_*")
            break
         case 'pisanggoreng':
          if (user.stamina > 500) return m.reply('*_Stamina Penuh_*')
            if(user.pisanggoreng < 1) return m.reply(`*Makanan Tidak Cukup*\n\n*_Cari Pisang Di #adventure / #berkebun & Goreng Pisang Di #cook_*`)
            global.db.data.users[m.sender].pisanggoreng -= 1
            global.db.data.users[m.sender].stamina += 60
            m.reply("*_Sukses Memakan 1 Pisang Goreng 🍌_*\n*_Menambah 60 Stamina ⚡_*")
            break
          case 'mieayamm':
          if (user.stamina > 500) return m.reply('*_Stamina Penuh_*')
            if(user.mieayam < 5) return m.reply(`*Makanan Tidak Cukup*\n\n*_Cari Bahan Di #shop / #berburu & Buat Mie Ayam Di #cook_*`)
            global.db.data.users[m.sender].mieayam -= 5
            global.db.data.users[m.sender].stamina += 110
            m.reply("*_Sukses Memakan 1 Mangkok Mie Ayam 🍝_*\n*_Menambah 110 Stamina ⚡_*")
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

handler.help = ['eat']
handler.tags = ['rpg']
handler.command = /^(eat|eating)/i
handler.register = true
export default handler