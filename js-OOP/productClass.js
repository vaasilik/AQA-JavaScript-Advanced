// TASK 3
class ProductClass {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }

  purchase(quantity) {
    if (quantity > 0 && quantity <= this.quantity) {
      this.quantity -= quantity;
      console.log(
        `Purchase of ${quantity} units of "${this.name}" successful.`,
      );
    } else {
      console.log(
        `Error: Unable to purchase ${quantity} units of "${this.name}". Insufficient stock.`,
      );
    }
  }
}

const product1 = new ProductClass('Laptop', 800, 10);
const product2 = new ProductClass('Headphones', 50, 20);
const product3 = new ProductClass('Mouse', 15, 15);

console.log(`Total price of laptops: $${product1.getTotalPrice()}`);
console.log(`Total price of headphones: $${product2.getTotalPrice()}`);
console.log(`Total price of mice: $${product3.getTotalPrice()}`);

product1.purchase(5);
product2.purchase(25);
product3.purchase(10);

console.log(`Remaining laptops in stock: ${product1.quantity}`);
console.log(`Remaining headphones in stock: ${product2.quantity}`);
console.log(`Remaining mice in stock: ${product3.quantity}`);
