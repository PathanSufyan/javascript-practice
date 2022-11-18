//Show address with constructor function and factory function

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let address1 = createAddress("Lane: 4", "Nanded", 431605);
console.log(address1);

function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
let address2 = new CreateAddress("Lane: 4", "Nanded", 431602);

console.log(address2);
