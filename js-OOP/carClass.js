// TASK 4
class CarClass {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    getCarInfo() {
      return `Car Info: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    }
  
    accelerate(speed) {
      this.speed += speed;
    }
  
    brake(speed) {
      if (this.speed >= speed) {
        this.speed -= speed;
      } else {
        this.speed = 0;
      }
    }
  }
  
  class AudiClass extends CarClass {
    constructor(make, model, year, color) {
      super(make, model, year);
      this.color = color;
    }
  
    getCarInfo() {
      return super.getCarInfo();
    }
  
    myCurrentColor() {
      return this.color;
    }
  
    set myCurrentColor(color) {
      this.color = color;
    }
  }
  
  const myAudi = new AudiClass("Audi", "A3", 2018, "Black");
  console.log(myAudi.getCarInfo());
  
  myAudi.accelerate(60);
  console.log(`Current Speed: ${myAudi.speed} km/h`);
  
  myAudi.brake(20);
  console.log(`Current Speed: ${myAudi.speed} km/h`);
  
  myAudi.myCurrentColor = "Black";
  console.log(`New Color: ${myAudi.myCurrentColor}`);
  
  console.log(myAudi.getCarInfo());