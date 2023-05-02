const xpperlimit = 2
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^tomoney1/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `*CONVERSION 🔁*\n\n*${count} Exp To ${count} Money*\n\n*• Rate 10,00/10*`, m)
  } else conn.reply(m.chat, `*Exp Anda Kurang Dari ${count}*`, m)
}
handler.help = ['tomoney1 <jumlah>']
handler.tags = ['xp']
handler.command = /^tomoney1([0-9]+)|tomoney1|tomoney1all$/i
handler.register = true
handler.level = 1500
handler.limit = 150
export default handler