function Circle(radiuss) {
  this.radius = radiuss; //radius: 4
  this.pi = 3.14; // pi: 3.14
  this.area = function () {
    return this.pi * this.radius * this.radius;
  };
}
const result = new Circle(4); //result = {radius: 4, pi: 3.14, area()}
// console.log(result.area());

// console.log(result);

const movies = {
  title: "abc",
  tags: [1, 4, 7, 5],
  showMovie() {
    this.tags.forEach(
      function (element) {
        console.log(element, this.title);
      }.bind(this)
    );
  },
};
movies.showMovie();

function checkThis() {
  console.log("regular function", this);
}
checkThis();
