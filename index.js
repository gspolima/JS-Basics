// [Address object]
const homeAddress = createAddress('5 Saltoun Rd', 'London', 'SW2 1EN');
const workAddress = new Address('Abbey Road', 'London', 'NW8 0AE');

showAddress('Home', homeAddress);
showAddress('Work', workAddress);

function showAddress(type, address) {
    console.log(type);
    for (const entry of Object.entries(address))
        console.log(`${entry[0].toUpperCase()}: ${entry[1]}`);
}

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

// [Object Equality]
const address1 = new Address('5th avenue', 'New York', '10110-0001');
const address2 = new Address('5th avenue', 'New York', '10110-0001');
const address3 = address1;
const address4 = {
    street: '5th avenue',
    town: 'New York',
    zipCode: '10110-0001'
}

console.log(areEqual(address1, address2));
console.log(areEqual(address1, address4));
console.log(areSame(address1, address3));

function areEqual(obj1, obj2) {
    let result = true;
    for (const key in obj1)
        if (obj1[key] !== obj2[key])
           return false;
    return result;
}

function areSame(obj1, obj2) {
    return obj1 === obj2 ? true : false;
}

// [Blog post object]
const blog = {
    title: '10 Great JavaScript Libraries for Productivity',
    author: 'Markus Vissers',
    views: 54,
    body:
    `Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Donec elit mi, faucibus 
      ac feugiat in, rutrum nec urna. Aliquam vehicula.`,
    comments: [
        {
            author: 'John Doe',
            body: 'Great content!'
        },
        {
            author: 'Gavin Smith',
            body: `They'll all be very useful.`
        },
        {
            author: 'Jake Keith',
            body: 'Axios is all I needed.'
        }
    ],
    isLive: true
}

for (const key in blog) {
    const element = blog[key];
    if (element.constructor === Array) {
        console.log(`${key}:`);
        for (const comment of Object.entries(element)) {
            let commentString = '';
            for (const property of comment)
                if (typeof(property) !== 'string')
                    for (const value in property)
                        if (commentString.length === 0)
                            commentString += `${property[value]} says `;
                        else
                            commentString += `"${property[value]}"`;
            console.log(commentString);
        }
    }
    else
        console.log(`${key}: ${element}`);
}

// [Blog post draft]
let draft = new Post('sample title', 'Mary Moore', 'Lorem ipsum dolor sit amet.')

console.log(draft);

function Post(title, author, body) {
    this.title = title,
    this.author = author,
    this.body = body,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}

// [Price ranges]
const priceLevels = [
    {
        label: '$',
        tooltip: 'Inexpensive',
        minPerPerson: '4',
        maxPerPerson: '30'
    },
    {
        label: '$',
        tooltip: 'Moderate',
        minPerPerson: '10',
        maxPerPerson: '80'
    },
    {
        label: '$',
        tooltip: 'Expensive',
        minPerPerson: '50',
        maxPerPerson: '400'
    }
]

const restaurants = [
    { averagePerPerson: 5 },
    { averagePerPerson: 12 },
    { averagePerPerson: 34 },
]