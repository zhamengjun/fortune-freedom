let [x, ...y] = [1, 2, 3, 4];
// [ 2, 3, 4 ]
console.log(y);


// function foo(x, ...args) {
//   // [ 2, 3, 4 ]
//   console.log(args);
// }
//
// foo(1, 2, 3, 4);


// 不定参数的求和

// rest参数
// function foo(...args) {
//   let sum = 0;
//   args.forEach(item => {
//     sum += item;
//   });
//   return sum;
// }
//
// console.log(foo(1, 2, 3));


// // 数组的合并
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// // ES5
// // Array.prototype.push.apply(arr1, arr2);
//
// // ES6
// arr1.push(...arr2);
//
// console.log(arr1);


function param() {
  function foo() {
    console.log(foo.name);
  }
// foo
  foo();

// anonymous
  console.log((new Function()).name);

  function f(x, y) {
    console.log(this, x, y);
  }

  f.bind({name: 'a'}, 1, 2)();

// bound f
  console.log(f.bind({}).name);

// bound
  console.log((function () {}).bind({}).name);
}

// // NaN
// console.log(5 - 'a');
// let arr = [1, 2, 3, 4, 5, NaN];
// // 3
// console.log(arr.indexOf(4));
// // -1
// console.log(arr.indexOf(NaN));
// // false
// console.log(NaN == NaN);
// // true
// console.log(arr.includes(NaN));


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
