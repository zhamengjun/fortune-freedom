## 数组的遍历方式


### ES5中数组遍历方式

- for( )

支持`break;`和`continue;`语句

```javascript
let arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'b') continue;
  if (arr[i] === 'c') break;
  console.log(arr[i]);
}
```


- forEach( )

没有返回值，针对数组的每个元素调用函数。

不支持`break;`和`continue;`语句

```javascript
let arr = ['a', 'b', 'c'];
arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
```


- map( )

```javascript
let arr = [1, 2, 3];
let result = arr.map((item, index, arr) => {
  console.log(item, index, arr);
  return item * 3;
});
```

返回新的Array，每个元素为调用函数的结果。


- filter( )

返回符合条件的元素Array。

```javascript
let arr = ['a', 'b', 'c'];
let result = arr.filter((item, index, arr) => {
  console.log(item, index, arr);
  return item !== 'b';
});
```


- some( )

返回Boolean，判断数组是否有符合条件的元素。

```javascript
let arr = ['a', 'b', 'c'];
let result = arr.some((item, index, arr) => {
  console.log(item, index, arr);
  return item === 'b';
});
```


- every( )

返回Boolean，判断数组每个元素是否都符合条件。

```javascript
let arr = ['b', 'b', 'b'];
let result = arr.every((item, index, arr) => {
  console.log(item, index, arr);
  return item === 'b';
});
```


- reduce()

接受一个函数作为累加器，这个函数必须接收两个参数，它把结果继续和序列的下一个元素做累积运算。

返回计算结果，可以设置初始值。

```javascript
// 累加运算
let arr = [1, 3, 5, 7, 9];
let result = arr.reduce(function (prev, cur, index, array) {
  return prev + cur;
}, 100);

// 求最大值
let arr = [1, 3, 15, 7, 9];
let result = arr.reduce(function (x, y) {
  return Math.max(x, y);
});

// 去重
let arr = [1, 3, 4, 4, 3];
let result = arr.reduce(function (prev, cur) {
  prev.indexOf(cur) === -1 && prev.push(cur);
  return prev;
}, []);
```


- for in

原型的方法也会遍历。

```javascript
let arr = ['a', 'b', 'c'];
Array.prototype.$addDog = function () {
  console.log('add dog');
};
for (let item in arr) {
  console.log(item);
}
```


### ES6中数组遍历方式

- find( )

返回数组第一个满足条件的元素。

```javascript
let arr = [1, 3, 4, 4, 3];
let result = arr.find(function (item) {
  return item === 4;
});
```


- findIndex( )

返回数组第一个满足条件的元素索引值。

```javascript
let arr = [1, 3, 4, 4, 3];
let result = arr.findIndex(function (item) {
  return item === 4;
});
```

- for of
  - values()
  - keys()
  - entries()

```javascript
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
```


## 数组的扩展

### 类数组/伪数组

并不是真正意义上数组，但有length属性。`instanceof`检测为false。并不具备数组的方法，比如push。

- 哪些是伪数组

```javascript
// 1. HTMLCollection
let divs1 = document.getElementsByTagName('div');
console.log(divs)

// 2. HTMLCollection
let divs2 = document.getElementsByClassName('.xx');
console.log(divs1);

// 3. NodeList
let divs3 = document.querySelectorAll('.xx');
console.log(divs3);

// 4. Arguments
function f() {
console.log(arguments instanceof Array)
}
f('mark', 'down');
```

- ES5将类数组/伪数组转换为真数组

```javascript
// slice
let arr = Array.prototype.slice.call(divs);
arr.push(123);
```


### Array.from( )

将伪数组转为真数组

```javascript
let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

let arr = Array.from(arrayLike);
console.log(arr instanceof Array);
arr.push('d');
console.log(arr);
```


### Array.of( )

数组初始化的时候使用

- 初始化数组和`new Array()`的不同

```javascript
// [1, 2] => length: 2
let arr = new Array(1, 2);
console.log(arr);

// [1, 2] => length: 2
let arr = Array.of(1, 2);
console.log(arr);

// [ <3 empty items> ] => length: 0
let arr = new Array(3);
console.log(arr);

// [3] => length: 1
let arr = Array.of(3);
console.log(arr);
```

- 传入其它类型数据，返回一个数组

```javascript
// [ 1, false, 'a', [ 1, 2 ], { a: 'a' } ]
let arr = Array.of(1, false, 'a', [1, 2], {a: 'a'});
console.log(arr);
```


### copyWithin()

用数组里某些元素，替换掉其它元素

```javascript
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(1, 3);
// [ 1, 4, 5, 4, 5 ]
console.log(arr);
```


### fill()

对数组里面元素进行填充

```javascript
// 填充
let arr = new Array(3).fill(1);
// [ 1, 1, 1 ]
console.log(arr);

// 替换
let arr = [1, 2, 3, 4, 5];
arr.fill('a', 1, 3);
// [ 1, 'a', 'a', 4, 5 ]
console.log(arr);

// 替换
let arr = [1, 2, 3, 4, 5];
arr.fill(0);
// [ 0, 0, 0, 0, 0 ]
console.log(arr);
```


### includes()

可以检测数组里是否包含`NaN`

```javascript
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
```
