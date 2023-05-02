let handler = async m => m.reply(`
*DISCOUNT IN SHOP 🛒*

*Harga Item Ditoko / #shop Menurun Sesuai Indikator Dibawah*

💴 - 5%
💵 - 10%
💶 - 20%
💷 - 40%

List of Items:
💶 Limit 7777 > 6221
💷 OSR 90000 > 54000
💵 Legendary 12599 > 11399
💴 Manar 20000 > 19000
💵 Wood 3500 > 3150
💵 Rock 4000 > 3600
💵 String 2500 > 2250
💵 Iron 4000 > 3600
`.trim()) // Tambah sendiri kalo mau


handler.help = ['event4']
handler.tags = ['rpg']
handler.command = /^event5$/i
handler.register = true
handler.premium = false
export default handler