let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let user = global.db.data.users[m.sender] 
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedRole = users.map(toNumber('role')).sort(sort('role'))
  let usersLevel = sortedLevel.map(enumGetKey)
  let usersRole = sortedRole.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(50, Math.max(parseInt(args[0]), 50)) : Math.min(50, sortedLevel.length)
  let text = `
🏅 *Rank Leaderboard Top ${len}* 🏅
Kamu: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*

${sortedLevel.slice(0, len).map(({ jid, role }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${role}*`).join`\n`}


`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersLevel.slice(0, len), ...usersRole.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
}
handler.help = ['toprole [jumlah user]']
handler.tags = ['rpg']
handler.command = /^(toprank|toprole)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}