//In this example from getters and setters the method with set key word received a value in form of a string. What happens if it is in some
// other form like a boolean

const person3 = {
  firstName: "Afroz",
  lastName: "Pathan",

  get fullName() {
    return `check P3 get-- ${person3.firstName} ${person3.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") return;
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log("check P3 with get--", person3.fullName);
person3.fullName = true;

// person3.fullName = true; -- this throws an error as the split method used in set method doesn't work for booleans
// person3.fullName = null or undefined; -- the same goes for null and undefined

// This is where you add error handling. It us usually written at the beginning of a function or method
//It is also called defensive programming.
// That is why I have added the If condition at line no.12

console.log("check updated P3 with set--", person3);
