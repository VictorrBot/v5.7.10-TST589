let handler = async (m, { command, text }) => m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['Ya Mungkin','Iya','Iya','Iya Mungkin','Mungkin Saja','Mungkin','Kurang Tau','YTTA','Gak Tau','Tidak Mungkin','Tidak Akan','Mustahil','Mimpi?','Ngayal','G','Y','O'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.command = /^apakah$/i
handler.register = true
export default handler
