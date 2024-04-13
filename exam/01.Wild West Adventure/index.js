function solve(input) {
    const characters = {};
    let index = 0;
    const n = parseInt(input[index++]);

    for (let i = 0; i < n; i++) {
        const [name, hp, bullets] = input[index++].split(' ');
        characters[name] = { hp: parseInt(hp), bullets: parseInt(bullets) };
    }

    while (index < input.length) {
        const line = input[index++];
        if (line === 'Ride Off Into Sunset') break;
        const parts = line.split(' - ');
        const command = parts[0];
        const name = parts[1];

        if (!(name in characters)) continue;

        switch (command) {
            case 'FireShot':
                const target = parts[2];
                if (characters[name].bullets > 0) {
                    characters[name].bullets--;
                    console.log(
                        `${name} has successfully hit ${target} and now has ${characters[name].bullets} bullets!`
                    );
                } else {
                    console.log(
                        `${name} doesn't have enough bullets to shoot at ${target}!`
                    );
                }
                break;
            case 'TakeHit':
                const damage = parseInt(parts[2]);
                const attacker = parts[3];
                characters[name].hp -= damage;
                if (characters[name].hp > 0) {
                    console.log(
                        `${name} took a hit for ${damage} HP from ${attacker} and now has ${characters[name].hp} HP!`
                    );
                } else {
                    console.log(`${name} was gunned down by ${attacker}!`);
                    delete characters[name];
                }
                break;
            case 'Reload':
                const maxBullets = 6;
                if (characters[name].bullets < maxBullets) {
                    const reloaded = maxBullets - characters[name].bullets;
                    characters[name].bullets = maxBullets;
                    console.log(`${name} reloaded ${reloaded} bullets!`);
                } else {
                    console.log(`${name}'s pistol is fully loaded!`);
                }
                break;
            case 'PatchUp':
                const amount = parseInt(parts[2]);
                const maxHP = 100;
                if (characters[name].hp < maxHP) {
                    const newHP = Math.min(maxHP, characters[name].hp + amount);
                    const recovered = newHP - characters[name].hp;
                    characters[name].hp = newHP;
                    console.log(
                        `${name} patched up and recovered ${recovered} HP!`
                    );
                } else {
                    console.log(`${name} is in full health!`);
                }
                break;
        }
    }

    for (const name in characters) {
        console.log(`${name}`);
        console.log(`  HP: ${characters[name].hp}`);
        console.log(`  Bullets: ${characters[name].bullets}`);
    }
}

solve([
    '2',
    'Gus 100 0',
    'Walt 100 6',
    'FireShot - Gus - Bandit',
    'TakeHit - Gus - 100 - Bandit',
    'Reload - Walt',
    'Ride Off Into Sunset',
]);
