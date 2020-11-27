function test17() {
  function p1() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(100);
      }, 1000)
    });
  }

  function p2() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        reject('err');
      }, 100)
    });
  }

  function p3() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(300);
      }, 1000)
    });
  }

  Promise.race([p1(), p2(), p3()]).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  });
}

function test16() {
  function p1() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(100);
      }, 1000)
    });
  }

  function p2() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(200);
      }, 1000)
    });
  }

  function p3() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(300);
      }, 1000)
    });
  }

  Promise.all([p1(), p2(), p3()]).then(res => {
    console.log(res)
  });
}

function test15() {
  function muti(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num * num);
      }, 1000);
    })
  }

  const nums = [1, 2, 3];

  nums.forEach(async (i) => {
    const res = await muti(i);
    console.log(res);
  });

  !(async function() {
    for(let i of nums) {
      const res = await muti(i);
      console.log(res);
    }
  })();
}

function test14() {
  async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end')
  }

  async function async2() {
    console.log('async2')
  }

  console.log('script start');

  async1();

  console.log('script end');
}

function test13() {
  !(async function() {
    const p1 = Promise.reject('err');
    try {
      const res = await p1;
      console.log('res: ' + res)
    } catch (e) {
      console.log(e)
    }
  })();
}

function test12() {
  async function fn1() {
    return Promise.resolve(100);
  }

  let p1 = fn1();
  console.log(p1);
  p1.then(data => {
    console.log(data)
  });
}

function test11() {
  function p1() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(100);
      }, 1000)
    });
  }

  function p2() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(200);
      }, 1000)
    });
  }

  !(async function() {
    let a = await p1();
    let b = await p2();
    console.log(a + b);
  })();
}

function test10() {
  const p1 = Promise.reject('my error').catch(err => {
    console.log(err);
    throw new Error('catch err');
  });
  console.log(p1);

  p1.then(() => {
    console.log(100);
  }, () => {
    console.log('some catch err')
  });
}

function test9() {
  const p1 = Promise.resolve().then(() => {

  });
  p1.then(() => {
    console.log('123');
  });

  const p2 = Promise.resolve().then(() => {
    throw new Error('then error');
  });
  p2.then(() => {
    console.log('456');
  }).catch(err => {
    console.log('err: ', err)
  });
}

function test8() {
  const p1 = Promise.resolve(100);
  p1.then(data => {
    console.log('data', data);
  }).catch(err => {
    console.error('err', err);
  });


  const p2 = Promise.reject(100);
  p2.then(data => {
    console.log('data2', data);
  }).catch(err => {
    console.error('err2', err);
  });

  const p3 = new Promise((resolve, reject) => {
    console.log('pending');
  });
  p3.then(data => {
    console.log('data3', data);
  }).catch(err => {
    console.error('err4', err);
  });
}

function test7() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  });

  new Promise((resolve, reject) => {
    console.log(3);
    resolve()
  }).then(() => {
    console.log(6);
  }).then(() => {
    console.log(7);
  });

  Promise.resolve().then(() => {
    console.log(4);
  }).then(() => {
    console.log(8);
  });

  console.log(5);
}

function test6() {
  Promise.resolve().then(() => {
    console.log(1)
  }).catch(() => {
    console.log(2)
  }).then(() => {
    console.log(3)
  });
}

function test5() {
  let myPromise = new Promise((resolve, reject) => {
    console.log(1);
  });

  console.log(2);
}

function test4() {
// call stack
  console.log('a1');
// web api
  setTimeout(function () {
    // event loop
    // callback queue
    console.log('a2');
  }, 0);
// call stack
  console.log('a3');
}

function test3() {
  Function.prototype.bind1 = function () {
    const args = Array.prototype.slice.call(arguments);
    const t = args.shift();
    const self = this;

    return function () {
      self.apply(t, args);
    }
  };

  function f() {
    console.log(this);
  }

  f.bind1({'name': 'Mark'})();
}

function test2() {
  function print(fn) {
    let a = 200;
    fn();
  }

  let a = 120;
  function fn() {
    console.log(a);
  }

  print(fn);
}

function test() {
  function create() {
    let a = 100;
    return function () {
      console.log(a);
    }
  }

  let fn = create();
  let a = 200;

  fn();
}
