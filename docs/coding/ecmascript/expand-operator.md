# 扩展运算符与rest参数

> 扩展运算符：把数组或类数组展开成逗号隔开的值。
>
> rest参数：把逗号隔开的值组合成一个数组。


## 扩展运算符

```javascript
// 数组的合并
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// ES5
// Array.prototype.push.apply(arr1, arr2);

// ES6
arr1.push(...arr2);
```


## rest参数

**不定参数的求和**

```javascript
// ES5
function foo(x, y, z) {
  let sum = 0;
  Array.prototype.forEach.call(arguments, function (item) {
    sum += item;
  });
  return sum;
}

// ES6
function foo(x, y, z) {
  let sum = 0;
  Array.from(arguments).forEach(item => {
    sum += item;
  });
  return sum;
}

// rest参数
function foo(...args) {
  let sum = 0;
  args.forEach(item => {
    sum += item;
  });
  return sum;
}

console.log(foo(1, 2, 3));
```

**其它用途**

```javascript
// 剩余参数
function foo(x, ...args) {
  // [ 2, 3, 4 ]
  console.log(args);
}

foo(1, 2, 3, 4);


let [x, ...y] = [1, 2, 3, 4];
// [ 2, 3, 4 ]
console.log(y);
```
