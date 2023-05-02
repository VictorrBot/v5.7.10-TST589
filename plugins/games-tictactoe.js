import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('*Partner Ditemukan.*')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
* TIC-TAC-TOE GAMES 🎮*

Room ID: *${room.id}*
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
Menunggu *@${room.game.currentTurn.split('@')[0]}*
Ketik *nyerah* Untuk Nyerah
`.trim()
        if (room.x !== room.o) await conn.sendButton(room.x, str, author, ['𝗦𝗨𝗥𝗥𝗘𝗡𝗗', 'nyerah'], m, {
            mentions: conn.parseMention(str)
        })
        await conn.sendButton(room.o, str, author, ['𝗦𝗨𝗥𝗥𝗘𝗡𝗗', 'nyerah'], m, {
            mentions: conn.parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        m.reply('Menunggu Partner' + (text ? ` Mengetik Command Dibawah Ini
*${usedPrefix}${command} ${text}*` : ''))
        conn.game[room.id] = room
    }
}

handler.help = ['tictactoe', 'ttt'].map(v => v + ' [custom room name]')
handler.tags = ['game']
handler.command = /^(tictactoe|t{3})$/
handler.register = true
handler.limit = 1
export default handler