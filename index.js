// [Joining, Sorting, Testing, Filtering, Mapping and Reducing]
let numbers = [1, 16, 64, 8, 4, 2];

const games = [
    { id: 1, name: 'Fortnite' },
    { id: 2, name: 'GTA V' },
    { id: 3, name: 'PUBG' },
    { id: 4, name: 'Papers, Please' },
    { id: 5, name: 'Shadow of the Colossus' }
];

numbers.forEach((number, index) => console.log(`${index}: ${number}`));

const joined = numbers.join(', ');
console.log(joined);

const words = 'A picture is worth a THOUSAND words'.split(' ');
console.log(words);

const urlSlug = words.join('-').toLowerCase();
console.log(urlSlug);


numbers.sort();
numbers.sort((x, y) => {
    if (x > y) return 1;
    if (x < y) return -1;
    return 0;
});

console.log(numbers);

games.sort((game1, game2) => {
    const name1 = game1.name.toUpperCase();
    const name2 = game2.name.toUpperCase();

    if (name1 > name2) return 1;
    if (name1 < name2) return -1;
    return 0;
});

console.log(games);


const onlyPositive = numbers.every(n => n > 0);
console.log(onlyPositive);

const atLeastOneStartsWithS = games.some((g) => {
    return g.name.toUpperCase().startsWith('S')
});
console.log(atLeastOneStartsWithS);


const greaterThanFive = numbers.filter(value => value > 5);
console.log(greaterThanFive);

const startingWithP = games.filter(g => {
    return g.name.toUpperCase().startsWith('P')
});
console.log(startingWithP);


const items = numbers
    .filter(number => number < 10)
    .sort((x, y) => {
        if (x > y) return 1;
        if (x < y) return -1;
        return 0;
    })
    .map(number => ({ value: number }))
    .filter(obj => obj.value % 2 === 0);

console.log(items);


const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

// const uniqueGameName = games.reduce((accumulator, currentGame) => {
//     for (let char of currentGame.name)
//         if (!accumulator.name.includes(char))
//             accumulator.name += char;
//     return accumulator;
// });

// console.log(uniqueGameName.name);