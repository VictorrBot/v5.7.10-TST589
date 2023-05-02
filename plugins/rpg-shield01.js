const rewards = {
  exp: 0,
}
const cooldown = 3600000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastperisai < cooldown) throw `*Masa Aktif Perisaimu ${((user.lastperisai + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*Kamu Memasang Perisai Selama 1 Jam Dari Sekarang*`
  }
  conn.sendButton(m.chat,'*SHIELD INSTALLATION*', text.trim(), null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'], ['𝗪𝗘𝗘𝗞𝗟𝗬', '.weekly']],m)
  user.lastperisai = new Date * 1
}
handler.help = ['perisai01']
handler.tags = ['rpg']
handler.command = /^(perisai01)$/i
handler.register = true
handler.limit = 8
handler.cooldown = cooldown

export default handler