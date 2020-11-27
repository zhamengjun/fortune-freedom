# 对象的扩展

## 属性简洁表示法

```javascript
let name = 'mark';
let obj = {
  name
}
```


## 属性名表达式

```javascript
let key = 'name';
let obj = {
  [key]: 'mark'
}
```


## Object.is()

判断两个值是否完全相等

```javascript
// true
Object.is(2, '2');

// false
NaN === NaN

// true
Object.is(NaN, NaN);
```


## in

判断当前对象是否包含某属性

```javascript
let obj = {
  name: 'mark'
};
// true
console.log('name' in obj);

let arr = [1, 2, 3];
// 当前数组下标是否有值：false
console.log(3 in arr);
```


## 对象的遍历方式

```javascript
let obj = {
  name: 'mark'
};

for (let key in obj) {
  console.log(key, obj[key]);
}

Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});

Object.getOwnPropertyNames(obj).forEach(key => {
  console.log(key, obj[key]);
});

Reflect.ownKeys(obj).forEach(key => {
  console.log(key, obj[key]);
});
```

### 判断应用类型的方法

- instanceof
- Object.Property.toString.call();
