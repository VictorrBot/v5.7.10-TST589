const cooldown = 3600000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 95) return m.reply(`
*Dibutuhkan Setidaknya 95HP ❤️ Untuk Berpetualang*
Beli Potion Untuk Return HP Di: *${usedPrefix}buy potion jumlah*,
Dan Ketik *${usedPrefix}heal jumlah* Untuk Menggunakan Potion
`.trim())
if (user.stamina < 95) return m.reply(`
*Dibutuhkan Setidaknya 95ST ⚡ Untuk Berpetualang*
*Cari Cara Menambah Stamina Di #stamina*
`.trim())
if (user.skilladventure < 3) return m.reply(`
*Dibutuhkan Setidaknya Level 3 A-A Untuk Berpetualang*
*Dapatkan Adventure Ability Di #library*
`.trim())
if (user.money < 99999) return m.reply(`
*Dibutuhkan Setidaknya 100K Money💵 Untuk Berpetualang*
*Dapatkan Money Di Fitur Role Playing Game*
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
Fitur Berpetualang Sedang CD\nSelama *🕐 ${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = `*_Anda Telah Berpetualang Ke Arah Utara Dan Sampai Di ${pickRandom(['Amerika Serikat', 'Kanada', 'Russia', 'Inggris', 'Jerman', 'Prancis', 'Jepang', 'China','India'])}_*`
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
handler.help = ['adventure4']
handler.tags = ['rpg']
handler.command = /^(adventure4|(ber)?petualang(ang)?)$/i
handler.register = true
handler.limit = 1
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 400000,
            money: 400000,
            wood: 25,
            mangga: 20,
            jeruk: 20,
            buntal: 20,
            cumi: 20,
            orca: 20,
            udang: 20,
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