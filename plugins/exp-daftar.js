import { createHash } from 'crypto'
let handler = async function (m, { text }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) {
    throw `Anda Sudah Terdaftar Sebelumnya`
  }
  if (!text) {
    throw `Format Salah!\n\nSilakan gunakan format: #daftar namamu.umurmu (Contoh: #daftar John.25)`
  }
  let [name, age] = text.split('.')
  if (!name || !age || isNaN(age)) {
    throw `Format Salah!\n\nSilakan gunakan format: #daftar namamu.umurmu (Contoh: #daftar John.25)`
  }
  age = parseInt(age)
  if (age < 12) {
    throw `Maaf!\n\nKamu terlalu muda untuk mendaftar. Minimal umur yang diizinkan adalah 12 tahun.`
  }
  if (age > 19) {
    throw `Maaf!\n\nKamu terlalu tua untuk mendaftar. Maksimal umur yang diizinkan adalah 19 tahun.`
  }
  user.name = name.trim()
  user.age = age
  user.regTime = +new Date()
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let message = `REGISTRASI BERHASIL\n\nNama: ${name}\nUmur: ${age} tahun\nSN: ${sn}\n\n*Pesan Penting!*\n\nSilakan bergabung dengan grup resmi kami sebagai persyaratan untuk dapat menggunakan bot ini.`
  await conn.sendMessage(m.chat, message, 'conversation', { quoted: m })
}

handler.help = ['daftar <nama>.<umur>']
handler.tags = ['registrasi']

handler.command = /^daftar$/i

export default handler