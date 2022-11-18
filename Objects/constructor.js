//Pascal Notation: ex. OneTwoThree; every word in the name starts with capital letter

function Circle(radius) {
  this.radiuss = radius; //the radius here is from the parameter which recieved from the function arguement at line: 11
  this.area = 20; //the radius here is from the parameter which recieved from the function arguement at line: 11
  console.log("check this--->", this);
  this.draw = function () {
    console.log("check this in method-->", this);
  };
  return this;
}

const circle = new Circle(5);
console.log(circle);

// NEW is a key word here, it basically creates a new empty objects and then it refers to
//THIS key word in the constructor function and based on the keys it gives a new object.
