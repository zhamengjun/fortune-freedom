## 函数的参数

### 参数的默认值

```javascript
function(x, y) {
  // 不严谨，不如 y为 0
  y = y || 100;
  console.log(x, y)
}

// 默认值，有默认值的参数放到函数的最后面
function(x, y = 100) {
  console.log(x, y);
}
```


### 与解构赋值结合

```javascript
function foo({x, y = 100}) {
  console.log(x, y);
}

// undefined 100
foo({});

// TypeError: Cannot read property 'x' of undefined.
foo();
```


### 函数length属性

没有指定默认值的参数个数


### 作用域

参数形成一个作用域

```javascript
let x = 1;
function foo(x, y = x) {
  console.log(y);
}

// 2
foo(2);

// 沿着作用域链查找
let x = 1;
function bar(y = x) {
  let x = 2;
  console.log(y);
}
// 1
bar();
```

### 函数的name属性

```javascript
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
```
