let handler = async m => m.reply(`
PREMIUM PRICE LIST & RENT

╭━━━━━━━━━━━━━⎔
┃
┠• *SEWA*
┃ 3 Hari: 4K/Grup
┃ 7 Hari: 7K/Grup
┃ 15 Hari: 13K/Grup
┃ 30 Hari: 23K/Grup
┃ 90 Hari: 43K/Grup
┃
┠• *PREMIUM*
┃ 3 Hari:  5K/User
┃ 7 Hari:  9K/User
┃ 15 Hari:  14K/User
┃ 30 Hari:  24K/User                             
┃ 90 Hari:  45K/User
┃
┠• *SEWA + PREMIUM*
┃ 3 Hari:  7K/User
┃ 7 Hari:  15K/User
┃ 15 Hari:  25K/User
┃ 30 Hari:  40K/User                             
┃ 90 Hari:  70K/User
┃
┠• *Unlock NSFW*
┃ 3 Hari:  3K/Grup
┃ 7 Hari:  5K/Grup
┃ 15 Hari:  8K/Grup
┃ 30 Hari:  13K/Grup                             
┃ 90 Hari:  23K/Grup
┃
┃
┠━━━━━━━━━━━━━⎔
┃ *PAYMENT:*
┃ *Dana, OVO, Gopay, Pulsa,*
┃ *& All Type Bank*
╰━━━━━━━━━━━━━⎔

*Kelebihan Sewa?*
 • Tambahkan Bot Ke Grupmu

*Kelebihan Premium?*
 • Prioritas
 • Unlimited Limit
 • Unlock Semua NSFW
 • Dapat Menggunakan Fitur:
    - .stickerwm
    - .jadianime
    - .videoxxxlesbi
    - .setcmd
    - .filebokep
    - .stickersearch
    - .pack1
    - .hentai
    - .kicknum
    - .listanum
   Dan Lebih Banyak Lagi.
   
*Kelebihan Unlock NSFW?*
 • Membuka Semua NSFW Digrupmu

Diskon 20% Untuk Pembelian Pertama

Ingin Sewa Bot / Premium? Hub.
*wa.me/6281249122429*


*_#TrustedButNotFamous_*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^sewa$/i
handler.register = true
handler.premiun = false
export default handler