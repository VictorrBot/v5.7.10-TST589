let handler = async m => m.reply(`
*MERAMPOK ❓*

*Kebanyakan kasus perampokan terjadi pada hari Jumat dan Sabtu malam.*

*Kebanyakan perampok menggunakan senjata tajam atau senjata api, tetapi beberapa menggunakan alat-alat yang tidak biasa seperti gunting atau pensil.*

*Perampokan bank seringkali terjadi di siang hari, karena dianggap sebagai waktu yang paling aman untuk melakukan perampokan.*

*Beberapa perampok memilih untuk menggunakan pakaian yang sama seperti orang yang bekerja di tempat yang mereka tuju untuk menghindari dicurigai.*

*Ada kasus perampokan yang dilakukan dengan cara yang sangat cerdas, seperti perampok bank yang menggunakan kendaraan udara untuk melarikan diri dari tempat kejadian.*

*Beberapa perampok tidak mengambil uang, tetapi mencuri barang-barang berharga seperti perhiasan atau karya seni.*

*Beberapa perampok memilih untuk memakai topeng atau penutup wajah lainnya untuk menyembunyikan identitas mereka.*

*Kebanyakan perampok mengambil risiko besar untuk sedikit imbalan, karena jarang ada perampokan yang berhasil dengan hasil yang besar.*

*Beberapa perampok mengalami penyesalan dan akhirnya menyerahkan diri kepada polisi.*

*Perampokan adalah tindakan kriminal yang sangat berbahaya dan tidak dianjurkan. Lebih baik mencari cara-cara legal untuk memperoleh uang dan mempertahankan kehidupan yang baik.*

`.trim()) // Tambah sendiri kalo mau


handler.help = ['infomerampok']
handler.tags = ['rpg']
handler.command = /^infomerampok$/i
handler.register = true
handler.premium = false
export default handler