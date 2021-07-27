// Factory functions
function createMonitor(inches, resolution) {
    return {
        inches,
        resolution,
        turnOn() {
            console.log('Monitor turned on');
        }
    }
}

let monitor1 = createMonitor(24, { width: 1920, height: 1080 });
console.log(monitor1.resolution);
monitor1.turnOn();

// Constructor functions
function Monitor(inches, resolution) {
    this.inches = inches,
    this.resolution = resolution,
    this.turnOn = function() {
        console.log('Turning on...');
    }
}

const monitor2 = new Monitor(19, { width: 3840, height: 2160 });
console.log(monitor2);
monitor2.turnOn();

// Dynamic objects
const pen = {
    color: 'Blue',
    write() {
        console.log('Writing...');
    }
}

pen.manufacturer = 'BIC';
delete pen.manufacturer;

console.log(pen);

// Functions are objects!
function Mug(capacity, origin) {
    this.capacity = capacity,
    this.origin = origin
}
console.log(Mug.constructor);


const Mug1 = new Function('capacity', 'origin', `
    this.capacity = capacity,
    this.origin = origin`);

const mug = new Mug1(0.4, 'USA');
console.log(mug);

Mug.call({}, 0.3);
Mug.apply({}, /*[arg1, arg2, arg2]*/);