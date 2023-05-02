const xpperlimit = 2
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^tomoney5/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].money += count / 5
    conn.reply(m.chat, `*CONVERSION 🔁*\n\n*${count} Exp To ${count / 5} Money*\n\n*• Rate 2,00/10*`, m)
  } else conn.reply(m.chat, `*Exp Anda Kurang Dari ${count}*`, m)
}
handler.help = ['tomoney5 <jumlah>']
handler.tags = ['xp']
handler.command = /^tomoney5([0-9]+)|tomoney5|tomoney5all$/i
handler.register = true
handler.level = 500
handler.limit = 50
export default handler