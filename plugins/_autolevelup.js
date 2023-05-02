import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
    
        m.reply(`
*Tahniah atas pencapaianmu yang luar biasa! Kamu telah menunjukkan keahlianmu yang mumpuni dalam bermain game dan berhasil naik level. Selamat dan teruskan semangatmu dalam mengembangkan kemampuanmu. Jangan lupa untuk selalu bersenang-senang dan menikmati setiap tantangan dalam permainanmu. Semoga sukses terus dalam perjalananmu di game ini dan ke depannya. Keep leveling up and stay awesome!*

*Level Up Progress 📊*
*${before}* ➣ *${user.level}*
*• Tier: ${user.role}*

⭐ Hinto:
*"Reberu Appu Suru Tame Ni RPG Kinou O Purei Suru"*`.trim())
    }
    
   /* let looh = `*${before}* -> *${user.level}*`
      conn.send3ButtonImg(m.chat, pp, `Cᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴ, Aɴᴅᴀ Tᴇʟᴀʜ Nᴀɪᴋ Lᴇᴠᴇʟ!!`, looh, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/_b4c00t4an_s3l3b',
    mediaType: 2, 
    description: sgc,
    title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
    body: wm,
    thumbnail: fs.readFileSync('./media/ok.jpg'),
    sourceUrl: sgc
   }}})*/
}
export const disabled = false
