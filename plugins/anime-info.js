import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `Example: ${usedPrefix + command} 'Himegoto'`;

  try {
    const res = await fetch(`https://api.lolhuman.xyz/api/anime?apikey=Shirooo&query=${text}`);
    const json = await res.json();
    const result = json.result;

    let ini_txt = `Title: *${result.title.romaji}*\n`;
    ini_txt += `English: *${result.title.english}*\n`;
    ini_txt += `Native: *${result.title.native}*\n\n`;
    ini_txt += `Format: ${result.format}\n`;
    ini_txt += `Episodes: ${result.episodes}\n`;
    ini_txt += `Duration: ${result.duration} mins.\n`;
    ini_txt += `Status: ${result.status}\n`;
    ini_txt += `Season: ${result.season}\n`;
    ini_txt += `Season Year: ${result.seasonYear}\n`;
    ini_txt += `Source: ${result.source}\n`;
    ini_txt += `Start Date: ${result.startDate.day} - ${result.startDate.month} - ${result.startDate.year}\n`;
    ini_txt += `End Date: ${result.endDate.day} - ${result.endDate.month} - ${result.endDate.year}\n`;
    ini_txt += `Genre: ${result.genres.join(", ")}\n`;
    ini_txt += `Synonyms: ${result.synonyms.join(", ")}\n`;
    ini_txt += `*Score: ${result.averageScore}%*\n\n`;
    ini_txt += `*Characters:*\n`;

    const characters = result.characters.nodes;
    for (let character of characters) {
      ini_txt += `- ${character.name.full} (${character.name.native})\n`;
    }

    ini_txt += `\n*Description:*\n${result.description}`;
    conn.sendFile(m.chat, result.coverImage.large, 'anianime.jpg', ini_txt, m);
  } catch (e) {
    console.log(e);
    m.reply(`Tidak Ditemukan, Pastikan Keyword Benar.`);
  }
};

handler.help = ['anime <judul>'];
handler.tags = ['anime'];
handler.command = /^((cari|search)?anime(cari|search)?)$/i;
handler.register = true;
handler.limit = 1

export default handler
