const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

const result = [first, second];
console.log(result);

const spreaded = [...first, ...second];
console.log(spreaded);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("if", i);
  } else {
    console.log("else--", i);
  }
}
