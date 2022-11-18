//Equality---------------------------------------

let b = 10;
//Type: strict equality (checks type and value both)
console.log(b === 10); //True
console.log(b !== 10); //False (because b is equal to 10)

console.log(2 === 2); //True
console.log(2 === "2"); //False

//Type: Lose equality ()
console.log(2 == 2); //True
console.log(2 == "2"); //True
console.log(true == 1); //True (because true has a value of 1 and the number is converted into boolean value)
console.log(false == 0); //True (False has a value of 0)
