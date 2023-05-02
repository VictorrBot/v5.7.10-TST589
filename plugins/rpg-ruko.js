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

let lgojualan = `
*「 SALE 」*
`

  let caption = `
*Mie Ayam / Chicken Noodle 🍝*
+ IDR 20000 💵


*Makanan Didapat Di #cook*
`
const sections = [
   {
	title: "𝗦𝗘𝗟𝗟𝗜𝗡𝗚 𝗙𝗢𝗢𝗗",
	rows: [
	    {title: " 🍝 Jual Mie Ayam | Amount 10", rowId: ".jualan mieayam", description: "+ IDR 20000 💵"},

	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgojualan,
  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",
  sections
}

  try {
    if (/jualan|Eat/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'mieayam':
          if (user.pajak > 100) return m.reply('*_Tidak Bisa Menjual Karena Kamu Belum Membayar Pajak, Bayar Pajak Di #pajak_*')
            if(user.mieayam < 10) return m.reply(`*_Mie Ayam Kurang Dari 10 Porsi_*`)
            global.db.data.users[m.sender].mieayam -= 10
            global.db.data.users[m.sender].money += 120000
            global.db.data.users[m.sender].pajak += 10
            m.reply("*_Sukses Menjual 10 Mie Ayam_*\n*_Penghasilan IDR 120000 💵_*")
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

handler.help = ['jualan']
handler.tags = ['rpg']
handler.command = /^(jualan)/i
handler.register = true
export default handler