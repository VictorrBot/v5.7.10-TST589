import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
  let txt = await res.text()

  let arr = txt.split('\n')
  let cita = arr[Math.floor(Math.random() * arr.length)]

  await conn.sendFile(m.chat, await(await fetch(cita)).buffer(), 'anime.jpg', `Results from Random Anime`, m, {mentions: [m.sender]})
}
handler.tags = ['anime']
handler.help = ['randomanime']
handler.command = /^(randomanime|animerandom)$/i
handler.register = true
handler.limit = 1

export default handler