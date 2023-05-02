let handler = async m => m.reply(`
${pickRandom(['Tolol', 'Bego bat ni anak, pdhl di atas sudah ad cara daftarnya msih aja dipilih', 'Tolol bat anjing pdhl diatas dh ada cara daftarnya, baca makanya kentodd', 'Krisis baca nih bocah', '*HOW TO REGISTER* Ngerti gak kontol? ', 'Bego anjing', 'Baca tolol diatas itu udh ada cara daftarnya, ngapain masih mencet ini', 'Serius lu sebodoh itu?', 'Bego kontol', 'Ini toh penyebab iq rata² Indonesia rendah','gak ngerti cara daftar pulang aja kontol','dibilangin gak ush dipilih/gak ush dipencet msih aja dipilih/dipencet, bodok betul'])} 
`.trim()) // Tambah sendiri kalo mau


handler.help = ['infoupdate']
handler.tags = ['hhh','gffg']
handler.command = ['w1','w2']
handler.register = false
handler.premiun = false
export default handler


function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}