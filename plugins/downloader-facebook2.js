import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*Fitur Untuk Unduh Video FB*\n\n*_Contoh: ${usedPrefix + command} https://www.facebook.com/watch?v=636541475139_*`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `*FACEBOOK DOWNLOADER*\n\n*🌐 URL:* ${url}`, m)
  let info = `*Processing...*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, sgc, '𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗚𝗥𝗢𝗨𝗣', null, null, [
['𝗠𝗘𝗡𝗨', '/menu'],
['𝗦𝗘𝗪𝗔 𝗕𝗢𝗧', '/sewa']
], m,)
}
handler.help = ['facebook2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook2|fb2)(downloder2|dl2)?)$/i
handler.register = true
handler.limit = 1
export default handler
