let handler = async m => m.reply(`
*RAMADHAN 2023 ☪️*

Welcoming the Holy Day of Ramadan.

*📆 Lasts 50 Days*
March 4 - April 23

*Event list:*
*#event1*
  _Special Shop 🏬_
*#event2*
  _Improved RPG Features ⏫_
*#event3*
  _Special Card 💫_
*#event4*
  _Event Leaderboard 📋_
*#event5*
  _Shop Discounts 📋_  


`.trim()) // Tambah sendiri kalo mau


handler.help = ['eventlist']
handler.tags = ['main','rpg']
handler.command = /^eventlist$/i
handler.register = true
handler.premium = false
export default handler