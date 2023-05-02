const getMention = (id) => `@${id.split('@')[0]}`;

const handler = (m, { groupMetadata }) => {
  const participants = groupMetadata.participants;
  const participantIds = participants.map((participant) => participant.id);
  
  let suitorId = participantIds.getRandom();
  let crushId;
  
  do {
    crushId = participantIds.getRandom();
  } while (crushId === suitorId);
  
  const suitorMention = getMention(suitorId);
  const crushMention = getMention(crushId);
  
  const messages = [
    `Pssst... ${suitorMention} diam-diam naksir ${crushMention} nih! 😍`,
    `Wah, kabar burung berkicau kalau ${suitorMention} suka sama ${crushMention} nih. 😘`,
    `Ssstt... jangan bilang-bilang ya, katanya ${suitorMention} naksir sama ${crushMention}. 🥰`,
    `Mendengar kabar yang beredar, sepertinya ${suitorMention} sedang mengidolakan ${crushMention}. ❤️`,
    `Jangan lewatkan momen ini! ${suitorMention} sedang mengumbar perasaan kepada ${crushMention}. 🌹`
  ];
  
  const message = messages[Math.floor(Math.random() * messages.length)];
  
  m.reply(message, null, {
    mentions: [suitorId, crushId]
  });
};

handler.help = ['naksir'];
handler.tags = ['fun'];
handler.command = ['naksir'];
handler.register = true;
handler.group = true;

export default handler;
