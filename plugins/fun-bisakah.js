let handler = async (m, { conn, command, text }) => {
  let answer = pickRandom([
    'Iya, tentu saja!',
    'Bisa banget!',
    'Pasti bisa!',
    'Tentu saja bisa!',
    'Tentu bisa!',
    'Sudah pasti!',
    'Sudah pasti bisa!',
    'Tidak, maaf.',
    'Tidak bisa.',
    'Tentu tidak.',
    'Maaf, tentu tidak bisa.',
    'Sudah pasti tidak.'
  ]);

  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${answer}
`.trim(), m);
}

handler.help = ['bisakah <pertanyaan>'];
handler.tags = ['kerang', 'fun'];
handler.command = /^bisakah/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;
handler.register = true;
handler.admin = false;
handler.botAdmin = false;

handler.fail = null;

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
