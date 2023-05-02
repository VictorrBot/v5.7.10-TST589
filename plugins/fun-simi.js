import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `*Example: ${usedPrefix + command} Cantik kamu*`
 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
  let json = await res.json()
  if (json.success) 
m.reply(`${json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')}`) 
}

handler.help = ['cia <text>?']
handler.tags = ['kerang']
handler.command = /^cia$/i
handler.register = true
export default handler

