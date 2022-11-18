function isLandscaped(width, height) {
  return width > height ? true : false;
}
console.log(isLandscape(400, 350));

//the below function is oprimised: no need of else condition or true and false as the
//comparison will eventually return a boolean value.

function isLandscape(width, height) {
  return width > height;
}
console.log(isLandscape(300, 350));
