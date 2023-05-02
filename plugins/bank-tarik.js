const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^tarik/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('*Kamu Belum Mempunyai ATM*\n\n*_Dapatkan ATM Di #craft_*')
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `*WITHDRAW MONEY 🏦*\n\n📡 Status: *Sukses*\n💱 Menarik: *${count} Money 💵*\n🏧 Total Bank: *${user.bank} Money 💵*\n📝 Notes: *Thanks For Coming*\n\n*${global.bottime}*`, m)
  } else conn.reply(m.chat, `*WITHDRAW MONEY 🏦*\n\n📡 Status: *Gagal*\n💱 Menarik: *${count} Money 💵*\n🏧 Total Bank: *${user.bank} Money 💵*\n📝 Notes: *Not Enough Money*\n\n*${global.bottime}*`, m)
}
handler.help = ['tarik <jumlah>']
handler.tags = ['rpg']
handler.command = /^tarik([0-9]+)|tarik|tarikall$/i
handler.register = true
export default handler