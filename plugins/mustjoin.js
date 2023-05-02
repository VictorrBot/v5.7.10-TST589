const { Client } = require('whatsapp-web.js');

// Inisialisasi WhatsApp client
const client = new Client();

client.on('message', async message => {
    // Jika pesan yang diterima tidak dari grup yang ditentukan, maka tidak perlu dilakukan apa-apa
    if (message.chat.id !== '120363046165499857@g.us') {
        return;
    }

    // Jika pengguna belum bergabung dengan grup, kirim pesan permintaan bergabung
    const isUserInGroup = await message.getContact().isInGroup(message.chat);
    if (!isUserInGroup) {
        const requestToJoinMessage = '*Anda Harus Bergabung Kegrup https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa Agar Bisa Menggunakan Bot Ini*';

        // Kirim pesan permintaan bergabung ke pengguna
        await client.sendMessage(message.from, requestToJoinMessage);
        return;
    }

    // Lanjutkan eksekusi perintah bot
    // ...
});

client.initialize();
