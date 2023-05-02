let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*Fitur Untuk Melakukan Spam*\n\n*_Contoh: .spamwa 6282253479547|Tes|25_*'
if (!pesan) throw '*Fitur Untuk Melakukan Spam*\n\n*_Contoh: .spamwa 6282253479547|Tes|25_*'
if (jumlah && isNaN(jumlah)) throw '*Fitur Untuk Melakukan Spam*\n\n*_Contoh: .spamwa 6282253479547|Tes|25_*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*_Maksimal 50 Pesan Spam_*'
await m.reply(`*_Sukses Spam, Spam Selesai Dalam ${fixedJumlah}_*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools','premium']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = true
handler.register = true
handler.private = true
handler.limit = true
export default handler
