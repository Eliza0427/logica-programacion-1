let temperatura = Number(prompt ("ingresa la temperatura que deseas convertir: "));
console.log("temp= " + temperatura + "°C");

const kelvin= temperatura + 273.15 ;

console.log("la temperatura en K es: " + kelvin);


const fahrenheit = (temperatura * 9 / 5) + 32;

console.log("Temperatura en °F: " + fahrenheit);