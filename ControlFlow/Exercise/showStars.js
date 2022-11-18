showStars(10);

function showStars(rows) {
  for (let row = 1; row <= 10; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
