import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
m.reply(`*${indo}*\n\n*Character:* ${character}\n*Anime:* ${anime}`)
}
handler.help = ['katanime']
handler.tags = ['anime']
handler.command = /^(katanime|kataanime)$/i
handler.register = true
handler.limit = 1
export default handler
