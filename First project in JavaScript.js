// Kelvin temp
var kelvin = 293
//Celsius temp
const celsius = kelvin - 273
// Farenheit temp
let fahrenheit = celsius * (9 / 5) + 32

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit}
degrees Fahrenheit.`);

let Newton = celsius * (33/100)

Newton = Math.floor(Newton);

console.log(`The temp is ${Newton} degrees Farenheit`);
