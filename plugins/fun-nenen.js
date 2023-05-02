import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  if (command == 'nenen2') {
    if (!text) throw `*_Contoh: #nenen2 Ana_*`;
    const target = m.mentionedJid[0];
    const response = await fetch(`https://api.kanye.rest?${text}`);
    const quote = await response.json();
    const awikwok = `Oh ${text}, kamu tahu apa yang membuatku rela membayar harga apapun? NENEN! Betapa indahnya ketika ${text} membuka bajunya dan menampakkan dua bukit indahnya di depanku. Aku tidak bisa menahan keinginan untuk mencium dan mengisapnya. Seperti kata-kata bijak dari ${quote.quote}, "Saya pikir saya benar-benar memiliki kekuatan untuk memikat siapa saja dengan kemampuan saya untuk menghisap puting." Biarkan aku memuaskan hasratku, ${text}.`;
    m.reply(awikwok, null, target ? { mentions: [target] } : {});
  }
};

handler.command = handler.help = ['nenen2'];
handler.tags = ['fun', 'quotes'];
handler.register = true;
handler.limit = true;

export default handler;
