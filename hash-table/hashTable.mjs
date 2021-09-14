import LinkedList from "../linked-list/linkedList.js";

class HashTable {
  constructor(bucketsNumber = 32) {
    this.buckets = [];

    for (let i = 0; i < bucketsNumber; i++) {
      this.buckets.push(new LinkedList());
    }
  }

  hash(key) {
    let hashCode = 0;

    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i);
    }

    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key);

    const linkedList = this.buckets[index];

    let currentNode = linkedList.head;

    while (currentNode != null) {
      if (key in currentNode.value) {
        break;
      }
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      linkedList.append({ [key]: value });
    } else {
      currentNode.value[key] = value;
    }
  }

  get(key) {
    const index = this.hash(key);

    const linkedList = this.buckets[index];

    let currentNode = linkedList.head;

    while (currentNode) {
      if (key in currentNode.value) {
        break;
      }

      currentNode = currentNode.next;
    }

    if (!currentNode) {
      return undefined;
    } else {
      return currentNode.value[key];
    }
  }

  delete(key) {
    const index = this.hash(key);

    const linkedList = this.buckets[index];

    let currentNode = linkedList.head;

    if (!currentNode) {
      return false;
    }

    if (key in currentNode.value && !currentNode.next) {
      linkedList.head = null;
      linkedList.tail = null;
      return true;
    }

    if (key in currentNode.value) {
      linkedList.head = linkedList.head.next;
      return true;
    }

    while (currentNode.next) {
      if (key in currentNode.next.value) {
        break;
      }
      currentNode = currentNode.next;
    }

    if (!currentNode.next) {
      return false;
    } else if (currentNode.next === linkedList.tail) {
      linkedList.tail = currentNode;
      currentNode.next = null;
      return true;
    } else {
      currentNode.next = currentNode.next.next;
      return true;
    }
  }
}

export default HashTable;

// const myHashTable = new HashTable(5);

// myHashTable.set("one", 1);
// myHashTable.set("oe", 2);
// myHashTable.set("e", 3);
// myHashTable.set("oi", 4);
// myHashTable.set("oe", 5);
// myHashTable.set("oei", 6);

// console.log(myHashTable.get("one"));
// console.log(myHashTable.get("oe"));
// console.log(myHashTable.get("e"));
// console.log(myHashTable.get("oi"));
// console.log(myHashTable.get("hoe"));

// console.dir(myHashTable.buckets[2]);
// console.dir(myHashTable.buckets[2].head);
// console.dir(myHashTable.buckets[2].head.next);
// console.dir(myHashTable.buckets[2].head.next.next);

// myHashTable.delete("oei");

// // console.dir(myHashTable);

// console.dir(myHashTable.buckets[2]);
// console.dir(myHashTable.buckets[2].head);
// console.dir(myHashTable.buckets[2].head.next);
// console.dir(myHashTable.buckets[2].head.next.next);
