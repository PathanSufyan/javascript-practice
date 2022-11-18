const circle = {
  radius: 1,
  draw: function draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  //for in loop
  console.log(key, circle[key]);
}

// for (let key of circle) {
//   //cannot loop object with for of loop
//   console.log("--", key, circle[key]); //throws an error; for of loop is for arrays
// }

for (let key of Object.keys(circle)) console.log("-as-", key, circle[key]);

//objects can be iterated with for of loop if you use built in methods such as below:
//Object.keys
//Object.entries
