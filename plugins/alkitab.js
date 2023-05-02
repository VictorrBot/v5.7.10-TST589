import axios from 'axios';
import cheerio from 'cheerio';

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*Example: ${usedPrefix}${command} kejadian*`;

  const options = {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
    },
  };

  const url = `https://alkitab.me/search?q=${encodeURIComponent(text)}`;
  const response = await axios.get(url, options);
  const $ = cheerio.load(response.data);

  const result = [];
  $('div.vw').each(function (a, b) {
    const teks = $(b).find('p').text().trim();
    const link = $(b).find('a').attr('href');
    const title = $(b).find('a').text().trim();
    result.push({ teks, link, title });
  });

  const caption = result
    .map((v) => `${v.title}\n${v.teks}`)
    .join('\n────────\n');

  m.reply(caption);
};

handler.help = ['alkitab <search query>'];
handler.tags = ['internet'];
handler.command = /^alkitab/i;
handler.register = true;
handler.limit = 1;

export default handler;
