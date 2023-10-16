// TASK 1
// Створюємо два масиви з довільними значеннями
const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli', 'cucumber'];

// Об'єднуємо їх за допомогою оператора spread (...)
const combinedArray = [...fruits, ...vegetables];

// Виводимо поєднаний масив у консоль
console.log(combinedArray);

// TASK 2
function multiply(multiplier, ...arguments) {
    const result = arguments.map(element => element * multiplier);
    return result;
  }
  
  const result = multiply(4, 9, 83, 3);
  console.log(result);
  