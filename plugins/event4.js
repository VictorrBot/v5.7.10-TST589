let handler = async m => m.reply(`
*EVENT LEADERBOARD 📋*

*Capai Top 5 Rank Untuk Mendapatkan Prize*

Top 1 - 10M Money + 200 Limit
Top 2 - Title Custom + 1000 U-Crate 
Top 3 - 5M Money + 500 L-Crate
Top 4 - 200 Limit
Top 5 - 1M Exp

Leaderboard Dicatat:
23:59 23/04/2023
`.trim()) // Tambah sendiri kalo mau


handler.help = ['event4']
handler.tags = ['rpg']
handler.command = /^event4$/i
handler.register = true
handler.premium = false
export default handler