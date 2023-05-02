let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Fitur Untuk Menutup/Membuka Grup*

*_Format Dibawah:_*
*_- ${usedPrefix + command} close_*
*_- ${usedPrefix + command} open_*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group)$/i
handler.register = true
handler.admin = true
handler.botAdmin = true

export default handler
