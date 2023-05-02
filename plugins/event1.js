const items = {
    event1: {
        limit: {
            mooncard: 1
        },
        legendary: {
            mooncard: 3
        },
        manar: {
            mooncard: 1
        },
        diamond: {
            starcard: 3
        },
        emerald: {
            starcard: 3
        },
        gold: {
            starcard: 2
        },
        iron: {
            mooncard: 2
        },
        mythic: {
            mooncard: 2
        }
    },
    none1: {
        potion: {
            money: 1000
        },
        trash: {
            money: 9
        },
        wood: {
            money: 800
        },
        rock: {
            money: 800
        },
        string: {
            money: 5000
        },
        iron: {
            money: 5000
        },
        gold: {
            money: 8000
        },
        diamond: {
            money: 8000
        },
        emerald: {
            money: 10000
        },
        apel: { 
        	money: 200
        },
        mangga: {
            money: 200
        },
        jeruk: {
            money: 200
        },
        pisang: {
            money: 200
        },
        anggur: {
            money: 200 
        },
        kaleng: {
            money: 140
        },
        botol: {
            money: 155
        },
        kardus: {
            money: 150 
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    let buf1 = user.boosts
    let buff1 = (buf1 == 0 ? '0' : '' || buf1 == 1 ? '156' : '' || buf1 == 2 ? '312' : '' || buf1 == 3 ? '467' : '' || buf1 == 4 ? '623' : '' || buf1 == 5 ? '778' : '' || buf1 == 6 ? '35' : '' || buf1 == 7 ? '40' : '' || buf1 == 8 ? '45' : '' || buf1 == 9 ? '50' : '' || buf1 == 10 ? '100' : '')
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    const info = `
*「 SPECIAL SHOP 」*

*_Format: ${usedPrefix}${command} <item> <count>_*
*_Contoh: ${usedPrefix}${command} limit 1_*
╭───────⬣  
│ *Item List*
├───────⬣
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `│ *_${global.rpg.emoticon(v)}${v} > ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}_*`.trim()
    }).join('\n')}
╰────────────────⬣
`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(info)
    if (command.toLowerCase() == 'event1') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`*Card Tidak Cukup*\n\n*- Kamu Membutuhkan ${(listItems[item][paymentMethod] * total)} Card 🀄_*`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total - buff1
        user[item] += total
        return m.reply(`Kamu Menukarkan *${total} ${global.rpg.emoticon(item)}${item}*`)
    } else {
        if (user[item] < total) return m.reply(`Kamu Tidak Mempunyai Cukup *${global.rpg.emoticon(item)}${item}* Untuk Dijual, Kamu Hanya Mempunya *${user[item]}* Item`)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`Kamu Menjual *${total} ${global.rpg.emoticon(item)}${item}*`)
    }
}

handler.help = ['event1'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(event1)$/i
handler.register = true
handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}