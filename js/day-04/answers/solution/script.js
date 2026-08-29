const celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
};

let todayTemp = 25; 
let fTemp = celsiusToFahrenheit(todayTemp);

console.log(`Today's temperature is ${todayTemp}°C, which is ${fTemp}°F.`);

console.log(`0°C is ${celsiusToFahrenheit(0)}°F.`);
console.log(`100°C is ${celsiusToFahrenheit(100)}°F.`);
