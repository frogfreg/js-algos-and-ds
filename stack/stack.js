const LinkedList = require("../linked-list/linkedList.js");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.prepend(value);
  }

  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  isEmpty() {
    if (this.linkedList.head === null) {
      return true;
    } else {
      return false;
    }
  }

  toArray() {
    return this.linkedList.toArray();
  }

  toString() {
    return this.linkedList.toString();
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.toArray());
console.log(stack.toString());

// let currentNode = stack.linkedList.head;

// while (currentNode) {
//   console.log(currentNode.value);
//   currentNode = currentNode.next;
// }
