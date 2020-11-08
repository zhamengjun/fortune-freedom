let arr = [1, 3, 4, 4, 3];
// 遍历数组元素
for (let item of arr) {
  console.log(item);
}
// 遍历数组元素，同上
for (let item of arr.values()) {
  console.log(item);
}
// 遍历数组的key
for (let item of arr.keys()) {
  console.log(item);
}
// 遍历数组的元素和key
for (let [index, item] of arr.entries()) {
  console.log(index, item);
}

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
