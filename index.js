// For-in and For-of
let mug = {
    capacity: 0.35,
    color: 'Black and White',
    material: 'Porcelain',
    yearOfManufacturing: 2020
};
for (let property in mug)
    console.log(`${property} = ${mug[property]}`);

let rockBands = ['The Beatles', 'Pink Floyd', 'Radiohead', 'Led Zeppelin'];
for (let band of rockBands)
    console.log(band);