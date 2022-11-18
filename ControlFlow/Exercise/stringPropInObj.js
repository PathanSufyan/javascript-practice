const movie = {
  title1: "a",
  releaseYear: 2019,
  director: "z",
  rating: 4.5,
};

showPropertyByString(movie);

function showPropertyByString(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
