
//Question 1, part 1

let firstColor, secondColor, otherColors;

const colors = ["white", "blue", "yellow", "black", "red", "green"];

[firstColor, secondColor] = colors;

console.log(firstColor); // 'should be white'
console.log(secondColor); // 'should be blue'

[firstColor, secondColor, ...otherColors] = ["white", "blue", "yellow", "black", "red", "green"];

console.log(" ");
console.log(otherColors); // should be ["yellow", "black", "red", "green"]

//Part 2

let cold = ['autumn', 'winter'];
let warm = ['spring', 'summer'];


let seasons = ['Cool!', ...cold, ...warm, 'Super hot'];

console.log(" ");
console.log(seasons);

//Part 3

let nums = [1, 2, 3, 4, 45, 5, 6];

let maximum = Math.max(1,2,3,4,45,5,6);

console.log(" ");
console.log("Maximum = ", maximum);

//or using the spread operator ...

let max = Math.max(...nums);

console.log(" ");
console.log("Maximum = ", max);


//Part 4

let nums2 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];

//a

// let squaredNums = [];
//
// for(let n of nums2){
//     let n2 = n * 2;
//     squaredNums.push(n2);
// }
//
//  console.log("");
//  console.log("Numbers: ", nums2);
//  console.log("");
//  console.log("Squared Numbers: ", squaredNums);

//Part 4, b

let squaredNums = nums2.map(n => n*2);

console.log("");
console.log("Numbers: ", nums2);
console.log("Squared Numbers: ", squaredNums);

//Part 5

let nums3 = [11, 22, 33, 46, 75, 86, 97, 98];

let squaredEvenNumbers = nums3.filter(num => num % 2 == 0).map(num => Math.pow(num,2));
console.log("");
console.log("Squared Even Numbers: ", squaredEvenNumbers);

let sum = nums3.reduce((sum, num) => sum + num);
console.log("");
console.log("Sum of Nums array: ", sum);

//Part 6

let nums4 = [25, 45, 55, 77, 88, 99];

let squareAndSum = nums4.map(n2 => Math.pow(n2, 2)).reduce((sum2, n2) => sum2 + n2);

console.log("");
console.log("Sum of Squared Nums: ", squareAndSum);

let average = nums4.reduce((sum3, n3) => (sum3 + n3)/6);

console.log("");
console.log("Average: ", average);

//Part 7

let numbers = [18,47,56,65,47,73,28,18];

let ascending = numbers.sort((a,b) => a - b);

// let descending = numbers.sort((a, b) => b - a);

console.log("");
console.log("Ascending: ", ascending);

// console.log("Descending: ", descending);


//comment ascending, uncomment descending and then run it

