let handler = async (m, { conn, args }) => {
    const bonus = Math.floor(Math.random() * 500000)
    if (!args[0]) throw '*_Masukkan Angkamu_*'
    if (!/\d/i.test(args[0])) throw '*_Angka Hanya 0-9_*'
    const bot = pickRandom(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
    const isWin = bot == args[0]
    conn.reply(m.chat, `
*TEBAK-ANGKA Games 🎮*

Angka Kamu: *${args[0]}*
Angka Bot: *${bot}*

*Apakah Angkamu Sama Dengan Bot ?*
+${isWin ? bonus : 0} XP

*_Jika Sama: +500K XP (Acak)_*
*_Jika Tidak: +00K XP_*
`.trim(), m)
    if (isWin) global.DATABASE.data.users[m.sender].exp += bonus * 1
}
handler.help = ['tebakangka <0-9>']
handler.tags = ['game']
handler.command = /^tebakangka/i
handler.register = true
handler.limit = true
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}