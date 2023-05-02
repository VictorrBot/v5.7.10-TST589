import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
  let url = 'https://api.lolhuman.xyz/api/random/exo?apikey=Shirooo'
  conn.sendFile(m.chat, await(await fetch(url)).buffer(), 'exos.png', '*Results From EXO*', m)
}
handler.command = /^(exo)$/i
handler.tags = ['internet']
handler.help = ['exo']
handler.limit = 1
handler.register = true
export default handler
