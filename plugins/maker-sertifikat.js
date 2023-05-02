let handler = async (m, { conn, text, command }) => {
    if (!text) throw 'Masukkan Teks.....................'
    let hyz = `https://api.lolhuman.xyz/api/${command}?apikey=Shirooo&name=${text}`
    conn.sendButtonImg(m.chat, hyz, wm, 'Thanks', 'thanks', m) 
}
handler.help = ['toloserti', 'fuckboy', 'fuckgirl', 'bucinserti', 'goodboy', 'goodgirl', 'badboy', 'badgirl'].map(v => v + ' <teks>')
handler.tags = ['internet','fun']
handler.command = /^(toloserti|fuckboy|fuckgirl|bucinserti|goodboy|goodgirl|badboy|badgirl)$/i
handler.limit = 1
handler.register = true
export default handler
