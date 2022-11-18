//Functions are objects check functionname. in console to check which methods
//it recommends.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawww");
  };
}

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function () {
    console.log("Drawww");
  }
`
);

const another = new Circle(1);

console.log(Circle.length); //shows the lenth of function (object);
console.log(Circle.name); //shows the name of the function
console.log(Circle.constructor); //shows the method

console.log(another);
