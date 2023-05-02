const maxGuildMembers = 4

let handler = async (m, { args }) => {
  let user = global.db.data.users[m.sender]

  if (user.guild) {
    return m.reply(`*Anda Sudah Tergabung Di Dalam Guild*`)
  }

  if (!args[0]) {
    return m.reply(`*Silakan Masukkan Nama Guild Yang Ingin Dibuat. Contoh: !createguild NamaGuild*`)
  }

  let guildName = args.join(' ')

  if (guildName.length > 20) {
    return m.reply(`*Nama Guild Terlalu Panjang. Maksimal 20 Karakter*`)
  }

  let guild = {
    name: guildName,
    leader: m.sender,
    member: [m.sender]
  }

  user.guild = guild

  m.reply(`*Guild ${guildName} Berhasil Dibuat. Anda Sekarang Menjadi Leader. Jangan Lupa Ajak Teman-teman Anda Untuk Bergabung!*`)

  return true
}

handler.help = ['createguild <nama>', 'makeguild <nama>']
handler.tags = ['guild']
handler.command = /^(create|make)guild$/i
handler.limit = true
handler.register = true
handler.group = true

export default handler
