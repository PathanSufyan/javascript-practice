const brray = [50, 100, 30];

console.log(calMark(brray));

function calMark(brray) {
  const average = baverage(brray);
  if (average < 59) return "E";
  if (average < 69) return "D";
  if (average < 79) return "C";
  if (average < 89) return "B";
  return "A";
}

function baverage(array) {
  let sum = 0;
  for (let value of array) sum += value; //sum=sum+value
  let average = sum / array.length;
  return average;
}

// const array = [80, 80, 50];

// console.log(calcMarks(array));

// function calcMarks(marks) {
//   const average = calcAverage(marks);
//   if (average <= 59) return "E";
//   if (average <= 69) return "D";
//   if (average <= 79) return "C";
//   if (average <= 89) return "B";
//   return "A";
// }

// function calcAverage(array) {
//   let sum = 0;
//   for (let value of array) sum += value;
//   let average = sum / array.length;
//   return average;
// }
