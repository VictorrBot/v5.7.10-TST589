const maxGuildMembers = 4
const guildNameChangeCost = 100000

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
    return m.reply(`*Silakan Masukkan Nama Guild Yang Baru.*`)
  }

  let newName = args.join(' ')

  if (newName.length > 20) {
    return m.reply(`*Nama Guild Terlalu Panjang. Maksimal 20 Karakter.*`)
  }

  if (user.money < guildNameChangeCost) {
    return m.reply(`*Anda Tidak Memiliki Cukup Uang Untuk Mengganti Nama Guild. Biaya Untuk Mengganti Nama Guild Adalah ${guildNameChangeCost} Money.*`)
  }

  user.money -= guildNameChangeCost
  guild.name = newName

  m.reply(`*Nama Guild Berhasil Diubah Menjadi ${newName}.*`)
}

handler.help = ['changeguildname <nama baru>', 'ubahnamaguild <nama baru>']
handler.tags = ['guild']
handler.command = /^(change|ubah)namaguild$/i
handler.limit = true
handler.register = true
handler.group = true

export default handler
