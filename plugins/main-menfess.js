import fs from 'fs'
let handler = async (m, { conn, number, text, usedPrefix, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender] 
  
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Fitur Untuk Menfess*\n\n*_Contoh: ${usedPrefix + command} nomor|nama pengirim|pesan_*`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Fitur Untuk Menfess*\n\n*_Contoh: ${usedPrefix + command} nomor|nama pengirim|pesan_*`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw '*Nomer Tidak Terdaftar Di Whatsapp*';
    if (jid == m.sender) throw '*Tidak Bisa Mengirim Pesan Menfess Kediri Sendiri.*'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
 
let id = + new Date
let tek = `Hai Kak *@${data.jid.split('@')[0]}*\n*Kamu Menerima Pesan Menfess*\n`.trim();
let logs = `✉️ Pesan:\n*${pesan}*`

let ssn = `👤 Dari: *${name}*\n✉️ Pesan: *${pesan}*\n\n*_Ingin Balas Menfess? #balasmenfess pesanmu_*`
        let imgr = fla.getRandom()
        //Created By AL? Offc
       await conn.send3ButtonDoc(data.jid, tek, ssn, '𝗠𝗘𝗡𝗨', '.menu', '𝗢𝗪𝗡𝗘𝗥', '.owner', '𝗖𝗥𝗘𝗗𝗜𝗧', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/',
    mediaType: 2, 
    description: sgc,
    title: "么 Keizha",
    body: wm,
    thumbnail: fs.readFileSync('./media/menfess.jpg'),
    sourceUrl: sgc
   }}}).then(() => {
           conn.send3ButtonDoc(m.chat, `*Berhasil Mengirim Pesan Ke @${jid.replace(/@.+/, '')}*`, logs, '𝗠𝗘𝗡𝗨', '.menu', '𝗢𝗪𝗡𝗘𝗥', '.owner', '𝗖𝗥𝗘𝗗𝗜𝗧', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://facebook.com/',
    mediaType: 2, 
    description: sgc,
    title: "么 Keizha",
    body: wm,
    thumbnail: fs.readFileSync('./media/menfess.jpg'),
    sourceUrl: sgc
   }}})
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    
    }
handler.tags = ['main']
handler.help = ['menfess'].map(v => v + ' <nomor|nama|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true
handler.register = true
handler.limit = 1
handler.premium = true
export default handler

/* Made By FokusDotId (Fokus ID)
 * https://github.com/FokusDotId
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * Jangan lupa bawa udut minimal sukun🗿
 
 *Nᴜᴍᴘᴀɴɢ Nᴀᴍᴀ
 *Kᴀɴɢ Rᴇᴄᴏᴅᴇ : Aʟᴅɪ Lᴇsᴍᴀɴᴀ
 *Cʜᴀɴɴᴇʟ : AL? Offc
 
 *Minimal Jangan Di Hapos Anj
*/
