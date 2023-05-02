import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Harap Masukan Kanjinya', m)
  let res = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(text)}`)
  let json = await res.json()
  let { kanji, grade, stroke_count, meanings, kun_readings, on_readings, name_readings, jlpt, unicode, heisig_en } = json
  let pesan = `
  *「 KANJI INFORMATION 」*
  
  Kanji: ${kanji}
  Arti: ${meanings}
  Kun-Reading: ${kun_readings}
  On-Reading: ${on_readings}
  Name Reading: ${name_readings}
  Grade: ${grade}
  Stroke: ${stroke_count}
  JLPT: ${jlpt}
  Unicode: ${unicode}
  Heisig-en: ${heisig_en}
  `.trim()
  conn.reply(m.chat, pesan, m)
}
handler.help = ['kanji'].map(v => v + ' <kanji>')
handler.tags = ['internet']
handler.command =/^(kanji)$/i
handler.limit = true
handler.register = true
export default handler
