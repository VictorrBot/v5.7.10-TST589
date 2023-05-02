
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `*Fitur Stalking Akun Tik Tok*\n\n*Example: #tiktokstalk onlyonegreat*`
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
 • *🔢 Number:* ${res.name}
 • *💬 Username:* ${res.username}
 • *👥 Followers:* ${res.followers}
 • *🫂 Following:* ${res.following}
 • *📒 Desc:* ${res.desc}
 • *🌐 Link* : https://tiktok.com/${res.username}
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['downloader']
handler.command = /^t(tstalk|iktokstalk)$/i
handler.limit = 1
handler.registet = true
export default handler
