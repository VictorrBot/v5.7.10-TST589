let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`*Random Anime Gif*

*_Contoh: ${usedPrefix + command} cuddle_*

*LIST GIF:*
• bully
• cuddle
• cry
• hug
• awoo
• kiss
• lick
• pat
• smug
• bonk
• yeet
• blush
• smile
• wave
• smile
• wave
• highfive
• handhold
• nom
• bite
• glomp
• kill
• slap
• happy
• wink
• poke
• dance
• cringe
• blush`)
        let images = `https://api.lolhuman.xyz/api/random/${text}?apikey=${global.lolkey}`
        await conn.sendButton(m.chat, `*Done Get ${text}*`, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m)
}
handler.help = ['gif'].map(v => v + ' <anime>')
handler.tags = ['tools','anime']
handler.command = /^(gif)$/i
handler.register = true
handler.limit = true
export default handler