import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw '*Fitur Untuk Search Video/Channel Dari YT*\n\n*_Contoh: .yts dj old_*'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
💬 *${v.title}* 
🌐 _${v.url}_
⏳ Duration: ${v.durationH}
📂 Uploaded ${v.publishedTime}
👁️ ${v.view} views
      `.trim()
      case 'channel': return `
╭──────━• *CHANNEL*
│💬 *${v.channelName}* 
│🌐 _${v.url}_
│❤️ _${v.subscriberH} Subscriber_
│🎥 _*${v.videoCount} Video_
┗──────━•
`.trim()
    }
  }).filter(v => v).join('\n\n─────────────━─────────────\n\n')
  m.reply(`*${htki} SEARCH ${htka}*\n\n` + teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
handler.register = true
handler.limit = 1
export default handler
