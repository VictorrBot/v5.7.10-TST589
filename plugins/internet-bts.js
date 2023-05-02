import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
    let url = 'https://api.lolhuman.xyz/api/random/bts?apikey=Shirooo'
    conn.sendFile(m.chat, await(await fetch(url)).buffer(), 'bts.jpg', '*Results From BTS*', m)
}
handler.command = /^(bts)$/i
handler.tags = ['internet']
handler.help = ['bts']
handler.limit = 1
handler.register = true
export default handler
