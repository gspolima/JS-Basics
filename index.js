let student = {
    name: 'Gustavo',
    age: 19,
    weightInKG: 62,
    isMinor: false,
    voterId: undefined,
    currentJob: null,
    dateOfRecord: new Date(2021, 07, 22)
};

console.log(typeof(student.voterId));
console.log(typeof(student.currentJob));

let property = 'age';
// brackets notation
student[property] = 20;

console.log('Age: ' + student.age);