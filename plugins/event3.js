let handler = async m => m.reply(`
*SPECIAL CARD 💫*

*Dapatkan Moon & Star Card 🀄 Di Fitur Yang Tertera Dibawah Dan Tukarkan Di #event1*

 #adventure
 #daily
 #mining
 #openbo

`.trim()) // Tambah sendiri kalo mau


handler.help = ['event3']
handler.tags = ['rpg']
handler.command = /^event3$/i
handler.register = true
handler.premium = false
export default handler