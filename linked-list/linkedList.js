class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    const currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return this;
    }
    let currentNode = this.head;
    let prev = currentNode;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        if (currentNode.next === this.tail) {
          this.tail = currentNode;
        }
        currentNode.next = currentNode.next.next;
        return this;
      }
      currentNode = currentNode.next;
    }

    return this;
  }

  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      const deletedHead = { ...this.head };
      this.head = null;
      this.tail = null;
      return deletedHead;
    }
    const deletedHead = { ...this.head };
    this.head = this.head.next;
    return deletedHead;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    if (this.tail.value === value) {
      return this.tail;
    }

    return null;
  }

  toArray() {
    const nodes = [];

    if (!this.head) {
      return [];
    }
    let currentNode = this.head;

    while (currentNode.next) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    nodes.push(this.tail.value);

    return nodes;
  }

  toString() {
    return this.toArray().join("");
  }
}

module.exports = LinkedList;

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
