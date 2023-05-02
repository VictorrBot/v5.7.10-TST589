import fetch from 'node-fetch';

const handler = async (m, { conn, command }) => {
  try {
    const res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkey}`);

    if (!res.ok) {
      throw new Error('An error occurred while fetching the data');
    }

    const json = await res.json();

    if (!json.status) {
      throw new Error('The API did not return a valid response');
    }

    conn.sendFile(m.chat, json.result.female, 'cewek.jpg', `*Cewek:* ${json.result.female}`, m);
    conn.sendFile(m.chat, json.result.male, 'cowok.jpg', `*Cowok:* ${json.result.male}`, m);
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan Anda', m);
  }
};

handler.help = ['ppcouple'];
handler.tags = ['internet'];
handler.command = /^(ppcp|ppcouple)$/i;

export default handler;
