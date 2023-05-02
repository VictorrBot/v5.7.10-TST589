let handler = async (m, { conn }) => {
  let guild = Object.values(global.db.data.guild)

  if (guild.length === 0) {
    return m.reply(`Tidak ada guild yang terdaftar saat ini.`)
  }

  let message = `Daftar semua guild:\n\n`

  for (let guild of guild) {
    let leaderName = global.db.data.users[guild.leader]?.name || 'Tidak diketahui'
    let membersCount = guild.members.length
    let guildName = guild.name || 'Tanpa Nama'

    message += `Nama: ${guildName}\nLeader: ${leaderName}\nAnggota: ${membersCount}\n\n`
  }

  await conn.sendMessage(m.chat, message, MessageType.text)
}

handler.help = ['daftarguild']
handler.tags = ['guild']
handler.command = /^(daftarguild)$/i
handler.register = true
handler.group = true

export default handler
