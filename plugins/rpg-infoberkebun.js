let handler = async m => m.reply(`
*BERKEBUN ❓*

*Berkebun dapat membantu mengurangi stres dan meningkatkan kesehatan mental. Menurut beberapa penelitian, aktivitas berkebun dapat mengurangi stres dan kecemasan, serta meningkatkan suasana hati dan kesejahteraan mental.*

*Ternyata, kegiatan berkebun bisa membakar kalori. Aktivitas berkebun seperti membersihkan taman, mengangkat pot, dan merawat tanaman bisa membantu membakar kalori hingga 330 kalori dalam satu jam.*

*Berkebun juga dapat membantu meningkatkan kesehatan fisik. Melakukan kegiatan berkebun seperti membersihkan tanah, menanam, dan merawat tanaman dapat membantu meningkatkan kekuatan fisik, fleksibilitas, dan keseimbangan.*

*Berkebun juga dapat membantu mengurangi penggunaan bahan kimia dalam pertanian. Dengan menggunakan metode pertanian organik, yaitu tanaman yang tumbuh dengan alami dan tanpa bahan kimia, maka akan mengurangi penggunaan bahan kimia dalam pertanian.*

*Berkebun dapat membantu menghasilkan makanan organik yang lebih segar dan lebih sehat. Tanaman organik biasanya tumbuh dengan kondisi yang lebih alami dan menghasilkan produk yang lebih segar dan lebih sehat.*

*Berkebun juga bisa menjadi cara untuk menghemat uang. Dengan menanam sayuran dan buah-buahan sendiri, maka kita bisa menghemat biaya belanja ke pasar atau toko bahan makanan.*

*Berkebun juga dapat membantu memperbaiki lingkungan. Tanaman dapat membantu menyerap karbon dioksida dari udara dan membantu menjaga keseimbangan lingkungan.*

*Berkebun dapat menjadi kegiatan yang menyenangkan dan bermanfaat untuk seluruh keluarga. Berkebun bersama keluarga bisa menjadi cara yang baik untuk menghabiskan waktu bersama-sama dan membantu mengajarkan anak-anak tentang pentingnya pertanian dan lingkungan.*

`.trim()) // Tambah sendiri kalo mau


handler.help = ['infoberkebun']
handler.tags = ['rpg']
handler.command = /^infoberkebun$/i
handler.register = true
handler.premium = false
export default handler