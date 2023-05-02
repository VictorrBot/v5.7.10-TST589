let handler = async m => m.reply(`
*INTELLIGENCE 🧠*

*Dapatkan Di #rob-int*

`.trim()) // Tambah sendiri kalo mau


handler.help = ['inte']


handler.tags = ['rpg','main']


handler.command = /^inte$/i


handler.register = true


handler.premiun = false


export default handler