//Very rarely used

//BitWise Operator OR (|)=============================

//it compares value vertically, if 1 and 0 are vertical then 1 overrides 0.
// 1 = 00000001 (decimal coverted to binary)
// 2 = 00000010
// R = 00000011
//Result of the below console is in the above line.

console.log(1 | 2); //3

//BitWise Operator AND (&)=============================

//it compares value vertically, if 1 and 0 are vertical then 0 overrides 1.
// 1 = 00000001 (decimal coverted to binary)
// 2 = 00000010
// 3 = 00000011
// R = 00000000
//Result of the 1 and 2 console is in the above line.

console.log(1 & 2); //0

// example===============================

//Imagine you have to check multiple permissions
//Read, Write, Edit
//00000100 (permission to read only)
//00000010 (permission to write only)
//00000001 (permission to edit only)
const readPermission = 4;
const writePermission = 2;
const editPermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

console.log(myPermission);

let message = myPermission & readPermission ? "yes" : "no";
console.log(message);

console.log(1 & 1);
console.log(1 | 1);
