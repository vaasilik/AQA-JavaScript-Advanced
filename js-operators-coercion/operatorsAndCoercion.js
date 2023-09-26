let personAge = 20;
let isOldEnoughForLicense = personAge >= 18;
console.log("Is the person old enough for a driver's license in Ukraine?", isOldEnoughForLicense);

let person1Name = "John";
let person2Name = "Alice";
let greetings = "Hello, " + person1Name + " and " + person2Name + "!";
console.log(greetings);

let myString = "5.489";
let number = parseFloat(myString); 
let isNotNaN = !isNaN(number);
let roundedNumber = Math.round(number * 10) / 10;
let roundedText = roundedNumber.toString();
console.log("Converted to data type number:", number);
console.log("Number after the first operation is not NaN:", isNotNaN);
console.log("Rounded value:", roundedText);

let myString2 = "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation.";
console.log("String length:", myString2.length);

let modifiedString = myString2.replace(/Wikipedia/g, "example");
console.log("Modified String:", modifiedString);

let containsWorld = myString2.includes("world");
console.log("Contains 'world':", containsWorld);

let endsWithFoundation = myString2.endsWith("Foundation.");
console.log("Ends with 'Foundation':", endsWithFoundation);

const radius = 5;
let circleArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
console.log("Circle area: " + circleArea);

const length = 8;
const width = 4;
let rectangleArea = (length * width).toFixed(2);
console.log("Rectangle area: " + rectangleArea);

const height = 10;
let cylinderVolume = (Math.PI * Math.pow(radius, 2) * height).toFixed(2);
console.log("Volume of the cylinder: " + cylinderVolume);