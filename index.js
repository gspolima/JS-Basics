// [Return the sum of N arguments]
console.log(sum(150, 610, 230));
console.log(sum([5, 15, 90]));

function sum(...args) {
    if (Array.isArray(args[0]))
        return args[0].reduce((acc, current) => acc + current);

    return args.reduce((acc, current) => acc + current);
}

// [Area of a circle]
const circle = {
    rad: 0,
    get area() {
        return 3.14 * (this.rad ** 2);
    },
    set radius(value) {
        if (typeof(value) !== 'number')
            throw new Error('value is not a number');
        this.rad = value;
    }
}

try {
    circle.radius = 3;
    console.log(circle.area);
} catch (error) {
    console.error(error);
}

// [Add error handling to a previous exercise]
try {
    const values = [1, 2, 3, 7, 2, 5, 6, 2, 8, 7, 10, 2, 4, 7, 6];
    const result = countOccurrences(values, 2);
    console.log(`Total occurrences: ${result}`);
} catch (error) {
    console.error(error)
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('First argument is not an array');

    return array.reduce((accumulator, currentValue) => {
        if (currentValue === searchElement)
            return accumulator += 1;
        return accumulator;
    }, 0);
}