// class Character {
//     constructor(name, hp, bullets) {
//         this.name = name;
//         this.hp = parseInt(hp);
//         this.bullets = parseInt(bullets);
//     }

//     fireShot(target) {
//         if (this.bullets > 0) {
//             this.bullets--;
//             console.log(`${this.name} has successfully hit ${target} and now has ${this.bullets} bullets!`);
//         } else {
//             console.log(`${this.name} doesn't have enough bullets to shoot at ${target}!`);
//         }
//     }

//     takeHit(damage, attacker) {
//         this.hp -= parseInt(damage);
//         if (this.hp > 0) {
//             console.log(`${this.name} took a hit for ${damage} HP from ${attacker} and now has ${this.hp} HP!`);
//         } else {
//             console.log(`${this.name} was gunned down by ${attacker}!`);
//             return true;
//         }
//     }

//     reload() {
//         const maxBullets = 6;
//         if (this.bullets < maxBullets) {
//             const reloaded = maxBullets - this.bullets;
//             this.bullets = maxBullets;
//             console.log(`${this.name} reloaded ${reloaded} bullets!`);
//         } else {
//             console.log(`${this.name}'s pistol is fully loaded!`);
//         }
//     }

//     patchUp(amount) {
//         const maxHP = 100;
//         if (this.hp === maxHP) {
//             console.log(`${this.name} is in full health!`);
//         } else {
//             const newHP = Math.min(maxHP, this.hp + parseInt(amount));
//             const recovered = newHP - this.hp;
//             this.hp = newHP;
//             console.log(`${this.name} patched up and recovered ${recovered} HP!`);
//         }
//     }
// }

// function simulateWildWest(inputs) {
//     const characters = new Map();
//     let index = 0;
//     const n = parseInt(inputs[index++]);
//     for (let i = 0; i < n; i++) {
//         const [name, hp, bullets] = inputs[index++].split(' ');
//         characters.set(name, new Character(name, hp, bullets));
//     }

//     while (index < inputs.length) {
//         const line = inputs[index++];
//         if (line === "Ride Off Into Sunset") break;
//         const [command, name, arg1, arg2] = line.split(' - ');

//         if (!characters.has(name)) continue;

//         switch (command) {
//             case "FireShot":
//                 characters.get(name).fireShot(arg1);
//                 break;
//             case "TakeHit":
//                 const isDead = characters.get(name).takeHit(arg1, arg2);
//                 if (isDead) characters.delete(name);
//                 break;
//             case "Reload":
//                 characters.get(name).reload();
//                 break;
//             case "PatchUp":
//                 characters.get(name).patchUp(arg1);
//                 break;
//         }

//     }

//     for (const [name, char] of characters) {
//         console.log(`${name}`);
//         console.log(`  HP: ${char.hp}`);
//         console.log(`  Bullets: ${char.bullets}`);
//     }
// }

// simulateWildWest([
//     "2",
//     "Gus 100 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"
// ]);

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
