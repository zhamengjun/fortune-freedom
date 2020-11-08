// 将100转换成2进制

let num = 80;
let stack = [];
while (num > 0) {
  stack.push(num % 2);
  num = Math.floor(num / 2);
}

let two = '';
while (stack.length > 0) {
  two += stack.pop();
}

console.log(parseInt(two));


// let o1 = {val: 1};
// let o2 = {val: 2};
// let o3 = {val: 3};
// let o4 = {val: 4};
// let o5 = {val: 5};
// o1.next = o2;
// o2.next = o3;
// o3.next = o4;
// o4.next = o5;
// o5.next = null;

function reverseLink(heap) {
  let p1 = heap;
  let p2 = null;

  while (p1) {
    let temp = p1.next;

    p1.next = p2;

    p2 = p1;

    p1 = temp;
  }

  return p2;
}

// let heap = reverseLink(o1);

// while (heap) {
//   console.log(heap.val);
//   heap = heap.next;
// }


function link() {
  let o1 = {val: 1};
  let o2 = {val: 2};
  let o3 = {val: 3};
  let o4 = {val: 4};
  let o5 = {val: 5};
  o1.next = o2;
  o2.next = o3;
  o3.next = o4;
  o4.next = o5;
  o5.next = null;

  let p = o1;

// 遍历链
// while (p) {
//   console.log(p.val);
//   p = p.next;
// }

// 插入数据到链
  let o6 = {val: 6};
  o4.next = o6;
  o6.next = o5;

// 遍历链
// while (p) {
//   console.log(p.val);
//   p = p.next;
// }

// 移除链

  o4.next = o5;

  while (p) {
    console.log(p.val);
    p = p.next;
  }

}
