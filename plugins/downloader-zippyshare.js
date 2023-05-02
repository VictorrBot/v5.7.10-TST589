import { extract } from 'zs-extract'
import { lookup } from 'mime-types'

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw '*Fitur Untuk Unduh File Dari Situs Zippy Share*\n\n*_Contoh: .zippyshare link_*'
  if (!args[0].includes('zippyshare.com/v')) throw '*URL Salah*'
  await m.reply('*In Progress, Please Wait*')
  for (let i = 0; i < args.length; i++) {
    if (!args[i].includes('zippyshare.com/v')) continue
    let res = await extract(args[i])
    let mimetype = await lookup(res.download)
    conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m })
  }
}
handler.help = ['zippyshare']
handler.tags = ['downloader']
handler.alias = ['zs', 'zippy', 'zippydl', 'zippyshare']
handler.command = /^z(s|ippy(dl|share)?)$/i 
handler.limit = 2
handler.register = true
export default handler
