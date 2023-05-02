let handler = async m => m.reply(`TOP-UP PRICE LIST

╭━━━━━━━━━━━━━⎔
┃
┠• *Gems*
┃ 70 Gems: IDR 9000
┃ 100 Gems: IDR 12000
┃ 350 Gems: IDR 30000
┃ 720 Gems: IDR 50000
┃ 1230 Gems: IDR 75000
┃
┠• *Limit*
┃ 70 Limit:  IDR 6000
┃ 100 Limit:  IDR 9000
┃ 350 Limit:  IDR 24000
┃ 720 Limit:  IDR 30000      
┃ 1230 Limit:  IDR 45000
┃
┠━━━━━━━━━━━━━⎔
┃ *PAYMENT:*
┃ *Dana, OVO, Gopay, Pulsa,*
┃ *& All Type Bank*
╰━━━━━━━━━━━━━⎔

*Berani Menawar Berani Berdebat!*

Ingin Top-Up? Hub.
*wa.me/6281249122429*


*_#TrustedButNotFamous_*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['topup']
handler.tags = ['main','rpg']
handler.command = /^topup$/i
handler.register = true
handler.premium = false
export default handler