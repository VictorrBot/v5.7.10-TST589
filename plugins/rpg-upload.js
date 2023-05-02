import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, participants, usedPrefix, owner }) => { 

    try { 

    	let who
    if (!m.isGroup) {
        let member = [m.sender, conn.user.jid]
        who = member[Math.floor(Math.random() * member.length)]
    } else {
        let member = participants.map(u => u.id)
        who = member[Math.floor(Math.random() * member.length)]
    }
        let __timers = (new Date - global.db.data.users[m.sender].lastup)
        let nomors = m.sender
        let _timers = (18000000 - __timers) 
        let user = global.db.data.users[m.sender]
        let users = global.db.data.users
        let buf = user.showtime
        let buf2 = user.subscriber
        let buf1 = user.skillyt
        let buff = (buf < 3999 ? '0' : '' || buf > 4000 ? '1' : '') 
        let buff1 = (buf1 == 0 ? '1' : '' || buf1 == 1 ? '2' : '' || buf1 == 2 ? '3' : '' || buf1 == 3 ? '4' : '' || buf1 == 5 ? '6' : '' || buf1 == 7 ? '8' : '' || buf1 == 9 ? '10' : '' || buf1 == 10 ? '11' : '' || buf1 == 11 ? '12' : '' || buf1 == 12 ? '13' : '' || buf1 == 13 ? '14' : '' || buf1 == 14 ? '15' : '' || buf1 == 15 ? '16' : '' || buf1 == 16 ? '17' : '' || buf1 == 17 ? '18' : '' || buf1 == 18 ? '19' : '' || buf1 == 19 ? '20' : '' || buf1 == 20 ? '21' : '' || buf1 == 21 ? '22' : '' || buf1 == 22 ? '23' : '' || buf1 == 23 ? '24' : '' || buf1 == 24 ? '25' : '' || buf1 == 25 ? '26' : '' || buf1 == 26 ? '27' : '' || buf1 == 27 ? '28' : '' || buf1 == 28 ? '29' : '' || buf1 == 29 ? '30' : '' || buf1 == 30 ? '31' : '' || buf1 == 31 ? '32' : '' || buf1 == 32 ? '33' : '' || buf1 == 33 ? '34' : '' || buf1 == 34 ? '35' : '' || buf1 == 35 ? '36' : '' || buf1 == 36 ? '37' : '' || buf1 == 37 ? '38' : '' || buf1 == 38 ? '39' : '' || buf1 == 39 ? '40' : '' || buf1 == 40 ? '41' : '' || buf1 == 41 ? '42' : '' || buf1 == 42 ? '43' : '' || buf1 == 43 ? '44' : '' || buf1 == 44 ? '45' : '' || buf1 == 45 ? '46' : '' || buf1 == 46 ? '47' : '' || buf1 == 47 ? '48' : '' || buf1 == 48 ? '49' : '' || buf1 == 49 ? '50' : '' || buf1 == 50 ? '51' : '' || buf1 == 51 ? '52' : '' || buf1 == 52 ? '53' : '' || buf1 == 53 ? '54' : '' || buf1 == 54 ? '56' : '' || buf1 == 55 ? '57' : '' || buf1 == 56 ? '58' : '' || buf1 == 57 ? '59' : '' || buf1 == 58 ? '60' : '' || buf1 == 59 ? '60' : '' || buf1 == 60 ? '61' : '' || buf1 > 61 ? '62' : '' || buf1 > 70 ? '71' : '' || buf1 > 80 ? '81' : '' || buf1 > 90 ? '91' : '' || buf1 == 100 ? '111' : '')         
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].stamina > 100) {
            if (new Date - global.db.data.users[m.sender].lastup > 18000000) {
            let _stamina = `${Math.floor(Math.random() * 300)}`.trim()
            let stamina = (_stamina * 1)
            let likee = `${Math.floor(Math.random() * 15 * buff1 * buf2 / 2 / 2)}`.trim() 
            let dislikee = `${Math.floor(Math.random() * 15 * buff1 * buf2 / 2 / 2)}`.trim() 
            let viewerr = `${Math.floor(Math.random() * 30 * buff1 * buf2 / 2)}`.trim() 
            let subscriberr = `${Math.floor(Math.random() * 10 * buff1 / 2)}`.trim() 
            let showtimee = `${Math.floor(Math.random() * 5 * buff1)}`.trim() 
            let moneyy = `${Math.floor(Math.random() * 20 * buff * buff1 * buf2)}`.trim() 
            let videoo = `${1}`.trim() 
            let str = `
*UPLOADING VIDEOS*
            
Kamu Menggunggah.

Stamina -${stamina * 1} ⚡

Details
 - Judul: *-*
 - Viewer: ${viewerr}
 - Like: *${likee}*
 - Dislike: *${dislikee}*
 - Monet: *${moneyy}*
 - Subscriber: *+${subscriberr}*
 - Showtime: *+${showtimee}*
 - Video: *±${videoo}*

Minimal 4000 Showtime Untuk Monet.
`.trim()          

            setTimeout(() => {

                  conn.sendMessage(m.chat, { text: str }, { quoted: m })

                  }, 30000)


             setTimeout(() => {

                   m.reply('*Membuat Dan Mengunggah Konten 📽️...*')

                  }, 1000)

					
            global.db.data.users[m.sender].stamina -= stamina * 1
            global.db.data.users[m.sender].viewer += viewerr * 1
            global.db.data.users[m.sender].like += likee * 1
            global.db.data.users[m.sender].dislike += dislikee * 1
            global.db.data.users[m.sender].money += moneyy * 1
            global.db.data.users[m.sender].monet += moneyy * 1
            global.db.data.users[m.sender].subscriber += subscriberr * 1
            global.db.data.users[m.sender].showtime += showtimee * 1
            global.db.data.users[m.sender].video += videoo * 1
            global.db.data.users[m.sender].lastup = new Date * 1
            } else conn.reply(m.chat, `Heh, Nanti Kalau Sakit Karena Keseringan Ngonten Gimana? Aku Tuh Khawatir Sama Kamu. Tunggu *${timers}* Lagi`, m)
        } else conn.reply(m.chat, 'Mau Ngonten Tuh Harus Ada Stamina, Silahkan Cari Cara Menambah Stamina Di\n • *' + usedPrefix + 'stamina', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}
handler.help = ['konten']

handler.tags = ['rpg']

handler.command = /^(konten)$/i

handler.limit = 1

handler.group = true

handler.fail = null



export default handler



function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}



function clockString(ms) {

  let h = Math.floor(ms / 3600000)

  let m = Math.floor(ms / 60000) % 60

  let s = Math.floor(ms / 1000) % 60

  console.log({ms,h,m,s})

  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

} 