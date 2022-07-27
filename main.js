var Kelvin = 0; 
console.log(Kelvin);
var Celsius = (Kelvin - 273);
// celsius is 273 degrees less than kelvin, so we substract 273 from kelvin

var Fahrenheit = (Celsius)*(9/5) + 32;
// fahrenheit is celsius times 9/5 + 32

console.log(Math.floor(Fahrenheit));
//round down the Fahrenheit variable

console.log(`The temperature is ${Math.floor(Fahrenheit)} degrees Fahrenheit.`);
