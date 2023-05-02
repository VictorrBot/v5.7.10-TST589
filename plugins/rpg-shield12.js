const rewards = {
  exp: 0,
}
const cooldown = 43200000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastperisai < cooldown) throw `*Masa Aktif Perisaimu ${((user.lastperisai + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*Kamu Memasang Perisai Selama 12 Jam Dari Sekarang*`
  }
  conn.sendButton(m.chat,'*SHIELD INSTALLATION*', text.trim(), null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'], ['𝗪𝗘𝗘𝗞𝗟𝗬', '.weekly']],m)
  user.lastperisai = new Date * 1
}
handler.help = ['perisai12']
handler.tags = ['rpg']
handler.command = /^(perisai12)$/i
handler.register = true
handler.limit = 71
handler.cooldown = cooldown

export default handler