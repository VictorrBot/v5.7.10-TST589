let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Sukses Menghapus Skin Kastil*`, m)
        global.db.data.users[m.sender].skinkastil = 0
        global.db.data.users[m.sender].oc = 0
        global.db.data.users[m.sender].zc = 0
        global.db.data.users[m.sender].nc = 0
        global.db.data.users[m.sender].vc = 0
        global.db.data.users[m.sender].pc = 0
        global.db.data.users[m.sender].ac = 0
        
        
}
handler.help = ['delete-castleskin']
handler.tags = ['lm']
handler.command = /^(delete-castleskin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

export default handler
