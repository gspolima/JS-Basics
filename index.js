// [Adding, Searching, Removing, Emptying, Combining and Slicing]
const numbers = [1, 2, 4, 8, 16, 64];

numbers.push(128);
numbers.unshift(0);
numbers.splice(6, 0, 32);

console.log(numbers);
console.log(numbers.indexOf(8));
console.log(numbers.lastIndexOf(16));
console.log(numbers.includes(128));


let freeGames = [
    { id: 1, name: 'Rocket League' },
    { id: 2, name: 'Fortnite' },
    { id: 3, name: 'Team Fortress 2' },
    { id: 4, name: 'Apex Legends' },
    { id: 5, name: 'Destiny 2' }
];

const fortniteExists = freeGames.find(game => game.name === 'Fortnite');
console.log(fortniteExists);

const last = freeGames.pop();
console.log(last);

const first = freeGames.shift();
console.log(first);

const deleted = freeGames.splice(2, 1);
console.log(deleted[0].name);
console.log(freeGames);

// const sameGames = freeGames;
// freeGames.length = 0;
// freeGames.splice(0, games.length);

// console.log(sameGames);
// console.log(freeGames);


const paidGames = [
    { id: 6, name: 'Grand Theft Auto V' },
    { id: 7, name: 'PUBG' },
    { id: 8, name: 'Papers, Please' },
    { id: 9, name: 'Shadow of the Colossus' }
];

// const combined = freeGames.concat(paidGames);
const combined = [...freeGames, ...paidGames];
console.log(combined);

const copy = [...combined];
console.log(copy);

const singlePlayerGames = paidGames.slice(2);
console.log(singlePlayerGames);

combined[3].name = 'PUBG: Battlegrounds';
console.log(paidGames[1]);