function test2() {
  let obj = {
    name: 'Mark',
    age: 28
  };
  // 对象是不可迭代对象，不能使用for of
  for (let i of obj) {
    console.log(i);
  }
}


function test1() {
  function* f() {
    for (let i = 0; i < 3; i++) {
      console.log(i);
      yield i;
    }
  }
  console.log(f());
}
