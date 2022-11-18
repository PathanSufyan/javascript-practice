//Very similar to while loop and the variable is declared externally.

// 1. do {your statements here along with iteration if any}
//2. while (Condition Here)

// Note: in other loops, if the initial condition is not met, the iteration won't happen
// and none of the statements will be executed.
// Note: in do-while loop the iteration will happen at least once even if the condition
// is not met. As the syntax shows iteration will start and then the condition is checked.

let i = 9;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// the above do while prints 9

// let i = 7;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

//the above while loop prints nothing as the condition is not met.
