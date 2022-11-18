// Object Oriented Programming (OOP)

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw(); //Calling a draw METHOD of the object not a function.

// function draw() {}
// function move() {}
