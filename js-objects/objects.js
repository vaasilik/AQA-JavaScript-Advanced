// TASK 1
// Створюємо порожній об'єкт automationQA
const automationQA = {};

// Додаємо властивості до об'єкта за допомогою крапок чи []
automationQA.programmerName = "Max";
automationQA.programmingLanguages = "JS";
automationQA.age = 25;
automationQA.languages = ["English", "Spanish", "Ukrainian"];
automationQA.preferences = { basicPreferences: "table" };

// Виводимо об'єкт automationQA у консоль
console.log(automationQA);

// TASK 2
// Створюємо об'єкт room та додаємо властивості
const room = {
    name: "Living Room",
    size: 200, // приклад числового значення для розміру кімнати
    window: true // приклад булевого значення для вікна (true означає, що вікно є)
  };
  
// Виводимо значення name та window у консоль
console.log("Name:", room.name);
console.log("Window:", room.window);

// TASK 3
// Створюємо об'єкт movie з властивостями
const movie = {
    title: "Guardians of the Galaxy", // Назва фільму
    releaseYear: 2014, // Рік виходу
    genre: "Science Fiction", // Жанр
    actors: {
      mainRole: "Chris Pratt", // Головна роль
      supportingRole: "Zoe Saldana" // Роль підтримки
    },
    director: "James Gunn" // Режисер
  };
  
  // Замінюємо жанр та назву фільму
  movie.genre = "Action-Adventure";
  movie.title = "Guardians of the Galaxy Vol. 1";
  
  // Додаємо 2 додаткові властивості
  movie.runtime = "121 minutes"; // Тривалість
  movie.language = "English"; // Мова
  
  // Видаляємо title з об'єкту movie
  delete movie.title;
  
  // Виводимо оновлений об'єкт movie у консоль
  console.log(movie);  

// TASK 4
const englishBooks = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925
    }
  ];
  
  for (let i = 0; i < englishBooks.length; i++) {
    const book = englishBooks[i];
  
    if (book.title === "The Great Gatsby") {
      // Пропускаємо ітерацію, якщо title є "The Great Gatsby"
      continue;
    }
  
    if (book.year > 1940) {
      // Виводимо ключ та властивість, якщо year більше 1940
      console.log(`Key: year, Value: ${book.year}`);
    }
  
    if (book.author === "George Orwell") {
      // Замінюємо автора, якщо це George Orwell
      book.author = "New Author";
    }
  }
  
  // Виводимо оновлений масив об'єктів englishBooks
  console.log(englishBooks);

// TASK 5
// Створюємо вкладений об'єкт з іншими властивостями
const nestedObject = {
    name: "Maryna",
    age: 24,
    contact: {
      email: "maryna1111@gmail.com",
      phone: "+1234567890"
    }
  };
  
  // Проходимося по властивостях вкладеного об'єкта циклом
  for (const key in nestedObject.contact) {
    if (nestedObject.contact.hasOwnProperty(key)) {
      const value = nestedObject.contact[key];
      console.log(`${key}: ${value}`);
    }
  }

// TASK 6
// Створюємо об'єкт користувача
const user = {
    name: "Maria Petrova",
    age: 28,
    email: "mariamaria@gmail.com",
    address: {
      city: "Kyiv",
      postalCode: "313456"
    }
  };
  
  // Функція для отримання інформації про користувача
  function getUserInfo({ name, age }) {
    return `Name: ${name}, Age: ${age}`;
  }
  
  // Функція для отримання повної адреси користувача
  function getFullAddress({ email, address: { city, postalCode } }) {
    return `Email: ${email}, Address: ${city}, ${postalCode}`;
  }
  
  // Виводимо інформацію про користувача та адресу
  console.log(getUserInfo(user));
  console.log(getFullAddress(user));
  