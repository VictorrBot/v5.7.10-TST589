let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗟𝗜𝗦𝗧`,
	rows: [
	{title: "Welcome", rowId: `${usedPrefix + command} welcome`},
    {title: "Delete", rowId: `${usedPrefix + command} delete`},
    {title: "Auto Delete VN", rowId: `${usedPrefix + command} autodelvn`},
    {title: "Public", rowId: `${usedPrefix + command} public`},
	{title: "Simi", rowId: `${usedPrefix + command} simi`},
	{title: "NSFW", rowId: `${usedPrefix + command} nsfw`},
	{title: "Premium NSFW", rowId: `${usedPrefix + command} premnsfwchat`},
	{title: "Anti-Link", rowId: `${usedPrefix + command} antilink`},
	{title: "Anti-Delete", rowId: `${usedPrefix + command} antidelete`},
	{title: "Anti-Toxic", rowId: `${usedPrefix + command} antitoxic`},
	{title: "Auto Level Up", rowId: `${usedPrefix + command} autolevelup`},
	{title: "Detect", rowId: `${usedPrefix + command} detect`},
	{title: "Document", rowId: `${usedPrefix + command} document`},
	{title: "White List My Contact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "Menyimak", rowId: `${usedPrefix + command} nyimak`},
	{title: "Auto Read", rowId: `${usedPrefix + command} autoread`},
	{title: "Respon PC Only", rowId: `${usedPrefix + command} pconly`},
	{title: "Respon GC Only", rowId: `${usedPrefix + command} gconly`},
	{title: "Respon SW Only", rowId: `${usedPrefix + command} swonly`},
	]
    },
]

const listMessage = {
  text: '𝗕𝗼𝘁 & 𝗚𝗿𝗼𝘂𝗽 𝗟𝗮𝘄',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "𝗣𝗿𝗲𝘀𝘀 𝗛𝗲𝗿𝗲",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      case 'antistiker': case 'antisticker': 
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiStiker = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
case 'updateAnime':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.updateAnime = isEnable
      break
      case 'nsfw':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.nsfw = isEnable
      break
      case 'premnsfwchat':
        if (m.isGroup) {
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }}
      chat.premnsfw = isEnable
      break
     case 'antitoxic':
       if (m.isGroup) {
       if (!(isAdmin || isOwner)) {
       global.dfail('admin', m, conn)
           throw false
         }
     }
      chat.antiToxic = !isEnable
      break
      case 'antivirtex':
       if (m.isGroup) {
       if (!(isAdmin || isOwner)) {
       global.dfail('admin', m, conn)
           throw false
         }
     }
      chat.antiVirtex = !isEnable
      break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
     case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  conn.sendButton(m.chat, `*${htki} 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 ${htka}*

🗂️ *Type:* ${type} 
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📢 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`,wm, null, [[`${isEnable ? '𝗗𝗜𝗦𝗔𝗕𝗟𝗘' : '𝗘𝗡𝗔𝗕𝗟𝗘'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['𝗠𝗘𝗡𝗨', '.menu']],m)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
handler.register = true
export default handler
