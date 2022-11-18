const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const filteredNums = numbers.filter((abc) => abc % 2 !== 0);

// console.log(filteredNums);

const mapped = filteredNums.map((itemms) => itemms + 1);

console.log(mapped);
