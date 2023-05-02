let handler = async m => m.reply(`
*PERISAI ❓*

*Perisai sudah digunakan sejak zaman prasejarah sebagai perlindungan terhadap serangan musuh.*

*Ada banyak jenis perisai yang berbeda-beda dari berbagai negara dan zaman. Beberapa jenis perisai yang terkenal antara lain perisai bulan sabit, perisai bulat, perisai oval, perisai segitiga, dan perisai kecil.*

*Perisai biasanya terbuat dari bahan-bahan seperti kayu, kulit, logam, atau bahan sintetis modern seperti fiberglass.*

*Selain digunakan sebagai perlindungan terhadap serangan musuh, perisai juga bisa digunakan sebagai senjata dengan cara menyerang musuh menggunakan bagian tajam di ujung perisai.*

*Perisai juga sering dihias dengan berbagai motif dan warna yang indah untuk menunjukkan status sosial atau afiliasi suatu kelompok.*

*Di beberapa negara, perisai dipandang sebagai simbol nasional dan terkadang digunakan pada lambang negara atau bendera.*

*Di dunia game, perisai sering digunakan sebagai salah satu senjata untuk melindungi karakter pemain dari serangan musuh.*

*Perisai juga digunakan dalam olahraga seperti pertandingan reenactment atau medieval combat, di mana para peserta menggunakan perisai dan senjata lainnya untuk merekonstruksi pertempuran zaman dahulu.*

*Saat ini, perisai masih digunakan oleh beberapa anggota militer dan polisi dalam beberapa situasi.*

*Meskipun perisai sering dikaitkan dengan kesatria atau prajurit pada zaman dulu, penggunaan perisai terus berkembang dan diadopsi oleh berbagai kalangan, termasuk petugas keamanan dan pasukan khusus modern.*

`.trim()) // Tambah sendiri kalo mau


handler.help = ['infoperisai']
handler.tags = ['rpg']
handler.command = /^infoperisai$/i
handler.register = true
handler.premium = false
export default handler