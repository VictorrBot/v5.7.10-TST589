let handler = async (m, usedPrefix, command) => {
    let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Mountain.json`)
    let f = await g.json()
    let a = f[Math.floor(Math.random() * f.length)]
    conn.sendFile(m.chat, a, 'mountain.jpg', 'Results From the Mountain\nBy Keizha', m)
}
handler.help = ['gunung']
handler.tags = ['internet']
handler.command = /^gunung$/i
handler.limit = 1
handler.register = true
export default handler
