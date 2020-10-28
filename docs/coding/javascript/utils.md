### 防抖(控制次数)

```javascript

  /**
   * 防抖(控制次数)
   * @param fn
   * @param delay
   * @param isImmediate(是否立即执行)
   */
  function debounce(fn, delay = 500, isImmediate = false) {
    let timer = null;
    
    return function () {
      if (timer) {
        clearTimeout(timer);
      }

      if (!timer && isImmediate) {
        fn.apply(this, arguments);
      }

      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay);
    }
  }

```

### 节流(控制频率)

```javascript

  /**
   * 节流(控制频率)
   * @param fn
   * @param delay
   */
  function throttle(fn, delay = 100) {
    let timer = null;
    
    return function () {
      if (timer) {
        return;
      }

      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay);
    }
  }

```
