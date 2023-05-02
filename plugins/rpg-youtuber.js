let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let buf = user.atm
  let buff = (buf == 0 ? '1' : '' || buf == 1 ? '2' : '' || buf == 2 ? '3' : '' || buf == 3 ? '4' : '' || buf == 4 ? '5' : '' || buf == 5 ? '7' : '' || buf == 6 ? '9' : '' || buf == 7 ? '12' : '' || buf == 8 ? '14' : '' || buf == 9 ? '16' : '' || buf == 10 ? '18' : '' || buf == 11 ? '20' : '' || buf == 12 ? '23' : '' || buf == 13 ? '26' : '' || buf == 14 ? '30' : '' || buf == 15 ? '35' : '' || buf == 16 ? '40' : '' || buf == 17 ? '46' : '' || buf == 18 ? '52' : '' || buf == 19 ? '58' : '' || buf == 20 ? '70' : '') 
  let botol = global.botwm

let lgocraft = `
*「 YOUTUBERS TYPE 」*
`

  let caption = `
*VLOGGER*
_YouTubers yang membuat konten yang berpusat pada kehidupan sehari-hari, termasuk cerita pribadi, pengalaman, dan aktivitas sehari-hari._

*GAMER*
_YouTubers yang membuat konten yang berfokus pada permainan video, termasuk review, walkthrough, dan gameplay._

*BEAUTY GURU*
_YouTubers yang membuat konten seputar kecantikan, termasuk tutorial makeup, ulasan produk kecantikan, dan perawatan kulit._

*COOKING/BAKING*
_YouTubers yang membuat konten tentang memasak dan baking, termasuk tutorial, resep, dan review peralatan memasak._

*FITNESS*
_YouTubers yang membuat konten tentang kesehatan dan kebugaran, termasuk rutinitas latihan, diet, dan tips kesehatan._

*TRAVELER*
_YouTubers yang membuat konten tentang perjalanan, termasuk video tentang destinasi wisata, pengalaman perjalanan, dan petualangan._

*EDUKASI*
_YouTubers yang membuat konten tentang pendidikan, termasuk tutorial, pengetahuan, dan kurikulum pendidikan._

*KOMEDI*
_YouTubers yang membuat konten tentang komedi, termasuk video parodi, sketsa, dan prank._

*MUSIK*
_YouTubers yang membuat konten tentang musik, termasuk video klip, live perform, dan tutorial musik._

*REVIEWER*
_YouTubers yang membuat konten tentang ulasan produk, termasuk review gadget, fashion, makanan, dan lainnya._
`
const sections = [
   {
	title: "𝗖𝗛𝗢𝗢𝗦𝗘 𝗔 𝗧𝗬𝗣𝗘 𝗢𝗙 𝗬𝗢𝗨𝗧𝗨𝗕𝗘𝗥𝗦",
	rows: [
	    {title: "Vlogger 🎥", rowId: ".select-tipeytb vlog", description: "Has a Vlogger Type"},
	    {title: "Gamer 🎮", rowId: ".select-tipeytb game", description: "Has a Gamer Type"},
	    {title: "Beauty Guru 💄", rowId: ".select-tipeytb beauty", description: "Has a Beauty Type"},
	    {title: "Cooking/Baking 🍴", rowId: ".select-tipeytb cook", description: "Has a Cook Type"},
	    {title: "Fitness 💉", rowId: ".select-tipeytb fit", description: "Has a Fitness Type"},
	    {title: "Traveler 🗻", rowId: ".select-tipeytb travel", description: "Has a Traveler Type"},
	    {title: "Edukasi 🎓", rowId: ".select-tipeytb edukasi", description: "Has a Education Type"},
	    {title: "Komedi 🎪", rowId: ".select-tipeytb komedi", description: "Has a Comedy Type"},
	    {title: "Musik 🎼", rowId: ".select-tipeytb musik", description: "Has a Music Type"},
	    {title: "Reviewer 📷", rowId: ".select-tipeytb review", description: "Has a Reviewer Type"},
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
    if (/select-tipeytb|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'vlog':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 1
            m.reply("*_Sukses Memilih Tipe Ini_*")
            break
          case 'game':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 2
            m.reply("*_Sukses Memilih Tipe Ini_*")
            break
          case 'beauty':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 3
            m.reply("*_Sukses Memilih Tipe Ini_*")
            break
          case 'cook':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 4
            m.reply("*_Sukses Memilih Tipe Ini_*")
            break
          case 'fit':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 5
            m.reply("*_Sukses Memilih Tipe Ini_*")
            break
          case 'travel':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 6
            m.reply("*_Sukses Memilih Tipe Ini_*")
            break
          case 'edukasi':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 7
            m.reply("*_Sukses Memilih Tipe Ini_*")
            break
          case 'komedi':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 8
            m.reply("*_Sukses Memilih Tipe Ini_*")
            break
          case 'musik':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 9
            m.reply("*_Sukses Memilih Tipe Ini_*")
            break
          case 'review':
          if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*')
            global.db.data.users[m.sender].tipeyt += 10
            m.reply("*_Sukses Memilih Tipe Ini_*")
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

handler.help = ['select-tipeytb']
handler.tags = ['rpg']
handler.command = /^(select-tipeytb)/i
handler.register = true
export default handler