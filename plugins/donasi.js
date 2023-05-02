let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ok.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "5489299044451325",
"title": `Bot By 么 Keizha`,
"description": `Wajib Sewa`,
"currencyCode": "IDR",
"bodyText": wm,
"footerText": wm,
"priceAmount1000": "3000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": wm,
"url": "wa.me/18459214155"
},
"businessOwnerJid": "6281249122429@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftroli })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i
handler.register = true
handler.limit = true

export default handler