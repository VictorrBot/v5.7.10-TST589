const isVirtex = /৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|৭৭৭৭৭৭৭৭|๑๑๑๑๑๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|ผิดุท้่เึางืผิดุท้่เึางื|PLHIPS|๒|๑|ৡ|⃟|Đ.Δ.Μ/i // tambahin sendiri

export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiVirtex = isVirtex.exec(m.text)
    
    if (chat.antiVirtex && isAntiVirtex) {
    
    let regs = /(ผิดุท้เึางืผิดุท้เึางื)/i
   let isVertexThai = regs.exec(m.text)
   if (isVertexThai && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regk = /(♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚)/i
   let isVertexSymbol = regk.exec(m.text)
   if (isVertexSymbol && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regp = /(๒๒)/i
   let isVertexsThai= regp.exec(m.text)
   if (isVertexsThai && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regpz = /(৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|৭৭৭৭৭৭৭৭|๑๑๑๑๑๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|ผิดุท้่เึางืผิดุท้่เึางื|PLHIPS|๒|๑|ৡ|⃟|Đ.Δ.Μ)/i
   let isVertexsAll = regpz.exec(m.text)
   if (isVertexsAll && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            m.reply('*TROLLER BUG DETECTED*\n\n' + require('util').format(m.key))
        }
            if (!m.isBaileys && m.text.length > 384)
            if (m.text && m.text.length >= 25000)
            if (m.messageStubType === 68) { //Auto clear jika terdapat pesan yg tidak dapat dilihat oleh whatsapp web
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
        await conn.sendButton(m.chat, `*ODD FONTS DETECTED*${isBotAdmin ? '' : '\n\nBot Bukan Admin'}`, author, ['𝗗𝗜𝗦𝗔𝗕𝗟𝗘 𝗔𝗡𝗧𝗜-𝗩𝗜𝗥𝗧𝗘𝗫', '/disable antivirtex'], m)
        if (isBotAdmin && bot.restrict) {
       return m.reply('Ok!')
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Owner Turns Off Auto Kick*')
    }
    return !0
}