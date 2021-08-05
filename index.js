// [Array from given numbers]
const result = arrayFromNumbers(-4, 7);
console.log(result);

function arrayFromNumbers(min, max) {
    const result = [];
    for (let i = min; i <= max; i++)
        result.push(i);
    return result;
}

// [Custom includes function]
const exists = includes(result, -7);
console.log('Exists:', exists);

function includes(array, searchElement) {
    return array.some(value => value === searchElement);
}

// [Remove specific elements from an array]
const array1 = [1, 2, 3, 4, 5, 6, 7, 5, 3, 10, 3];
const output1 = except(array1, [3, 5, 6]);
console.log(output1);

function except(array, excluded) {
    const result = [];
    array.forEach(number => {
        if (!excluded.includes(number))
            result.push(number);
    });
    return result;
};

// [Move elements]
const array2 = [1, 2, 3, 4, 5, 6];
const output2 = move(array2, 5, -3);
console.log(output2);
 
function move(array, index, offset) {
    if (offset === 0)
        return array;

    const newPosition = index + offset;
    if (newPosition >= array.length || newPosition < 0) {
        console.error('Invalid offset');
        return;
    }

    const toMove = array.splice(index, 1);
    const result = [...array];
    result.splice(newPosition, 0, toMove[0]);
    return result;
}

// [Count occurrences]
const array3 = [1, 2, 3, 7, 2, 5, 6, 2, 8, 7, 10, 2, 4, 7, 6];
const output3 = countOccurrences(array3, 2);
console.log(`Total occurrences: ${output3}`);

function countOccurrences(array, searchElement) {
//     let count = 0;
//     while (array.length >= 1) {
//         const index = array.indexOf(searchElement);
//         if (index === -1)
//             break;

//         count += 1;
//         array = array.slice((index + 1));
//     }
//     return count;

    return array.reduce((accumulator, currentValue) => {
        if (currentValue === searchElement)
            return accumulator += 1;
        return accumulator;
    }, 0);
}

// [Get max value]
const array4 = [91, 50, 13, 9];
const output4 = getMax(array4);
console.log('Smaller value:', output4);

function getMax(array) {
    if (array.length === 0)
        return undefined;

    let minValue = Number.MAX_VALUE;
    // array.forEach(value => {
    //     value < minValue ? minValue = value : minValue
    // });
    // return minValue;

    return array.reduce((accumulator, currentValue) => {
        if (currentValue < accumulator)
            return accumulator = currentValue;
        return accumulator;
    }, minValue);
}

// [List movies from 2018 rated above 4]
const movies = [
    { title: 'Mortal Engines', year: 2018, rating: 4.5 },
    { title: 'Ashes of Snow', year: 2018, rating: 4.7 },
    { title: 'The Conductor', year: 2018, rating: 3 },
    { title: 'Disobedience', year: 2017, rating: 4.1 }
];

console.log('---');
listMovies(movies);

function listMovies(array) {
    array
        .filter(m => m.rating > 4 && m.year === 2018)
        .sort(sortMoviesByRatingDesc)
        .forEach(m => console.log(m.title));
}

function sortMoviesByRatingDesc(m1, m2) {
    if (m1.rating < m2.rating) return 1;
    if (m1.rating > m2.rating) return -1;
    return 0;
}