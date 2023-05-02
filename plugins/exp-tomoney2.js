const xpperlimit = 2
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^tomoney2/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].money += count / 2
    conn.reply(m.chat, `*CONVERSION 🔁*\n\n*${count} Exp To ${count / 2} Money*\n\n*• Rate 5,00/10*`, m)
  } else conn.reply(m.chat, `*Exp Anda Kurang Dari ${count}*`, m)
}
handler.help = ['tomoney2 <jumlah>']
handler.tags = ['xp']
handler.command = /^tomoney2([0-9]+)|tomoney2|tomoney2all$/i
handler.register = true
handler.level = 1000
handler.limit = 100
export default handler