
export async function all(m) {
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
   let user = global.db.data.users[m.sender]
    const cooldown = 86400000
    if (new Date - user.pc < cooldown) return // setiap 24 jam sekali
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let caption = `*👋 Hai @${who.split("@")[0]}, ${user.banned ? 'Kamu Dibanned*' : `Ada Yang Bisa ${this.user.name} Bantu?*\n\n• Ketik *.menu* Untuk Melihat List Fitur Bot`}
`.trim()
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? '𝗢𝗪𝗡𝗘𝗥' : '𝗠𝗘𝗡𝗨', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
    user.pc = new Date * 1
}
