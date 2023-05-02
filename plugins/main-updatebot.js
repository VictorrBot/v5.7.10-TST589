let handler = async m => m.reply(`
*Update 22:34 - 24/04/2023*

*Delete Button & List*
*Jika Ada Keluhan Untuk Update Ini*
*Bisa Hubungi wa.me/6281249122429

*Thanks Everyone 🤡*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['updatebot']


handler.tags = ['rpg','main']


handler.command = /^updatebot$/i


handler.register = true


handler.premiun = false


export default handler