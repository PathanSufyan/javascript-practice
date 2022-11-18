//String Primitive

const message = "This is   primitive string";

//You can use all the string object methods with primitive strings as well.
console.log(message.length);
console.log(message[2]);
console.log(message.includes("is"));
console.log(message);
console.log(typeof message);

//String Object

const another = new String("This is string object");
console.log(typeof another);
