module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended" // Додаємо плагін Prettier
    ],
    "overrides": [
      {
        "files": [".eslintrc.js", ".eslintrc.cjs"],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "rules": {
      "semi": ["error", "always"], // Додано обов'язкову крапку з комою
      "quotes": ["error", "single"], // Використовувати одинарні кавички
      "indent": ["error", 2], // Розмір відступу - 2 пробіли
      "no-console": "warn", // Попередження, коли використовується console.log
      "no-unused-vars": "warn" // Попередження про невикористані змінні
      // Додавайте інші правила ESLint за потреби
    }
  };
  