import fs from 'fs'
const delay = time => new Promise(res => setTimeout(res, time))
export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log({ text: m.text, type: m.quoted?.mtype })
	if ((m.text === 'BALAS PESAN' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("*Silahkan Ketik Pesan Balasanmu.");
	else {
		let imgr = fla.getRandom()
		let txt = `𝗛𝗮𝗶𝗶𝗶 *@${mf.dari.split('@')[0]}*\nKamu Menerima Pesan Balasan.\n\nPesan Yang Kamu Kirim Sebelumnya:\n*${mf.pesan}*\n\nPesan Balasannya:\n*${m.text}*\n`.trim();
		let sblm = `*Pesanmu Sebelumnya:* ${mf.pesan}\n*Pesan Balasannya:* ${m.text}`
		await this.send3ButtonDoc(mf.dari, txt, sblm, '𝗥𝗘𝗣𝗟𝗬', '.balasmenfess', '𝗢𝗪𝗡𝗘𝗥', '.owner', '𝗠𝗘𝗡𝗨', '.menu', fakes, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa',
    mediaType: 2, 
    description: sgc,
    title: "ᴊᴏɪɴ ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ɢʀᴏᴜᴘ",
    body: wm,
    thumbnail: fs.readFileSync('./media/menfess.jpg'),
    sourceUrl: sgc}}})
		/*await this.sendButton(mf.dari, bottime, txt, `${imgr + 'Menfess'}`, [['BALAS PESAN', '.balasmenfess']], null)*/.then(() => {
			m.reply('*Berhasil Mengirim Balasan.*')
			delay(1500)
			delete this.menfess[mf.id]
			return !0
		})
	}
	return !0
}
/* Made By FokusDotId (Fokus ID)
 * https://github.com/FokusDotId
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * Jangan lupa bawa udut minimal sukun🗿
 
 *Nᴜᴍᴘᴀɴɢ Nᴀᴍᴀ*
 *Kᴀɴɢ Rᴇᴄᴏᴅᴇ : Aʟᴅɪ Lᴇsᴍᴀɴᴀ
 *Cʜᴀɴɴᴇʟ : AL? Offc
 
 *Minimal Jangan Di Hapos Anj
*/
