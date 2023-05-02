const cooldown = 3600000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 90) return m.reply(`
*Dibutuhkan Setidaknya 90HP ❤️ Untuk Berpetualang*
Beli Potion Untuk Return HP Di: *${usedPrefix}buy potion jumlah*,
Dan Ketik *${usedPrefix}heal jumlah* Untuk Menggunakan Potion
`.trim())
if (user.stamina < 90) return m.reply(`
*Dibutuhkan Setidaknya 90ST ⚡ Untuk Berpetualang*
*Cari Cara Menambah Stamina Di #stamina*
`.trim())
if (user.skilladventure < 1) return m.reply(`
*Dibutuhkan Setidaknya Level 1 A-A Untuk Berpetualang*
*Dapatkan Adventure Ability Di #library*
`.trim())
if (user.money < 49999) return m.reply(`
*Dibutuhkan Setidaknya 50K Money💵 Untuk Berpetualang*
*Dapatkan Money Di Fitur Role Playing Game*
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
Fitur Berpetualang Sedang CD\nSelama *🕐 ${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = `*_Anda Telah Berpetualang Ke Arah Barat Dan Sampai Di ${pickRandom(['Amerika Serikat', 'Kanada', 'Meksiko', 'Brasil', 'Argentina', 'Chile', 'Kolombia', 'Peru','Ekuador','Bolivia'])}_*`
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\n*_Dan Kamu Mendapatkan_*'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastadventure = new Date * 1
}
handler.help = ['adventure2']
handler.tags = ['rpg']
handler.command = /^(adventure2|(ber)?petualang(ang)?)$/i
handler.register = true
handler.limit = 1
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 100000,
            money: 200000,
            iron: 15,
            mangga: 10,
            apel: 10,
            anggur: 10,
            jeruk: 10,
            pisang: 10,
            wood: 10,
            drink: 10,
        },
        lost: {
            health: 101 - user.cat * 4,
            stamina: 101 - user.cat * 4
        }
    }
    return rewards
}

function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}