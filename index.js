// [Value and Reference Types]
let n = 10;

function changeNumber(n) {
    n = 20;
}

changeNumber(n);
console.log(n);


let obj = {
    name: 'Cake'
};

function changeObject(obj) {
    obj.name = 'Pie';
//  obj = {};   Won't change anything;
}

changeObject(obj);
console.log(obj);

// [Iterate through object properties]
const book = {
    title: 'An Honest Thief',
    year: 1848
}

for (let key in book)
    console.log(key, book[key]);

for (let key of Object.keys(book))
    console.log(key);

for (let entry of Object.entries(book))
    console.log(entry);

// [Cloning]
// for (const key in book)
//     anotherBook[key] = book[key];

//const anotherBook = Object.assign(anotherBook, book);

const anotherBook = {...book};
console.log(anotherBook);

// [Strings]
const species = 'Homo Sapiens';
const chars = species.split(' ');
const result = '';
for (const value of chars) {
    console.log(result.concat(value));
}

// [Dates]
const now = new Date();
now.setMonth(7);
now.setHours(8);
now.setDate(23);

console.log(now.getTimezoneOffset());
console.log(now.toISOString());