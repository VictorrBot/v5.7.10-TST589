const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^nabung/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('*Kamu Belum Mempunyai ATM*\n\n*_Dapatkan ATM Di #craft_*')
  if (user.bank > user.fullatm) return m.reply('*Mencapai Batas Maksimal ATM*\n\n*_Tingkatkan ATM Agar Batas Lebih Besar_*')
  if (count > user.fullatm - user.bank) return m.reply('*Mencapai Batas Maksimal Dibank*')
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `*SAVING MONEY 🏦*\n\n📡 Status: *Sukses*\n💱 Menabung: *${count} Money 💵*\n🏧 Total Bank: *${user.bank} Money 💵*\n📝 Notes: *Thanks For Coming*\n\n*${global.bottime}*`, m)
  } else conn.reply(m.chat, `*SAVING MONEY 🏦*\n\n📡 Status: *Gagal*\n💱 Menabung: *${count} Money 💵*\n🏧 Total Bank: *${user.bank} Money 💵*\n📝 Notes: *Not Enough Money*\n\n*${global.bottime}*`, m)
}
handler.help = ['nabung <jumlah>']
handler.tags = ['rpg']
handler.command = /^nabung([0-9]+)|nabung|nabungall$/i
handler.register = true
handler.limit = 1
export default handler