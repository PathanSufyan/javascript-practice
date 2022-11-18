const random = { age: 20, title: "a" };
console.log(random.age);
console.log(random["title"]);

const random2 = ["abc", "xyz", "sadas"];
console.log(random2[1]);
//for in helps you iterate over an object targetting the keys.
//it can also iterate over an array but that is not a good practice.

const person = {
  name: "Mak",
  age: 25,
};

// for (let key in person) {
//   console.log(key, person[key]);
// }

const colors = ["red", "green", "blue"];

// for (let items in colors) {
//   console.log(items, colors[items]);
// }

const numbers = [100, 200, 300, 400];
// Indexes: 100=0, 200=1, 300=2, 400=3

for (let anything of numbers) {
  console.log(anything + 5);
}

const arr = [100, 200, 300, 400, 500];

for (let any of arr) {
  console.log("any---", any);
}

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }\

let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 0);
