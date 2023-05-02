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

let lgopajak = `
*「 TAXATION  」*
`

  let caption = `
*Place of Tax Payment 💲*

`
const sections = [
   {
	title: "𝗣𝗔𝗬𝗠𝗘𝗡𝗧 𝗢𝗙 𝗧𝗔𝗫𝗘𝗦",
	rows: [
	    {title: "Bayar Pajak Ruko 🏘️", rowId: ".pajak ruko", description: "Amount Confidential"},

	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgopajak,
  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",
  sections
}

  try {
    if (/pajak|Eat/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'ruko':
          if (user.pajak < 100) return m.reply('*_Belum Bisa Membayar Pajak_*')
            if(user.money < 25000) return m.reply(`*_Uang Kurang Untuk Membayar Pajak_*`)
            global.db.data.users[m.sender].pajak -= 85
            global.db.data.users[m.sender].money -= 25000
            m.reply("*_Sukses Membayar Pajak, Itu Yang Kendaraannya Pajaknya Mafi Dibayar Ya Kontol!_*")
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

handler.help = ['pajak']
handler.tags = ['rpg']
handler.command = /^(pajak)/i
handler.register = true
export default handler