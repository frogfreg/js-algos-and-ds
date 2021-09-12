const LinkedList = require("../linked-list/linkedList.js");

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  isEmpty() {
    if (this.linkedList.head) {
      return false;
    } else {
      return true;
    }
  }

  toString() {
    return this.linkedList.toString();
  }
}

const myQueue = new Queue();

myQueue.enqueue(2);
myQueue.enqueue(1);
myQueue.enqueue(3);

console.trace();
console.log(myQueue.toString());
