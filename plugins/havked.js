let handler = async (m, usedPrefix, command) => {
  let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/hekel.json`)
  let f = await g.json()
  let a = f[Math.floor(Math.random() * f.length)]
  conn.sendFile(m.chat, a, "hacker.jpg", "Results From Hackers\nBy Keizha")
}

handler.help = ['hacker']
handler.tags = ['internet']
handler.command = /^hacker$/i
handler.limit = 1
handler.register = true

export default handler
