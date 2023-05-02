let handler = async (m) => {
  let jawaban = ['Ya, pasti', 'Tentu saja', 'Mungkin', 'Kayaknya iya deh', 'Gak tau', 'Coba tanya lagi', 'Sulit untuk menjawab', 'Sangat mungkin', 'Sangat tidak mungkin', 'Sudah dapat jawabannya, jangan ditanya lagi'];
  let randomJawaban = jawaban[Math.floor(Math.random() * jawaban.length)];
  let teks = m.text.replace(/apakah /i, '');

  if (teks.trim() === '') {
    throw 'Kamu harus menambahkan pertanyaan setelah *apakah*';
  }

  m.reply(`
*Pertanyaan:* ${teks}
*Jawaban:* ${randomJawaban}
  `.trim(), null, m.mentionedJid ? {
    mentions: m.mentionedJid
  } : {});
}

handler.help = ['apakah <teks>?'];
handler.tags = ['kerang', 'fun'];
handler.customPrefix = /(\?$)/;
handler.command = /^apakah$/i;
handler.register = true;
export default handler;
