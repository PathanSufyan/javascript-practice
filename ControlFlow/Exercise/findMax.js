//finding out the bigger number

//without writing a function=============

let big = max(12, 13);
console.log(big);

//with function==========================

// ----------------1-------------------

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(5, 4));

// ---------------------2---------------------

function maximum(x, y) {
  if (x > y) return x;
  return y;
}
console.log("clean ==>", maximum(3, 4));

// ------------------------3----------------------

// let maxi = max(11, 12);
// console.log("test====>", maxi);

function maxi(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log("optimised ==>", maxi(11, 12));
