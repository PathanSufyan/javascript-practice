//with brean key word you jump out of the loop
//with continue key word you jump to the next iteration

console.log("Break");

//when a is equal to 3 as conditioned below then the loop will break.

let a = 0;
while (a <= 5) {
  if (a === 3) {
    break;
  }
  console.log(a);
  a++;
}

console.log("Continue");

//if i is an even number as shown below then the iterationo will skip and jump to the next
//  and you get all odd numbers as long as i is less than or equal to 10 as conditioned.

let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
