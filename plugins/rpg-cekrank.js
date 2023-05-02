import daily from './rpg-daily.js'
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'

const inventory = {
  others: {
    health: true,
    money: true,
    exp: true,
    limit: true,
    intelligence: true,
    rune: true,
    os: true,
    gems: true,
    diperkosa: true,
    memperkosa: true,
    level: true,
    skill: true,
    ras: true,
    husbu: true,
    waifu: true,
    stamina: true,
    mana: true,
    crystal: true,
    mooncard: true,
    starcard: true
  },
  items: {
    osr: true,
    potion: true,
    trash: true,
    wood: true,
    rock: true,
    string: true,
    emerald: true,
    coal: true,
    diamond: true,
    gold: true,
    iron: true,
    upgrader: true,
    pet: true,
    botol: true,
    kaleng: true,
    kardus: true,
    ramuan: true,
    weapon: true,
    anakpancingan: true,
  },
  fruit: {
    pisang: true,
    anggur: true,
    apel: true,
    mangga: true,
    jeruk: true,
    bibitpisang: true,
    bibitanggur: true,
    bibitapel: true,
    bibitmangga: true,
    bibirjeruk: true,
  },
  food: {
    ayambakar: true,
                    gulaiayam: true,
                    rendang: true,
                    ayamgoreng: true,
                    oporayam: true,
                    steak: true,
                    babipanggang: true,
                    ikanbakar: true,
                    lelebakar: true,
                    nilabakar: true,
                    bawalbakar: true,
                    udangbakar: true,
                    pausbakar: true,
                    kepitingbakar: true,      
  },
  animal: {
    panda: true,
    kambing: true,
    harimau: true,
    gajah: true,
    banteng: true,
    babihutan: true,
    monyet: true,
    kerbau: true,
    sapi: true,
    buaya: true,
    babi: true,
    ayam: true,
},
  fish: {
    paus: true,      
                    kepiting: true,
                    gurita: true,      
                    lobster: true,
                    lumba: true,
                    dory: true,
                    buntal: true,
                    cumi: true,
                    orca: true,
                    ikan: true,      
                    udang: true,
                    hiu: true, 
  },
  durabi: {
    sworddurability: true,
    pickaxedurability: true,
    fishingroddurability: true,
    armordurability: true,
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerlad Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    fishingrod: true,

  },
  crates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
  },
  cooldowns: {
    lastclaim: {
      name: 'claim',
      time: daily.cooldown
    },
    lastweekly: {
    	name: 'weekly',
        time: weekly.cooldown
        },
    lastmonthly: {
      name: 'monthly',
      time: monthly.cooldown
    },
    lastadventure: {
      name: 'adventure',
      time: adventure.cooldown
    }
  }
}
let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const tools = Object.keys(inventory.tools).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${typeof inventory.tools[v] >= 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const items = Object.keys(inventory.items).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const fruit = Object.keys(inventory.fruit).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const food = Object.keys(inventory.food).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const animal = Object.keys(inventory.animal).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const fish = Object.keys(inventory.fish).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const dura = Object.keys(inventory.durabi).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const crates = Object.keys(inventory.crates).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const pets = Object.keys(inventory.pets).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*• ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()
  const caption = `

🏅 Your Rank: *${user.role}*

Traveler I > ${user.level > 0 ? '*Done ✅*': '*Not finished yet*'}
Traveler II > ${user.level > 40 ? '*Done ✅*': '*Not finished yet*'}
Traveler III > ${user.level > 80 ? '*Done ✅*': '*Not finished yet*'}
Traveler IV > ${user.level > 120 ? '*Done ✅*': '*Not finished yet*'}
Traveler V > ${user.level > 160 ? '*Done ✅*': '*Not finished yet*'}
Adventurer I > ${user.level > 200 ? '*Done ✅*': '*Not finished yet*'}
Adventurer II > ${user.level > 240 ? '*Done ✅*': '*Not finished yet*'}
Adventurer III > ${user.level > 280 ? '*Done ✅*': '*Not finished yet*'}
Adventurer IV > ${user.level > 320 ? '*Done ✅*': '*Not finished yet*'}
Adventurer V > ${user.level > 360 ? '*Done ✅*': '*Not finished yet*'}
Wanderer I > ${user.level > 400 ? '*Done ✅*': '*Not finished yet*'}
Wanderer II > ${user.level > 440 ? '*Done ✅*': '*Not finished yet*'}
Wanderer III > ${user.level > 480 ? '*Done ✅*': '*Not finished yet*'}
Wanderer IV > ${user.level > 520 ? '*Done ✅*': '*Not finished yet*'}
Wanderer V > ${user.level > 560 ? '*Done ✅*': '*Not finished yet*'}
Apollo I > ${user.level > 600 ? '*Done ✅*': '*Not finished yet*'}
Apollo II > ${user.level > 640 ? '*Done ✅*': '*Not finished yet*'}
Apollo III > ${user.level > 680 ? '*Done ✅*': '*Not finished yet*'}
Apollo IV > ${user.level > 720 ? '*Done ✅*': '*Not finished yet*'}
Apollo V > ${user.level > 760 ? '*Done ✅*': '*Not finished yet*'}
Wayfarer I > ${user.level > 800 ? '*Done ✅*': '*Not finished yet*'}
Wayfarer II > ${user.level > 840 ? '*Done ✅*': '*Not finished yet*'}
Wayfarer III > ${user.level > 880 ? '*Done ✅*': '*Not finished yet*'}
Wayfarer IV > ${user.level > 920 ? '*Done ✅*': '*Not finished yet*'}
Wayfarer V > ${user.level > 960 ? '*Done ✅*': '*Not finished yet*'}
Paladins I > ${user.level > 1000 ? '*Done ✅*': '*Not finished yet*'}
Paladins II > ${user.level > 1040 ? '*Done ✅*': '*Not finished yet*'}
Paladins III > ${user.level > 1080 ? '*Done ✅*': '*Not finished yet*'}
Paladins IV > ${user.level > 1200 ? '*Done ✅*': '*Not finished yet*'}
Paladins V > ${user.level > 1240 ? '*Done ✅*': '*Not finished yet*'}
Omega I > ${user.level > 1280 ? '*Done ✅*': '*Not finished yet*'}
Omega II > ${user.level > 1320 ? '*Done ✅*': '*Not finished yet*'}
Omega III > ${user.level > 1360 ? '*Done ✅*': '*Not finished yet*'}
Omega IV > ${user.level > 1400 ? '*Done ✅*': '*Not finished yet*'}
Omega V > ${user.level > 1440 ? '*Done ✅*': '*Not finished yet*'}
Pathfinder I > ${user.level > 1480 ? '*Done ✅*': '*Not finished yet*'}
Pathfinder II > ${user.level > 1520 ? '*Done ✅*': '*Not finished yet*'}
Pathfinder III > ${user.level > 1560 ? '*Done ✅*': '*Not finished yet*'}
Pathfinder IV > ${user.level > 1600 ? '*Done ✅*': '*Not finished yet*'}
Pathfinder V > ${user.level > 1640 ? '*Done ✅*': '*Not finished yet*'}
Stallion I > ${user.level > 1680 ? '*Done ✅*': '*Not finished yet*'}
Stallion II > ${user.level > 1720 ? '*Done ✅*': '*Not finished yet*'}
Stallion III > ${user.level > 1760 ? '*Done ✅*': '*Not finished yet*'}
Stallion IV > ${user.level > 1800 ? '*Done ✅*': '*Not finished yet*'}
Stallion V > ${user.level > 1850 ? '*Done ✅*': '*Not finished yet*'}
VOYAGER > ${user.level > 2000 ? '*Done ✅*': '*Not finished yet*'}

`.trim()
 m.reply(`*${htki} CEK RANK ${htka}*\n${caption}\n`);
}
handler.help = ['cekrank', 'inv']
handler.tags = ['rpg']
handler.command = /^cekrank$/i

handler.register = true
export default handler
