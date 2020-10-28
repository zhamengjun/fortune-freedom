### JS Web API

> - JS基础知识，规定语法（ECMA 262标准）
> - JS Web API，网页操作的API（W3C标准）

#### DOM节点操作

##### 获取DOM节点

```javascript
// 1. 根据id获取，元素
const div1 = document.getElementById('div1');

// 2. 根据标签获取， 集合
const divList = document.getElementsByTagName('div');

// 3. 根据类名获取，集合
const containerList = document.getElementsByClassName('.container');

// 4. 根据querySelector, 集合
const pList = document.querySelectorAll('p');
```

##### DOM节点的property

通过对象属性操作。修改对象属性，不会体现到html结构中。

```javascript
// 获取p标签列表
const pList = document.querySelectorAll('p');
const p = pList[0]; 

// 获取样式
console.log(p.style.width);
// 修改样式
p.style.width = '100px';
// 获取class
console.log(p.className);
// 修改class
p.className = 'p1';

// 获取nodeName
console.log(p.nodeName);
// 获取nodeType
console.log(p.nodeType);
```

##### DOM节点的attribute

通过getAttribute和setAttribute来修改。修改html属性，会改变html结构。

```javascript
const pList = document.querySelectorAll('p');
const p = pList[0]; 

p.getAttribute('data-name');
p.setAttribute('data-name', 'mark');

p.getAttribute('style');
p.setAttribute('style', 'font-size: 30px;');
```


#### DOM结构操作

##### 新增/插入节点

```javascript
const div1 = document.getElementById('div1');
// 创建新节点
const p1 = document.createElement('p');
p1.innerHTML = 'this is p1';

// 添加新节点
div1.appendChild(p1);

// 移动已有节点
const p2 = document.getElementById('p2');
div1.appendChild(p2);
```
