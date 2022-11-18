//Objects are dynamic in nature.
// You can change/update properties or methods, remove or add anything in the object.
//**Even if a variable is declared with const key word it can be changed or updated.
//but it can not be reassigned.

const circle = {
  radius: 1,
};

circle.color = "red";
circle.draw = function () {
  console.log("circle is creating");
};
circle["background"] = "No Background";

delete circle.color;

console.log(circle);
