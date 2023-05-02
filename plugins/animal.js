import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  const animalOptions = ['dog', 'cat', 'panda', 'fox', 'red_panda', 'koala', 'bird', 'raccoon', 'kangaroo'];
  const exampleText = `
┌「 *PILIHAN* 」
${animalOptions.map(v => '├ ' + v).join('\n')}
└────
Contoh:
${usedPrefix}${command} panda
`.trim();
  
  if (!text) throw exampleText;
  if (!animalOptions.includes(text)) throw exampleText;
  
  const res = await fetch(
    API('https://some-random-api.ml', `/animal/${text}`)
  );
  
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  
  const json = await res.json();
  
  if (!json.image) throw json;
  
  conn.sendFile(m.chat, json.image, '', `${json.fact}\n\n© Kitsuneee`, m);
};

handler.help = ['animal'].map((v) => `${v} <opsi>`);
handler.tags = ['internet'];
handler.command = /^(animal|animalfact)$/i;
handler.register = true;
handler.limit = 1;

export default handler;
