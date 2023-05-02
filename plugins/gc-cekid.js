let handler = async (m, {conn, groupMetadata }) => {
conn.reply(m.chat, `*${await groupMetadata.id}*`, fakes)
}
handler.help = ['cekid']
handler.tags = ['group']
handler.command = /^(cekid|idgc|gcid)$/i
handler.register = true
handler.limit = 1
handler.group = true

export default handler  