import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, '*Fitur Untuk Stalking Akun Github*\n\n*_Contoh: .githubstalk Nurutomo_*', m)

  await m.reply('*Searching...*')
    let res = await fetch(`https://api.lolhuman.xyz/api/github/${text}?apikey=${global.lolkey}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.avatar)).buffer()
    let hasil = `*GITHUB STALK*
 
 *Nama*: ${json.result.name}
 *Bio*: ${json.result.bio}
 *Perusahaan*: ${json.result.company}
 *Email:* ${json.result.email}
 *Twitter:* ${json.result.twiter_username}
 *Repo Publik:* ${json.result.public_repos}
 *Gists Publik:* ${json.result.public_gists}
 *Follower:* ${json.result.followers}
 *Following:* ${json.result.following}
 *Lokasi:* ${json.result.location}
 *Type:* ${json.result.type}
`

    conn.sendFile(m.chat, thumb, 'githubstalk.jpg', hasil, m)
}
handler.help = ['githubstalk'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(githubstalk|ghstalk)$/i
handler.register = true
handler.limit = 1
export default handler
