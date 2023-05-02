async function handler(m) {
    if (!m.quoted) throw '*_Reply Pesan_*'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw '*_Pesan Yang Anda Reply Tidak Mengandung Reply_*'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i
handler.tags = ['tools']
handler.help = ['q']
handler.register = true
export default handler