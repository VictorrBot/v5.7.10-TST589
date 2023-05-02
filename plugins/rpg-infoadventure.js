let handler = async m => m.reply(`
*SUMBER DAYA ALAM ❓*

*Emas adalah logam yang paling langka di dunia. Sebagian besar emas terdapat di Afrika Selatan, Australia, Amerika Serikat, dan Rusia.*

*Kayu merupakan sumber daya alam yang paling banyak digunakan di dunia. Sebagian besar kayu digunakan untuk pembuatan bangunan, furniture, dan kertas.*

*Air merupakan sumber daya alam yang paling banyak digunakan di dunia. Hampir semua aktivitas manusia memerlukan air, termasuk untuk memasak, mandi, mencuci, dan irigasi.*

*Minyak bumi adalah sumber daya alam yang paling banyak digunakan untuk energi. Hampir 40% kebutuhan energi dunia dipenuhi oleh minyak bumi.*

*Hutan hujan tropis adalah habitat bagi lebih dari separuh spesies tumbuhan dan hewan di dunia. Namun, sekitar 17% hutan hujan tropis telah hilang karena deforestasi.*

*Gunung berapi menghasilkan berbagai sumber daya alam, seperti batu bara, logam, dan batu permata. Namun, letusan gunung berapi juga dapat menyebabkan kerusakan dan bahaya bagi manusia.*

*Sumber daya alam seperti mineral, kayu, dan minyak bumi tidak dapat diperbaharui dalam waktu singkat, sehingga perlu dilindungi dan dimanfaatkan secara berkelanjutan.*

*Sumber daya alam juga dapat menjadi sumber konflik dan perang antarnegara, terutama ketika sumber daya tersebut terkonsentrasi di wilayah yang berdekatan dengan negara lain.*

*Di antara sumber daya alam yang kurang dikenal adalah tanah liat. Tanah liat digunakan untuk membuat keramik, genteng, pipa, dan berbagai produk lainnya.*

*Es merupakan sumber daya alam yang penting di daerah kutub dan gunung es. Es dapat digunakan sebagai sumber air dan energi, serta sebagai bahan baku untuk industri makanan dan minuman.*

`.trim()) // Tambah sendiri kalo mau


handler.help = ['infoadventure']
handler.tags = ['rpg']
handler.command = /^infoadventure$/i
handler.register = true
handler.premium = false
export default handler