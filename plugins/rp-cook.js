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

let lgocook = `
「 C O O K 」
`

  let caption = `
Ayam Bakar 🍗
- 2 Ayam
- 4 Coal

Ayam Goreng 🍗
- 2 Ayam
- 4 Coal

Steak 🥩
- 2 Sapi
- 6 Coal

Ikan Bakar 🐟
- 3 Ikan
- 4 Coal

Udang Bakar  🍤
- 10 Udang
- 20 Coal

Babi Panggang 🥓
- 2 Babi
- 5 Coal

Jus Mangga 🍸
- 2 Mangga
- 2 Drink
- 1 Susu

Pisang Goreng 🍌
- 5 Pisang
- 1 Minyak
- 3 Coal

Mie Ayam 🍝
- 2 Mie
- 2 Telur
- 3 Bawang Merah
- 2 Bawang Putih
- 1 Ayam
- 2 Minyak
- 2 Air
- 1 Saos Tiram
- 1 Kecap
- 1 Merica
- 4 Daun Bawang
- 1 Garam
- 3 Coal
`
const sections = [
   {
	title: "𝗖𝗢𝗢𝗞𝗜𝗡𝗚 𝗙𝗢𝗢𝗗",
	rows: [
	    {title: "Ayam Bakar 🍗", rowId: ".cook ayamb", description: "+ 40 Stamina ⚡"},
	    {title: "Ayam Goreng 🍗", rowId: ".cook ayamg", description: "+ 50 Stamina ⚡"},
	    {title: "Steak 🥩", rowId: ".cook steak", description: "+ 70 Stamina ⚡"},
	    {title: "Ikan Bakar 🐟", rowId: ".cook ikan", description: "+ 44 Stamina ⚡"},
	    {title: "Udang Bakar 🍤", rowId: ".cook udang", description: "+ 60 Stamina ⚡"},
	    {title: "Babi Panggang 🥓", rowId: ".cook babi", description: "+ 58 Stamina ⚡"},
	    {title: "Jus Mangga 🍸", rowId: ".cook jusmangga", description: "+ 60 Stamina ⚡"},
	    {title: "Pisang Goreng 🍌", rowId: ".cook pisanggoreng", description: "+ 60 Stamina ⚡"},
	    {title: "Mie Ayam 🍝", rowId: ".cook mieayam", description: "+ 110 Stamina ⚡"},

	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocook,
  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",
  sections
}

  try {
    if (/cook|Cook/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'ayamb':
          if (user.ayambakar > 100) return m.reply('Kulkas Kamu Penuh')
            if(user.ayam < 2 || user.coal < 4) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n2 Ayam 🐔\n4 Coal ⚫*`)
            global.db.data.users[m.sender].ayam -= 2
            global.db.data.users[m.sender].coal -= 4
            global.db.data.users[m.sender].ayambakar += 1
            m.reply("Sukses Memanggang 1 Ayam Bakar 🍗")
            break
          case 'ayamg':
          if (user.ayamgoreng > 100) return m.reply('Kulkas Kamu Penuh')
            if(user.ayam < 2 || user.coal < 4) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n2 Ayam 🐔\n4 Coal ⚫*`)
            global.db.data.users[m.sender].ayam -= 2
            global.db.data.users[m.sender].coal -= 4
            global.db.data.users[m.sender].ayamgoreng += 1
            m.reply("Sukses Menggoreng 1 Ayam Goreng 🍗")
            break
          case 'steak':
          if (user.steak > 100) return m.reply('Kulkas Kamu Penuh')
            if(user.sapi < 2 || user.coal < 6) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n2 Sapi 🐄\n6 Coal ⚫*`)
            global.db.data.users[m.sender].sapi -= 2
            global.db.data.users[m.sender].coal -= 6
            global.db.data.users[m.sender].steak += 1
            m.reply("Sukses Memanggang 1 Steak 🥩")
            break
         case 'ikan':
          if (user.ikanbakar > 100) return m.reply('Kulkas Kamu Penuh')
            if(user.ikan < 3 || user.coal < 4) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n3 Ikan 🐟\n4 Coal ⚫*`)
            global.db.data.users[m.sender].ikan -= 3
            global.db.data.users[m.sender].coal -= 4
            global.db.data.users[m.sender].ikanbakar += 1
            m.reply("Sukses Memanggang 1 Ikan Bakar 🐟")
            break
         case 'udang':
          if (user.udangbakar > 100) return m.reply('Kulkas Kamu Penuh')
            if(user.udang < 10 || user.coal < 20) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n10 Udang 🦐\n20 Coal ⚫*`)
            global.db.data.users[m.sender].udang -= 10
            global.db.data.users[m.sender].coal -= 20
            global.db.data.users[m.sender].udangbakar += 1
            m.reply("Sukses Memanggang 1 Udang Bakar 🍤")
            break
         case 'babi':
          if (user.babipanggang > 100) return m.reply('Kulkas Kamu Penuh')
            if(user.babi < 2 || user.coal < 5) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n2 Babi 🐖\n5 Coal ⚫*`)
            global.db.data.users[m.sender].babi -= 2
            global.db.data.users[m.sender].coal -= 5
            global.db.data.users[m.sender].babipanggang += 1
            m.reply("Sukses Memanggang 1 Babi Panggang 🥓")
            break
          case 'jusmangga':
          if (user.jusmangga > 100) return m.reply('Kulkas Kamu Penuh')
            if(user.mangga < 2  || user.drink < 2 || user.susu < 1) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n2 Mangga 🍐\n2 Drink 🍹\n1 Susu 🥛*`)
            global.db.data.users[m.sender].mangga -= 2
            global.db.data.users[m.sender].drink -= 2
            global.db.data.users[m.sender].susu -= 1
            global.db.data.users[m.sender].jusmangga += 1
            m.reply("Sukses Membuat 1 Jus Mangga 🍸")
            break
         case 'pisanggoreng':
          if (user.pisanggoreng > 100) return m.reply('Kulkas Kamu Penuh')
            if(user.minyak < 1 || user.coal < 3 || user.pisang < 5) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n5 Pisang 🍌\n3 Coal ⚫\n1 Minyak 🛢️*`)
            global.db.data.users[m.sender].minyak -= 1
            global.db.data.users[m.sender].coal -= 3
            global.db.data.users[m.sender].pisang -= 5
            global.db.data.users[m.sender].pisanggoreng += 1
            m.reply("Sukses Menggoreng 1 Pisang Goreng 🍌")
            break
        case 'mieayam':
          if (user.mieayam > 100) return m.reply('Kulkas Kamu Penuh')
            if(user.mie < 2 || user.telur < 2 || user.bawangputih < 2 || user.bawangmerah < 3|| user.ayam < 1|| user.minyak < 2 || user.air < 2 || user.saostiram < 1 || user.kecap < 1 || user.merica < 1|| user.daunbawang < 4|| user.garam < 1 || user.coal < 3) return m.reply(`Bahan Tidak Cukup`)
            global.db.data.users[m.sender].mie -= 2
            global.db.data.users[m.sender].telur -= 2
            global.db.data.users[m.sender].bawangputih -= 2
            global.db.data.users[m.sender].bawangmerah -= 3
            global.db.data.users[m.sender].ayam -= 1
            global.db.data.users[m.sender].minyak -= 2
            global.db.data.users[m.sender].air -= 2
            global.db.data.users[m.sender].saostiram -= 1
            global.db.data.users[m.sender].merica -= 1
            global.db.data.users[m.sender].garam -= 1
            global.db.data.users[m.sender].coal -= 3
            global.db.data.users[m.sender].daunbawang -= 4
            global.db.data.users[m.sender].kecap -= 1
            global.db.data.users[m.sender].mieayam += 6
            m.reply("Sukses Membuat 6 Mie Ayam 🍝")
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

handler.help = ['cook']
handler.tags = ['rpg']
handler.command = /^(cook|cooking)/i
handler.register = true
export default handler