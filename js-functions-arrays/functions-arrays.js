// TASK 1
// Function Declaration
function findLargerValueDeclaration(a, b) {
  return a > b ? a : b;
}

const result1 = findLargerValueDeclaration(10, 5);
console.log('Using Function Declaration:', result1);

// Function Expression
const findLargerValueExpression = function (a, b) {
  return a > b ? a : b;
};

const result2 = findLargerValueExpression(15, 20);
console.log('Using Function Expression:', result2);

// Arrow Function
const findLargerValueArrow = (a, b) => (a > b ? a : b);

const result3 = findLargerValueArrow(7, 12);
console.log('Using Arrow Function:', result3);

// TASK 2
function recursiveFunction(value) {
  console.log('Value:', value);

  if (value >= 20) {
    return;
  }

  recursiveFunction(value + 1);
}

// Виклик функції з аргументом 2
recursiveFunction(2);

// TASK 3
let nestedArray = [
  ['apple', 'banana', 'dog'],
  ['cherry', 'cat', 'elephant'],
  ['red', 'green', 'cat'],
];

// Function to find 'cat'
function findCat(array) {
  for (let subArray of array) {
    for (let item of subArray) {
      if (item === 'cat') {
        return true;
      }
    }
  }
  return false;
}

// Call the function to search for 'cat'
const catFound = findCat(nestedArray);

// Display the result
if (catFound) {
  console.log("The array contains 'cat'.");
} else {
  console.log("The array does not contain 'cat'.");
}

// TASK 4
function divideArray(numbers) {
  const result = [];

  try {
    if (numbers.length < 2) {
      throw new Error('There are less than 2 elements in the array.');
    }

    for (let i = 1; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number' || numbers[i - 1] === 0) {
        throw new Error('Invalid element encountered.');
      }

      result.push(numbers[i] / numbers[i - 1]);
    }

    return result;
  } catch (error) {
    return 'Error: ' + error.message;
  } finally {
    console.log('Job completed.');
  }
}

console.log(divideArray([10, 2, 5]));
console.log(divideArray([5, 0, 2]));
console.log(divideArray([10, 'abc', 2]));
console.log(divideArray([3]));

// TASK 5
// Виведіть лише непарні числа з масиву array:
const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];
const oddNumbers = array.filter((num) => num % 2 !== 0);
console.log('Odd numbers:', oddNumbers);

// Відсортуйте масив arrayColors за допомогою методу sort:
const arrayColors = ['yellow', 'green', 'apple', 'red', 'pink'];
arrayColors.sort();
console.log('Sorted array of colors:', arrayColors);

// TASK 6
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log('Merged array:', mergedArray);

// TASK 7
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log('Sum of all elements in the array:', sum);
