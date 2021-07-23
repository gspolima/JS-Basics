let greekThinkers = ['Socrates', 'Aristotle', 'Plato', 10];
console.log(greekThinkers);

// doesn't throw out of bounds exception,
// returns undefined instead.
console.log(greekThinkers[3]);
console.log(greekThinkers.length);

function greet(firstName, lastName) {
    let timeOfDay;
    let currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12 ) {
        timeOfDay = 'morning';
    }
    else if (currentHour >= 12 && currentHour < 17) {
        timeOfDay = 'afternoon';
    }
    else if (currentHour >= 17 && currentHour < 24) {
        timeOfDay = 'evening';
    }
    console.log(`Good ${timeOfDay}, ${firstName} ${lastName}`);
}

greet('Gustavo', 'Sampaio');

function square(number) {
    return number * number;
}

console.log(square(4));