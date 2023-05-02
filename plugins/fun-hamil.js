// Function to generate mention tag from a given ID
const generateMention = (id) => `@${id.split('@')[0]}`;

// Main function to handle the command
function handler(m, { groupMetadata }) {
  // Get list of participant IDs in the group
  const participantIds = groupMetadata.participants.map((participant) => participant.id);

  // Select two random participant IDs
  let participantId1, participantId2;
  do {
    participantId1 = participantIds[Math.floor(Math.random() * participantIds.length)];
    participantId2 = participantIds[Math.floor(Math.random() * participantIds.length)];
  } while (participantId1 === participantId2);

  // Generate mention tags from the two participant IDs
  const mention1 = generateMention(participantId1);
  const mention2 = generateMention(participantId2);

  // Compose the message with some humor and creativity
  const messages = [
    `Woohoo, ${mention1} berhasil ngehamilin ${mention2}! 👶🏻🎉`,
    `🚨 Breaking News 🚨 ${mention1} lagi hamil, dan ayahnya ternyata ${mention2}! 😱👀`,
    `Cieee, ${mention1} dan ${mention2} udah mulai planning untuk punya baby nih, siap-siap jadi om/tante ya! 🍼👶🏻`,
    `Eh ada kabar gembira nih, ${mention1} lagi hamil! Tapi ayahnya ternyata ${mention2}, gimana nih jadinya? 🤔😂`,
  ];
  const selectedMessage = messages[Math.floor(Math.random() * messages.length)];

  // Send the message with the generated mention tags
  m.reply(selectedMessage, null, {
    mentions: [participantId1, participantId2],
  });
}

// Command metadata
handler.help = ['hamil'];
handler.tags = ['fun'];
handler.command = ['hamil'];
handler.register = true;
handler.group = true;

// Export the function
export default handler;