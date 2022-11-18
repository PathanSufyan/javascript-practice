//This is old way

const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

const another = {};
for (let key in circle) {
  //circle object is being iterated here
  another[key] = circle[key]; //each key is stored in the empty object's key.
}

console.log("cloned", another); //cloned successful

//The new method

const another2 = Object.assign({}, circle);

console.log("new--", another2);
//This method takes first parameter as an empty object and then the objects to be cloned.

const another3 = { ...circle };

console.log("spread Operator--", another3);
