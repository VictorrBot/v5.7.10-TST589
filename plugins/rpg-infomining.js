let handler = async m => m.reply(`
*PENAMBANGAN ❓*

*Penambangan adalah industri yang sangat tua dan telah ada sejak zaman prasejarah. Orang zaman dahulu menambang untuk mendapatkan batu, logam, dan mineral lainnya untuk keperluan sehari-hari.*

*Tambang terbesar di dunia adalah Tambang Bingham Canyon di Utah, AS, dengan kedalaman 1,2 km dan lebar 4 km. Tambang ini menghasilkan tembaga, emas, dan perak.*

*Meskipun penambangan memiliki manfaat ekonomi yang besar, namun penambangan juga memiliki dampak lingkungan yang signifikan. Dampak negatif meliputi kerusakan tanah, air, dan udara, serta gangguan terhadap kehidupan liar dan habitatnya.*

*Penambangan juga dapat memicu konflik sosial dan politik. Seringkali terjadi perselisihan antara pemerintah, perusahaan tambang, dan masyarakat setempat mengenai hak atas sumber daya alam dan dampak lingkungan yang ditimbulkan.*

*Teknologi telah membantu memperbaiki keamanan dan efisiensi dalam penambangan. Contohnya adalah penggunaan drone untuk survei, penggunaan sistem GPS untuk pemetaan, dan penggunaan alat berat otomatis untuk operasi tambang yang lebih aman.*

*Ada berbagai metode penambangan yang digunakan di seluruh dunia, termasuk tambang terbuka, tambang bawah tanah, dan penambangan pasir. Setiap metode ini memiliki kelebihan dan kekurangan masing-masing.*

*Penambangan bukan hanya untuk bahan tambang, tetapi juga dapat digunakan untuk bahan bakar fosil seperti minyak bumi dan gas alam. Meskipun demikian, pengeboran minyak dan gas sering kali memiliki dampak lingkungan yang serupa dengan penambangan bahan tambang.*

*Penambangan di luar angkasa menjadi topik yang semakin populer dalam beberapa tahun terakhir. Penambangan di luar angkasa dapat mencakup sumber daya seperti mineral langka, logam, dan air. Namun, teknologi dan infrastruktur yang diperlukan untuk penambangan di luar angkasa masih dalam tahap awal pengembangan.*

`.trim()) // Tambah sendiri kalo mau


handler.help = ['infomining']
handler.tags = ['rpg']
handler.command = /^infomining$/i
handler.register = true
handler.premium = false
export default handler