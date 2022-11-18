//Street
//City
//Zip Code
//create a function showAddress(address)

const address = {
  street: "Lane: 4",
  city: "Nanded",
  zipCode: 431602,
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}
showAddress(address);
