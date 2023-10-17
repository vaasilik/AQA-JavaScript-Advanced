// TASK 1
// Сереалізація (перетворення об'єкта у рядок JSON
const userSettings = {
    username: "john_doe",
    theme: "dark",
    language: "en",
    notifications: true,
  };
  
  // Сереалізація (перетворення об'єкта у рядок JSON):
  const serializedSettings = JSON.stringify(userSettings);
  
  console.log(serializedSettings);
  
  // Десеріалізація (перетворення рядка JSON у об'єкт):
  const deserializedSettings = JSON.parse(serializedSettings);
  
  console.log(deserializedSettings);
  

// TASK 2
async function delayAndLog(message, milliseconds) {
    await new Promise((resolve) => setTimeout(resolve, milliseconds)); // Затримка на задану кількість мілісекунд
    console.log(message); // Виведення повідомлення на консоль
  }
  
  // Виклик функції з різними повідомленнями та затримками
  async function main() {
    await delayAndLog("Message 1 after 2000ms", 2000);
    await delayAndLog("Message 2 after 1000ms", 1000);
    await delayAndLog("Message 3 after 3000ms", 3000);
  }
  
  main(); // Виклик головної функції
  
// TASK 3
async function fetchComments() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
    const comments = await response.json();
    return comments;
  }
  
  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const posts = await response.json();
    return posts;
  }
  
  async function main() {
    const promise1 = fetchComments();
    const promise2 = fetchPosts();
  
    // Використовуємо Promise.all для отримання результатів обох запитів одночасно
    const [comments, posts] = await Promise.all([promise1, promise2]);
  
    console.log("Result using Promise.all:");
    console.log("Comments:", comments);
    console.log("Posts:", posts);
  
    // Використовуємо Promise.race для отримання результату першого завершеного запиту
    const resultOfRace = await Promise.race([promise1, promise2]);
  
    console.log("Result using Promise.race:");
    console.log(resultOfRace);
  }
  
  main();
  