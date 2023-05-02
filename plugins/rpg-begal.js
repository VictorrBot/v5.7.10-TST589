import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, participants, usedPrefix, owner }) => { 
    let user = global.db.data.users[m.sender]
    let buf1 = user.boostb
    let buff1 = (buf1 >= 0 && buf1 <= 10) ? [0, 2, 3, 4, 5, 6, 35, 40, 45, 50, 100][buf1] : 0
    
    try { 
        let target = null
        if (!m.isGroup) {
            target = conn.user.jid
        } else {
            let member = participants.filter(p => !p.isMe)
            if (member.length == 0) throw 'Tidak ada lawan pembegalan'
            target = member[Math.floor(Math.random() * member.length)].jid
        }
        
        let lastBegal = global.db.data.users[m.sender].lastbegal
        let _timers = 7200000 - (Date.now() - lastBegal)
        if (_timers > 0) throw `Kamu masih kelelahan, coba lagi setelah ${clockString(_timers)}`
        
        global.db.data.users[m.sender].lastbegal = Date.now()
        
        let health = random(200, 400) * buff1 / 100
        let money = random(50000, 100000) * buff1 / 100
        let xp = random(1000, 5000) * buff1 / 100
        
        let fightDuration = random(1, 6) * 60 // durasi pertarungan dalam detik
        let location = randomize([
            'Rumah', 'Desa', 'Kota', 'Kabupaten', 'Kecamatan', 'Provinsi', 
            'Negara', 'Aliansi', 'Kerajaan', 'Kekaisaran', 'Planet', 'Bintang', 
            'Universe', 'Multiverse', 'Metaverse', 'Xenoverse', 'Hyperverse', 
            'Omniverse', 'Microverse', 'Hollowverse', 'Crossoververse', 'Paraverse', 
            'Fictionalized universe'
        ])
        let level = randomize(['Sange Ke', 'Sayang Ke', 'Cinta Ke', 'Berteman Dengan', 
            'Sefrekuensi Dengan', 'Sejenis Dengan', 'Gak Sengaja Ngelihat'])
        
        let messages = [
            `Kamu menyiapkan diri untuk pembegalan..`,
            `Menantimu korban pembegalan..`,
            `Korban pembegalan ditemukan..`,
            `Kamu mulai melakukan pembegalan..`,
            `Kamu berhasil membegal korban dan mendapatkan:`,
            `Korban berhasil melarikan diri dari pembegalan..`,
            `Kamu kelelahan dan harus istirahat..`,
            `Kamu siap untuk melakukan pembegalan lagi..`
        ]
        
        for (let i = 0; i < messages.length; i++) {
            await sleep(random(1, 5) * 1000) // jeda antar pesan
            await conn.sendMessage(m.chat, messages[i], MessageType.text
        , {
            quoted: m
        })
    }
    
    await sleep(random(1, 5) * 1000) // jeda sebelum pertarungan dimulai
    await conn.sendMessage(m.chat, `${level} ${conn.getName(target)} di ${location} selama ${fightDuration / 60} menit..`, MessageType.text, {
        quoted: m
    })
    
    await sleep(fightDuration * 1000) // durasi pertarungan
    
    if (Math.random() < 0.7) { // 70% peluang berhasil
        await conn.sendMessage(m.chat, `Kamu berhasil membegal ${conn.getName(target)} dan mendapatkan:\n\n• ${money.toLocaleString()} uang\n• ${xp} XP\n• ${health.toFixed(2)} kesehatan`, MessageType.text, {
            quoted: m
        })
        global.db.data.users[m.sender].money += money
        global.db.data.users[m.sender].exp += xp
        global.db.data.users[m.sender].health += health
        global.db.data.users[target].money -= money
        global.db.data.users[target].health -= health
    } else {
        await conn.sendMessage(m.chat, `Sayang sekali, ${conn.getName(target)} berhasil melarikan diri dari pembegalanmu..`, MessageType.text, {
            quoted: m
        })
    }
} catch (e) {
    conn.reply(m.chat, `${e}`, m)
}

}
handler.help = ['begal']
handler.tags = ['game']
handler.command = /^begal/i

export default handler