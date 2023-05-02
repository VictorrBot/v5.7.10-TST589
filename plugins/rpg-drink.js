const staminaMax = 200; // jumlah maksimum stamina player
const staminaRegen = 10; // jumlah stamina yang di-regen setiap 5 detik
const staminaCooldown = 5; // waktu cooldown regen stamina dalam detik
const drinkRegen = 50; // jumlah stamina yang di-regen oleh Drink

let handler = async (m, { usedPrefix }) => {
  let user = global.db.data.users[m.sender]

  let now = new Date().getTime()
  let staminaCooldownEnd = user.lastmana + (staminaCooldown * 1000)
  let timeLeft = (staminaCooldownEnd - now) / 1000

  if (!user.drink || user.drink < 1) {
    return m.reply(`
*${user.name}*, Anda Tidak Memiliki Drink Untuk Mengembalikan Stamina!
  `.trim())
  }

  if (user.stamina >= staminaMax) {
    return m.reply(`
*${user.name}* Sudah Memiliki Stamina Maksimum!
  `.trim())
  }

  if (now < staminaCooldownEnd) {
    return m.reply(`
Harap Tunggu *${timeLeft.toFixed(0)} detik* Untuk Mendapatkan Stamina Kembali!
  `.trim())
  }

  user.stamina = Math.min(user.stamina + drinkRegen, staminaMax)
  user.lastmana = now
  user.drink -= 1

  let staminaBar = getStaminaBar(user.stamina, staminaMax)

  m.reply(`
${staminaBar}
*${user.name}* Telah Mendapatkan *${drinkRegen} Stamina ⚡* Dengan Menggunakan Drink!
  `.trim())
}

handler.help = ['drink']
handler.tags = ['rpg']
handler.command = /^(drink)$/i
handler.register = true
function getStaminaBar(stamina, maxStamina) {
  let staminaBar = ''
  let staminaPerHeart = maxStamina / 10
  let hearts = Math.ceil(stamina / staminaPerHeart)
  for (let i = 1; i <= 10; i++) {
    if (i <= hearts) {
      staminaBar += '❤️'
    } else {
      staminaBar += '🖤'
    }
  }
  staminaBar += `\n[${stamina}/${maxStamina}]`
  return staminaBar
}

export default handler
