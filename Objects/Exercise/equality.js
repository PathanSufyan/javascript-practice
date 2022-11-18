let address1 = new CreateAddress("Lane: 4", "Nanded", 431602);
let address2 = new CreateAddress("Lane: 4", "Nanded", 431602);
let address3 = address1;
// Constuctor Function
function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

function areSame(address1, address2) {
  return address1 === address2;
}
