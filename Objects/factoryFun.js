// Object Oriented Programming (OOP)

//If objects have logic you need to create objects with factory or constructor functions.

//Factory Production: just like a factory, this function produces objects.

// function is named camelCased

function createCircle(radius) {
  return {
    radius, //if a key and dynamic value are named the same,
    // you can just write the dynamic value: radius: radius,

    draw() {
      //no need of declaring with the FUNCTION key word either.
      console.log("draww");
    },
  };
}

const circle1 = createCircle(2);
console.log(circle1);

const circle2 = createCircle(4);
console.log(circle2);
