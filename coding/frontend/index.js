// NaN
console.log(5 - 'a');
let arr = [1, 2, 3, 4, 5, NaN];
// 3
console.log(arr.indexOf(4));
// -1
console.log(arr.indexOf(NaN));
// false
console.log(NaN == NaN);
// true
console.log(arr.includes(NaN));


// let arr = new Array(3).fill(1);
// // [ 1, 1, 1 ]
// console.log(arr);





// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(1, 3);
// // [ 1, 4, 5, 4, 5 ]
// console.log(arr);


// [ 1, false, 'a', [ 1, 2 ], { a: 'a' } ]
// let arr = Array.of(1, false, 'a', [1, 2], {a: 'a'});
// console.log(arr);




// let arrayLike = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3
// };
//
// let arr = Array.from(arrayLike);
// console.log(arr instanceof Array);
// arr.push('d');
// console.log(arr);


// // 1. HTMLCollection
// let divs1 = document.getElementsByTagName('div');
// console.log(divs)
//
// // 2. HTMLCollection
// let divs2 = document.getElementsByClassName('.xx');
// console.log(divs1);
//
// // 3. NodeList
// let divs3 = document.querySelectorAll('.xx');
// console.log(divs3);

// function f() {
// console.log(arguments)
// }
// f('mark', 'down');

// let arr = [1, 3, 4, 4, 3];
// // 遍历数组元素
// for (let item of arr) {
//   console.log(item);
// }
// // 遍历数组元素，同上
// for (let item of arr.values()) {
//   console.log(item);
// }
// // 遍历数组的key
// for (let item of arr.keys()) {
//   console.log(item);
// }
// // 遍历数组的元素和key
// for (let [index, item] of arr.entries()) {
//   console.log(index, item);
// }

// let arr = ['a', 'b', 'c'];
//
// for (let i = 0; i < arr.length; i++) {
//
//   if (arr[i] === 'b') {
//     continue;
//   }
//
//   if (arr[i] === 'c') {
//     break;
//   }
//
//   console.log(arr[i]);
// }
//
// arr.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// Array.prototype.$addDog = function () {
//   console.log(`13`);
// };
//
// for (let item in arr) {
//   console.log(item);
// }


// let arr = [
//   {
//     id: 1,
//     val: 1
//   }, {
//     id: 2,
//     val: 2
//   }, {
//     id: 3,
//     val: 4
//   }, {
//     id: 2,
//     val: 22
//   },
// ];
// let result = arr.find(item => {
//   return item.id === 6;
// });
//
// let index = arr.findIndex(item => {
//   return item.id === 2;
// });
//
// console.log(result);
// console.log(index);
