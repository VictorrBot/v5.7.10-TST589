const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'Traveler I': 0,
    'Traveler II': 40,
    'Traveler III': 80,
    'Traveler IV': 120,
    'Traveler V': 160,
    'Adventurer I': 200,
    'Adventurer II': 240,
    'Adventurer III': 280,
    'Adventurer IV': 320,
    'Adventurer V': 360,
    'Wanderer I': 400,
    'Wanderer II': 440,
    'Wanderer III': 480,
    'Wanderer IV': 520,
    'Wanderer V': 560,
    'Apollo I': 600,
    'Apollo II': 640,
    'Apollo III': 680,
    'Apollo IV': 720,
    'Apollo V': 760,
    'Wayfarer I': 800,
    'Wayfarer II': 840,
    'Wayfarer III': 880,
    'Wayfarer IV': 920,
    'Wayfarer V': 960,
    'Paladins I': 1000,
    'Paladins II': 1040,
    'Paladins III': 1080,
    'Paladins IV': 1200,
    'Paladins V': 1240,
    'Omega I': 1280,
    'Omega II': 1320,
    'Omega III': 1360,
    'Omega IV': 1400,
    'Omega V': 1440,
    'Pathfinder I': 1480,
    'Pathfinder II': 1520,
    'Pathfinder III': 1560,
    'Pathfinder IV': 1600,
    'Pathfinder V': 1640,
    'Stallion I': 1680,
    'Stallion II': 1720,
    'Stallion III': 1760,
    'Stallion IV': 1800,
    'Stallion V': 1850,
    'VOYAGER': 2000
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}
