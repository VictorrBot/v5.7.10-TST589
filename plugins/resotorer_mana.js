const manaMax = 200; // jumlah maksimum mana player
const manaRegen = 10; // jumlah mana yang di-regen setiap 5 detik
const manaCooldown = 5; // waktu cooldown regen mana dalam detik
const manarRegen = 50; // jumlah mana yang di-regen oleh Manar

let handler = async (m, { usedPrefix }) => {
  let user = global.db.data.users[m.sender]

  let now = new Date().getTime()
  let manaCooldownEnd = user.lastmana + (manaCooldown * 1000)
  let timeLeft = (manaCooldownEnd - now) / 1000

  if (!user.manar || user.manar < 1) {
    return m.reply(`
*${user.name}*, Anda Tidak Memiliki Manar Untuk Mengembalikan Mana!
  `.trim())
  }

  if (user.mana >= manaMax) {
    return m.reply(`
*${user.name}* Sudah Memiliki Mana Maksimum!
  `.trim())
  }

  if (now < manaCooldownEnd) {
    return m.reply(`
Harap Tunggu *${timeLeft.toFixed(0)} detik* Untuk Mendapatkan Mana Kembali!
  `.trim())
  }

  user.mana = Math.min(user.mana + manarRegen, manaMax)
  user.lastmana = now
  user.manar -= 1

  let manaBar = getManaBar(user.mana, manaMax)

  m.reply(`
${manaBar}
*${user.name}* Telah Mendapatkan *${manarRegen} Mana ⚡* Dengan Menggunakan Manar!
  `.trim())
}

handler.help = ['manar']
handler.tags = ['rpg']
handler.command = /^(manar)$/i
handler.register = true
function getManaBar(mana, maxMana) {
  let manaBar = ''
  let manaPerHeart = maxMana / 10
  let hearts = Math.ceil(mana / manaPerHeart)
  for (let i = 1; i <= 10; i++) {
    if (i <= hearts) {
      manaBar += '❤️'
    } else {
      manaBar += '🖤'
    }
  }
  manaBar += `\n[${mana}/${maxMana}]`
  return manaBar
}

export default handler
