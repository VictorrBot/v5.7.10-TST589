let handler = m => m

handler.before = async function (m) {
   if (m.mentionedJid.length >= 20) await conn.send2ButtonDoc(m.chat, `Ada Keperluan Apa Tag Saya?`, wm, '𝗠𝗘𝗡𝗨', '.menu', '𝗦𝗘𝗪𝗔 𝗕𝗢𝗧', '.sewabot', m, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: '𝗣 𝗘 𝗡 𝗚 𝗔 𝗡 𝗧 𝗔 𝗥'}}})
    }

export default handler
