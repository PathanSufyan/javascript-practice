//While loop is very similar to for loop. The difference:
//in FOR loop the variable is a part of itself
//in WHILE loop it is declared externally

//1. while (Condition Here)
//2. statement you wanna desplay;
//3. increment in iteration

// for (let i = 0; i < 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

let i = 0;
while (i <= 10) {
  if (i % 2 === 0) console.log(i);
  i++;
}
