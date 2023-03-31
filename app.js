
//Object Destructuring 1
// 8
// 1846
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;
// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?


//Object Destructuring 2
//yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
//   let {numPlanets, ...discoveryYears} = planetFacts;
//   console.log(discoveryYears); // ?

//Object Destructuring 3
  //What does the following code return/print?
  //'Your name is Alejandro and you like purple'
  //'Your name is Melissa and you like green'
  //'your name is undefined and you like green'
//   function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
//   getUserData({firstName: "Melissa"}) // ?
//   getUserData({}) // ?



//Array Destructuring 1
//Maya
//Marisa
//Chi
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?


// Array Destructuring 2
//Raindrops on roses
//whiskers on kittens
//"Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings//

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // ?
//   console.log(whiskers); // ?
//   console.log(aFewOfMyFavoriteThings); // ?


// Array Destructuring 3
//[10,30,20]
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ?



//In this exercise, you’ll refactor some ES5 code into ES2015.

// const obj = {
//     numbers:{
//         a:1,
//         b:2
//     }
// };
// const {a,b} = obj.numbers

//ES2015 One-Line Array Swap with Destructuring
// [arr[0],arr[1]] = [arr[1], arr[0]]


//race results
//first: "Tom", second: "Margaret", third: "Allison", rest ["David", "Pierre"]
// const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})