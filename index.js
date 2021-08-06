// [Function Expressions, Arguments, Rest Operator, Default values, Getters/Setters]
function sayHello(message) {
    console.log('Hello,', message);
}
sayHello('stranger!');

let sayGoodbye = function(subject) {
    console.log('See you soon,', subject);
};
sayGoodbye('Mr. E');

let power = (base, exponent) => base ** exponent;
console.log(power(2, 3));

const sum = function() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}
console.log(sum(2, 4, 10, 3));


function join(...args) {
    return args.reduce((accumulator, arg) => accumulator + arg);
}
console.log(join('Join', 'Me', 'On', 'This', 'Journey'));

function calculateTotalWithDiscount(discount, ...prices) {
    const total = prices.reduce(
        (accumulator, price) => accumulator + price);
    return total - (total * (discount / 100));
}
console.log(calculateTotalWithDiscount(10, 20, 15));


function calculateWeight(mass, gravityInMs = 9.8) {
    return Math.round(mass * gravityInMs);
}
console.log(calculateWeight(6.22, 1.62), 'KG');


const employee = {
    firstName: 'Gustavo',
    lastName: 'Lima',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof(value) !== 'string')
            throw new Error('Value provided is not a string');
        const parts = value.split(' ');

        if(parts.length !== 2)
            throw new Error('Fill both first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
    role: 'JavaScript developer',
    workingSince: new Date(2021, 08, 25)
}

try {
    employee.fullName = 'Jim';
    //employee.fullName = 'Gustavo Sampaio';
    console.log(employee.fullName);
} catch (e) {
    console.error(e);
}
