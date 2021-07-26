// [Max of Two Numbers]
console.log(max(5, 7));

function max(number1, number2) {
    return number1 > number2 ? number1 : number2;
}

// [Landscape or portrait orientation]
console.log(isLandscape(800, 800));

function isLandscape(width, height) {
    return width > height;
}

// [FizzBuzz]
console.log(FizzBuzz(15));

function FizzBuzz(input) {
    if (typeof(input) !== 'number' || typeof(input) === NaN)
        return NaN;
    if (input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';

    return input;
}

// [Demerit Points]
// speed limit = 70km/h.
// each 5 km/h above the limit = +1 point.
// 12 points = license suspended.
console.log(checkSpeed(130));

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    let kmAboveLimit = Math.floor(speed - speedLimit);
    let points = 0;

    if (kmAboveLimit < kmPerPoint)
        return 'Ok';

    while (kmAboveLimit >= kmPerPoint) {
        points += 1;
        if (points === 12)
            return 'License Suspended!';

        kmAboveLimit -= kmPerPoint;
    }

    return points;
}

// [Even and Odd numbers]
showNumbers(10);

function showNumbers(limit) {
    let output;
    for (let i = 0; i <= limit; i++) {
        output = i;
        if (i % 2 === 0)
            output += ' EVEN';
        else
            output += ' ODD';

        console.log(output);
    }
}

// [Count truthy]
const values = [0, 1, 3, NaN, {}, null, 'abc'];
console.log(countTruthy(values));

function countTruthy(array) {
    let count = 0;
    for (let element of array)
        if (element)
            count += 1;

    return count;
}
// [Show only string properties]
const city = {
    name: 'Dallas',
    state: 'TX',
    population: 1331000,
    founded: 1841
};

showProperies(city);

function showProperies(obj) {
    for (const key in obj)
        if (typeof(obj[key]) === 'string')
            console.log(key, obj[key]);
}

// [Sum of all the multiples of 3 and 5 within a limit]
console.log(sum(15));

function sum(limit) {
    let sumOfThree = 0;
    let sumOfFive = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0)
            sumOfThree += i;
        if (i % 5 === 0)
            sumOfFive += i;
    }

    return sumOfThree + sumOfFive;
}

// [Average of marks]
const marks = [85, 70, 60];
const average = calculateAverage(marks);
const grade = getLetterGrade(average);

console.log(grade);

function calculateAverage(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;

    return sum / marks.length;
}

function getLetterGrade(average) {
    if (average >= 90)
        return 'A';
    if (average >= 80)
        return 'B';
    if (average >= 70)
        return 'C';
    if (average >= 60)
        return 'D';

    return 'F';
}

// [Stars]
showStars(15);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let result = '';
        for (let star = 1; star <= row; star++)
            result += '*';
        console.log(result);
    }
}

// [Prime numbers]
findPrimes(30);

function findPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number))
            console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}