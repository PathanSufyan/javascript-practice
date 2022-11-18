//Logical AND (&&)======================================
//Returns true only if both operands are TRUE

console.log(true && true); //True
console.log(true && false); //False
console.log(false && false); //False

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

console.log("next logical or");

//Logical OR (||)=====================================================
//Returns TRUE if any of the operands is TRUE

console.log(true || true); //True
console.log(true || false); //True
console.log(false || false); //False

let highIncome = true;
let goodCreditScore = false;

let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);

console.log("next not");

//Logical NOT (!)==============================
//Changes the boolean value from TRUE to False and False to True.

let highIncome = false;
let goodCreditScore = false;

let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);

let applicationRefused = !eligibleForLoan;

console.log(applicationRefused);
