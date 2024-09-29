let car = {
  make: "Toyoto",
  model: "Camry",
  year: "2020",

  start: function () {
    return `${this.make}  car got startted in ${this.year}`;
  },
};

// console.log(car.start());

function person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new person("john doe", 20);

// console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} make a sound`;
};

let cow = new Animal("cow");
// console.log(cow.speak());

class Vehical {
  constructor(make, model) {
    this.make = make;
    this.model = model;
}
    start()  {
        return `${this.model} is a car from ${this.make}`;
    }
}


class Car extends Vehical {
    drive(){
        return `${this.make} : This is an inheritance Example`;
    }
}

let myCar = new Car("Toyoto" , "Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());


// Encapsulation

class BankAccount {
    #balance = 0;

    deposit (amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.balance);
// console.log(account.getBalance());


//polymorphism

class Bird {
     fly() {
        return `Flying..`;
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguin can't fly`
    }
}

let bird = new Bird();
let penguin = new Penguin()

// console.log(bird.fly());
// console.log(penguin.fly());

class Calculator{
    add(a,b){
        return a+b;
   }
}

let minCal =new Calculator();
// console.log(minCal.add(5,6));