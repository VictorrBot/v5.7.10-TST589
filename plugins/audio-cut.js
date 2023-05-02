import { promises as fs } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    let q = m.quoted || m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime.includes('audio')) {
      throw new Error(`Balas Audio/VN dengan perintah *${usedPrefix + command}*.\n\nFormat:\n*${usedPrefix + command} 00:00:00 00:00:30*`);
    }
    let audio = await q.download();
    if (!audio) throw new Error('*Tidak Dapat Mengunduh Audio*');
    if (!args[0] || !args[1]) {
      throw new Error(`Gunakan dengan cara:\n${usedPrefix + command} WaktuAwal WaktuAkhir\n\n*Example: ${usedPrefix + command} 00:00:30 00:00:30*`);
    }
    let ran = new Date().getTime() + '.mp3';
    let media = join(__dirname, '../tmp', ran);
    let filename = media + '.mp3';
    await fs.writeFile(media, audio);
    exec(`ffmpeg -ss ${args[0]} -i ${media} -t ${args[1]} -c copy ${filename}`, async (err) => {
      await fs.unlink(media);
      if (err) {
        throw new Error('*ERROR*: Failed to cut audio'); // menambahkan pesan kesalahan yang jelas
      }
      let buff = await fs.readFile(filename);
      await conn.sendFile(m.chat, buff, filename, null, m, true, { quoted: m, mimetype: 'audio/mp4' });
      await fs.unlink(filename);
    });
  } catch (e) {
    console.error(e);
    throw new Error(`*ERROR*: ${e.message}`);
  }
};

handler.help = ['cut <text>'];
handler.tags = ['audio'];
handler.command = /^(potong(audio|mp3)|cut(audio|mp3))$/i;
handler.register = true;
handler.limit = 2;

export default handler;
