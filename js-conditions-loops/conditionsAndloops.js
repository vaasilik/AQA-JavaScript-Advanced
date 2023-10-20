let yearsOfExperience = 5;

let baseSalary = 0;
let bonus = 0;

if (yearsOfExperience < 0.5) {
  baseSalary = 0;
} else if (yearsOfExperience >= 0.5 && yearsOfExperience < 1) {
  baseSalary = 100;
  bonus = 0.01 * baseSalary;
} else if (yearsOfExperience >= 1 && yearsOfExperience < 2) {
  baseSalary = 333;
  bonus = 0.03 * baseSalary;
} else if (yearsOfExperience >= 2 && yearsOfExperience < 4) {
  baseSalary = 555;
  bonus = 0.04 * baseSalary;
} else {
  baseSalary = 666;
  bonus = yearsOfExperience * baseSalary;
}

console.log('Base Salary: ' + baseSalary);
console.log('Bonus: ' + bonus);

let month = 7;

switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  case 4:
    console.log('April');
    break;
  case 5:
    console.log('May');
    break;
  case 6:
    console.log('June');
    break;
  case 7:
    console.log('July');
    break;
  case 8:
    console.log('August');
    break;
  case 9:
    console.log('September');
    break;
  case 10:
    console.log('October');
    break;
  case 11:
    console.log('November');
    break;
  case 12:
    console.log('December');
    break;
  default:
    console.log('Invalid month');
}

const number = 30;

for (let i = 2; i <= number; i += 2) {
  if (i !== 22 && i !== 0) {
    console.log(i);
  }
}

const numberA = 15;
const numberB = 28;

const result = numberA > numberB ? numberA : numberB;

console.log('Larger number: ' + result);

const inputString = 'Javascript is fun';
let outputString = '';
let index = 0;

while (index < inputString.length) {
  const currentChar = inputString[index];

  if (currentChar === 'a') {
    index++;
    continue;
  }

  if (currentChar === 'n') {
    break;
  }

  outputString += currentChar;
  index++;
}

console.log(outputString);
