import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    await m.reply(`*Dasar Pedo*`);
    const response = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json');
    const data = await response.json();
    const randomData = data[Math.floor(Math.random() * data.length)];
    await conn.sendFile(m.chat, randomData.url, '', '', m);
  } catch (error) {
    console.error(error);
    throw 'Terjadi kesalahan saat memuat data';
  }
};

handler.help = ['asupan-bocil'];
handler.tags = ['nsfw'];
handler.limit = 1;
handler.register = true;
handler.command = /^(asupan-bocil)$/i;

export default handler;
