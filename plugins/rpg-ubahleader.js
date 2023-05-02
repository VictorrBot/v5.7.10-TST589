const maxGuildMembers = 4

let handler = async (m, { args }) => {
  let user = global.db.data.users[m.sender]

  if (!user.guild) {
    return m.reply(`*Anda Belum Bergabung Ke Dalam Guild.*`)
  }

  let guild = user.guild

  if (guild.leader !== m.sender) {
    return m.reply(`*Anda Bukan Leader Dari Guild Ini.*`)
  }

  if (!args[0]) {
    return m.reply(`*Silakan Mention Anggota Yang Ingin Dijadikan Leader.*`)
  }

  let mention = m.mentionedJid[0]

  if (!mention) {
    return m.reply(`*Silakan Mention Anggota Yang Ingin Dijadikan Leader.*`)
  }

  let newLeader = global.db.data.users[mention]

  if (!newLeader) {
    return m.reply(`*Anggota Yang Ingin Dijadikan Leader Tidak Ditemukan.*`)
  }

  if (newLeader.guild !== guild) {
    return m.reply(`*Anggota Yang Ingin Dijadikan Leader Bukan Anggota Dari Guild Ini.*`)
  }

  guild.leader = mention

  m.reply(`*${newLeader.name} Telah Dijadikan Leader Dari Guild Ini.*`)
}

handler.help = ['changeleader @user', 'ubahleader @user']
handler.tags = ['rpg']
handler.command = /^(change|ubah)leader$/i
handler.limit = true
handler.register = true
handler.group = true

export default handler
