let handler = async (m, { conn, args, usedPrefix }) => {
	let info = `*GIVE PET FOODS*
	
*Contoh:* ${usedPrefix}feed kucing

${htki} LIST PET ${htka}
🐈 • Cat
🐕 • Dog
🦊 • Fox
🐎 • Horse`
let pesan = pickRandom(['*Nyummm~*', '*Thanks*', '*Terimakasih ^-^*', '...', '*Thank You ~*', '*Airgatou ^-^*'])
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'horse' ? '🐴':'' ) 
    let user = global.db.data.users[m.sender]
    let rubah = global.db.data.users[m.sender].fox
    let kuda = global.db.data.users[m.sender].horse
    let kucing = global.db.data.users[m.sender].cat
    let anjing = global.db.data.users[m.sender].dog
    switch (type) {
        case 'fox':
            if (rubah == 0) return conn.sendButton(m.chat, `${htki} NOT FOUND ${htka}`, '*_Kamu Tidak Memiliki Pet_*', null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗕𝗨𝗬 𝗣𝗘𝗧', '.petshop']],m)
            if (rubah == 10) return conn.sendButton(m.chat, `${htki} LEVEL MAX ${htka}`, '*_Level Pet Kamu Sudah Maks_*', null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗕𝗨𝗬 𝗡𝗘𝗪 𝗣𝗘𝗧', '.petshop']],m)
            let __waktur = (new Date - user.foxlastfeed)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - user.foxlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.foxexp += 20
                    user.foxlastfeed = new Date * 1
                    m.reply(`Memberi Makan *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.foxexp > naiklvl) {
                            user.fox += 1
                            user.foxexp -= (rubah * 100)
                            conn.sendButton(m.chat, `${htki} LEVELUP ${htka}`, `*CONGRATS*, Level Pet Kamu Naik`,null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗦𝗘𝗘 𝗔𝗕𝗜𝗟𝗜𝗧𝗬 𝗣𝗘𝗧', '.petshop']], m)
                        }
                    }
                } else m.reply(`*_Kamu Tidak Memiliki Makanan Pet_*`)
            } else conn.sendButton(m.chat, `${htki} COOLDOWN ${htka}`, `Pet Kamu Sudah Kenyang, Tunggu Lagi Selama\n➞ *${waktur}*`, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv']], m)
            break
        case 'cat':
            if (kucing == 0) return conn.sendButton(m.chat, `${htki} NOT FOUND ${htka}`, '*_Kamu Tidak Memiliki Pet_*', null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗕𝗨𝗬 𝗣𝗘𝗧', '.petshop']],m)
            if (kucing == 10) return conn.sendButton(m.chat, `${htki} LEVEL MAX ${htka}`, '*_Level Pet Kamu Sudah Maks_*', null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗕𝗨𝗬 𝗡𝗘𝗪 𝗣𝗘𝗧', '.petshop']],m)
            let __waktuc = (new Date - user.catlastfeed)
            let _waktuc = (600000 - __waktuc)
            let waktuc = clockString(_waktuc)
            if (new Date - user.catlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.catngexp += 20
                    user.catlastfeed = new Date * 1
                    m.reply(`Memberi Makan *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.catexp > naiklvl) {
                            user.cat += 1
                            user.catngexp -= (kucing * 100)
                            conn.sendButton(m.chat, `${htki} LEVELUP ${htka}`, `*CONGRATS*, Level Pet Kamu Naik`,null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗦𝗘𝗘 𝗔𝗕𝗜𝗟𝗜𝗧𝗬 𝗣𝗘𝗧', '.petshop']], m)
                        }
                    }
                } else m.reply(`*_Kamu Tidak Memiliki Makanan Pet_*`)
            } else conn.sendButton(m.chat, `${htki} COOLDOWN ${htka}`, `Pet Kamu Sudah Kenyang, Tunggu Lagi Selama\n➞ *${waktuc}*`, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv']], m)
            break
        case 'dog':
            if (anjing == 0) return conn.sendButton(m.chat, `${htki} NOT FOUND ${htka}`, '*_Kamu Tidak Memiliki Pet_*', null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗕𝗨𝗬 𝗣𝗘𝗧', '.petshop']],m)
            if (anjing == 10) return conn.sendButton(m.chat, `${htki} LEVEL MAX ${htka}`, '*_Level Pet Kamu Sudah Maks_*', null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗕𝗨𝗬 𝗡𝗘𝗪 𝗣𝗘𝗧', '.petshop']],m)
            let __waktua = (new Date - user.doglastfeed)
            let _waktua = (600000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - user.doglastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.dogexp += 20
                    user.doglastfeed = new Date * 1
                    m.reply(`Memberi Makan *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.dogexp > naiklvl) {
                            user.dog += 1
                            user.dogexp -= (anjing * 100)
                            conn.sendButton(m.chat, `${htki} LEVELUP ${htka}`, `*CONGRATS*, Level Pet Kamu Naik`,null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗦𝗘𝗘 𝗔𝗕𝗜𝗟𝗜𝗧𝗬 𝗣𝗘𝗧', '.petshop']], m)
                        }
                    }
                } else m.reply(`*_Kamu Tidak Memiliki Makanan Pet_*`)
            } else conn.sendButton(m.chat, `${htki} COOLDOWN ${htka}`, `Pet Kamu Sudah Kenyang, Tunggu Lagi Selama\n➞ *${waktua}*`, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv']], m)
            break
        case 'horse':
            if (kuda == 0) return conn.sendButton(m.chat, `${htki} NOT FOUND ${htka}`, '*_Kamu Tidak Memiliki Pet_*', null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗕𝗨𝗬 𝗣𝗘𝗧', '.petshop']],m)
            if (kuda == 10) return conn.sendButton(m.chat, `${htki} LEVEL MAX ${htka}`, '*_Level Pet Kamu Sudah Maks_*', null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗕𝗨𝗬 𝗡𝗘𝗪 𝗣𝗘𝗧', '.petshop']],m)
            let __waktuk = (new Date - user.horselastfeed)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - user.horselastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.horseexp += 20
                    user.horselastfeed = new Date * 1
                    m.reply(`Memberi Makan *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.horseexp > naiklvl) {
                            user.horse += 1
                            user.horseexp -= (kuda * 100)
                            conn.sendButton(m.chat, `${htki} LEVELUP ${htka}`, `*CONGRATS*, Level Pet Kamu Naik`,null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗦𝗘𝗘 𝗔𝗕𝗜𝗟𝗜𝗧𝗬 𝗣𝗘𝗧', '.petshop']], m)
                        }
                    }
                } else m.reply(`*_Kamu Tidak Memiliki Makanan Pet_*`)
            } else conn.sendButton(m.chat, `${htki} COOLDOWN ${htka}`, `Pet Kamu Sudah Kenyang, Tunggu Lagi Selama\n➞ *${waktuk}*`, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv']], m)
            break
        default:
            return conn.sendButton(m.chat, `${htki} NOT FOUND ${htka}`, info, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗕𝗨𝗬 𝗣𝗘𝗧', '.petshop']], m)
    }
}
handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
