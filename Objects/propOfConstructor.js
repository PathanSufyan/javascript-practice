//every object in javascript has a property called constructor and that references to
//construct or create the object

//-------------------Contructor Function--------------------------

function Circle(radius) {
  this.radius = radius;
  this.draw = function adil() {
    console.log(draw);
  };
  return this;
}

const another = new Circle(5); //if you console another.constructor in browser,
//you will see the method with the object was created.
console.log(another);

//---------------------Factory Function-------------------------

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draww");
    },
  };
}

const circle1 = createCircle(2); //if you console circle1.constructor in browser,
//you will see a function that returns the object.
