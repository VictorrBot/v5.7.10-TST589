let handler = async m => m.reply(`
*MONEY CONVERSION RATE*

#tomoney9 - Pajak 89,0% 
#tomoney8 - Pajak 87,5%
#tomoney7 - Pajak 85,8%
#tomoney6 - Pajak 84,0%
#tomoney5 - Pajak 80,0%
#tomoney4 - Pajak 75,0%
#tomoney3 - Pajak 66,7%
#tomoney2 - Pajak 50,0%
#tomoney1 - Pajak 00,00%

*Fitur Untuk Mengkonversi/Menjadikan Exp Sebagai Money*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['tomoney']
handler.tags = ['main','rpg']
handler.command = /^tomoney$/i
handler.register = true
handler.premiun = false
export default handler