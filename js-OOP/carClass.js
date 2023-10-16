class CarClass {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.#speed = 0; // Private speed field
      this.#color = ""; // Private color field
    }
  
    getCarInfo() {
      return `Car Info: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.#color}`;
    }
  
    accelerate(speed) {
      this.#speed += speed;
    }
  
    brake(speed) {
      if (this.#speed >= speed) {
        this.#speed -= speed;
      } else {
        this.#speed = 0;
      }
    }
  }
  
  class AudiClass extends CarClass {
    constructor(make, model, year, color) {
      super(make, model, year);
      this.#color = color; // Set the private color field
    }
  
    getCarInfo() {
      return super.getCarInfo();
    }
  
    get myCurrentColor() {
      return this.#color; // Access the private color field
    }
  
    set myCurrentColor(color) {
      this.#color = color; // Modify the private color field
    }
  }
  
  const myAudi = new AudiClass("Audi", "A4", 2022, "Blue");
  console.log(myAudi.getCarInfo());
  
  myAudi.accelerate(60);
  console.log(`Current Speed: ${myAudi.#speed} km/h`); // Access private speed field
  
  myAudi.brake(20);
  console.log(`Current Speed: ${myAudi.#speed} km/h`); // Access private speed field
  
  myAudi.myCurrentColor = "Red";
  console.log(`New Color: ${myAudi.myCurrentColor}`); // Access and modify private color field
  
  console.log(myAudi.getCarInfo());
  