const cooldown = 3600000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastfishing))
    if (user.fishingrod < 3) return m.reply(`
*Dibutuhkan Level 3 Pancingan Untuk Memancing*
Beli Pancingan Di: *${usedPrefix}craft*
`.trim())
    if (user.skillfishing < 3) return m.reply(`
*Dibutuhkan Level 3 Fishing Ability Untuk Memancing*
Pelajari Tentang Memancing Di: *${usedPrefix}library*
`.trim())
if (user.stamina < 90) return m.reply(`
*Dibutuhkan Setidaknya 90ST ⚡ Untuk Memancing*
*Cari Cara Menambah Stamina Di #stamina*
`.trim())
if (user.money < 24999) return m.reply(`
*Dibutuhkan Setidaknya 25K Money💵 Untuk Memancing*
*Dapatkan Money Di Fitur Role Playing Game*
`.trim())
    if (new Date - user.lastfishing <= cooldown) return m.reply(`
Fitur Memancing Sedang CD\nSelama *🕐 ${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = `*_Anda Telah Memancing Di Pulau Christmas, Kiribati 🇰🇮_*`
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
    user.lastfishing = new Date * 1
}
handler.help = ['mancing3']
handler.tags = ['rpg']
handler.command = /^(mancing3|(ber)?petualang(ang)?)$/i
handler.register = true
handler.limit = 1
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
        	exp: 100000,
            lobster: 30,
            lumba: 30,
            orca: 30,
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