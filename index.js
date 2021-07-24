function power(base, exponent, usePowerOperator) {
    if (usePowerOperator === true)
    {
        return `${base ** exponent} with power op`;
    }
    else
    {
        let result = 1;
        for(let index = 1; index <= exponent; index++)
        {
            result *= base;
        }
        return `${result} without power op`;
    }
}

console.log(power(2, 9, true));

let customer = {
    name: 'Jesse',
    points: 107,
    tier: ''
};

customer.points > 100 ? customer.tier = 'gold' : customer.tier = 'silver';

console.log(customer.tier);

// 01000110 = 70
// 10100010 = 162

// Bitwise OR = 11100110 = 230
console.log(70 | 162);

// Bitwise AND = 00000010 = 2
console.log(70 & 162);