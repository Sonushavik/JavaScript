//  let teas= ["green tea", "black tea ","chai", "oolong", "tea"];

//  let selectedTea =[];

//  for(let i=0; i<teas.length; i++ ){
//      if(teas[i]=="chai"){
//         break;
//     }
//      selectedTea.push(teas[i])
//  }

//  console.log(selectedTea);

// let cities = ["London","New York","Paris","Berlin"];
// let visitedCities = [];

// for(let i; i<cities.length; i++){
//     if(cities[i] === "Paris"){
//         continue;
//     }
//     visitedCities.push[cities[i]];
// }

// console.log(visitedCities)



// let numbers =[1,2,3,4,5]
// let smallNumber = []

// for (const num of numbers){
//     if (num===4)
//         break;
//     smallNumber.push(num);

// }

// console.log(smallNumber);

// let teasTypes = ["chai", "green tea","herbal tea", "black tea" ];
// let preferredTea = []

// for(const tea of teasTypes){
//     if(tea === "herbal tea")
//         continue;
//     preferredTea.push(tea);
// }

// console.log(preferredTea);

// let citiesPopulation = {
//     "London" : 450000,
//     "New York " : 5000000,
//     "Paris" : 20000,
//     "Berlin" : 250000
// }

// let citiesNewPopulation= {};

// for (const city in citiesPopulation){
//     if(city === "Berlin")
//         break;
//     citiesNewPopulation[city] = citiesPopulation[city];
// }

// console.log(citiesNewPopulation);

// Prototype

// let genericCar = {
//     tyres  : 4
// };

// let tesla = {
//     driver: "AI"
// };

// Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla` , Object.getPrototypeOf(tesla));


// function Animal(species){
//     this.species = species;
// }

// Animal.prototype.sound = function(){
//     return `${this.species} makes a  sound` ;
// }

// let dog = new Animal("dog");
// console.log(dog.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name=name
}

let tea=new Drink("tea");
let coffee = Drink("coffee");