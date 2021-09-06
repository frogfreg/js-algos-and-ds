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
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);

console.trace();
console.log(myQueue.dequeue());
console.dir(myQueue);
