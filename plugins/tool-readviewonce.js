let handler = async (m, { conn }) => {
    if (!m.quoted) throw '*_Reply Pesan View Once_*'
    if (m.quoted.mtype !== 'viewOnceMessage') throw '*_Itu Bukan Pesan View Once_*'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw '*_Tidak Bisa Membuka Pesan_*'
    await conn.copyNForward(m.chat, msg, true, { readViewOnce: true })
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^readviewonce/i
handler.register = true
handler.limit = 1
export default handler