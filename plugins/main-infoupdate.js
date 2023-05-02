let handler = async m => m.reply(`
*FELICIA BOT RANK OR ROLE LIST*

    'Traveler'
    'Adventurer'
    'Wanderer'
    'Apollo'
    'Wayfarer'
    'Paladins'
    'Omega'
    'Pathfinder'
    'Stallion'
    'VOYAGER'

Masing Masing 5 Tingkatan Kecuali *VOYAGER* 
`.trim()) // Tambah sendiri kalo mau


handler.help = ['role']
handler.tags = ['main','rpg']
handler.command = /^role$/i
handler.register = true
handler.premium = false
export default handler