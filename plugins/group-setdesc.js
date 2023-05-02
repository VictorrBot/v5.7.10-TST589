let handler = async (m, { text }) => {

if(!text) throw '*_Masukkan Desc Baru_*'
  
 await conn.groupUpdateDescription(m.chat, text)
  return m.reply("*_Success_*")
}

  handler.help = ['setdesc', 'sdesc']
handler.tags = ['group']
handler.command = /^(setdesc|sdesc|setdesk|sdesk)$/i
handler.register = true
handler.group = true
handler.admin = true

export default handler
