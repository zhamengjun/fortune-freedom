## 知识点


## LeetCode

### 链表两数相加
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例**：

    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 0 -> 8
    原因：342 + 465 = 807

**解题步骤**：

1. 新建一个空链表。
2. 遍历被相加的两个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位去相加。

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;

  let carry = 0;
  while(p1 || p2) {
    let v1 = p1 ? p1.val : 0;
    let v2 = p2 ? p2.val : 0;
    let v3 = v1 + v2 + carry;

    carry = Math.floor(v3 / 10);
    p3.next = new ListNode(v3 % 10);

    // 移动指针（考虑其中有一个为空指针的情况）
    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
    p3 = p3.next;
  }

  // 最后两位相加存在进位
  if(carry) {
    p3.next = new ListNode(carry);
  }
  return l3.next;
};
```

### 删除排序链表中的重复元素

**解题思路**

1. 因为链表是有序的，所以重复元素一定相邻
2. 遍历链表，如果当前链表元素和下一个链表元素相同，则删除下一个链表元素值

**解题步骤**

1. 遍历链表，如果发现当前链表元素和下一个链表元素相同，则删除下一个链表元素值
2. 遍历结束，返回原链表的头部

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let p = head;

    while (p && p.next) {
        if(p.val === p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};
```
