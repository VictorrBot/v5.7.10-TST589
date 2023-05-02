const responses = [
  'Mungkin suatu hari',
  'Tidak juga',
  'Tidak keduanya',
  'Kurasa tidak',
  'Ya',
  'Coba tanya lagi',
  'Malas menjawab',
  'Tidak tau',
  'Tidak ada',
  'Jangan mengharapkannya',
  'Tentu saja',
  'Sudah pasti',
  'Kamu nanya',
  'Kamu bertanya-tanya',
];

const emojis = [
  '🔮', '🤔', '👀', '🧐', '🕵️‍♂️', '🔍', '💭'
];

const handler = async (m, { text, command, usedPrefix }) => {
  if (!text) {
    throw `Penggunaan: ${usedPrefix}${command} Apakah saya alien?`;
  }

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  m.reply(`${randomEmoji} ${randomResponse}.`);
};

handler.help = ['kerang', 'kerangajaib'].map((v) => `${v} <teks>`);
handler.tags = ['kerang', 'fun'];
handler.command = /^(kulit)?kerang(ajaib)?$/i;
handler.register = true;

export default handler;
