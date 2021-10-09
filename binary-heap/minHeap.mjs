export class MinHeap {
  constructor() {
    this.heapContainer = [];
    this.heapElements = new Map();
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }
  has(item) {
    return this.heapElements.has(item);
  }
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }
  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }
  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }
  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }
  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = tmp;
  }
  isEmpty() {
    return this.heapContainer.length === 0;
  }

  find(item) {
    const foundItems = [];

    for (let [index, element] of this.heapContainer.entries()) {
      if (item === element) {
        foundItems.push(index);
      }
    }

    return foundItems;
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (
      this.hasParent(currentIndex) &&
      this.parent(currentIndex) > this.heapContainer[currentIndex]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.rightChild(currentIndex) <= this.leftChild(currentIndex)
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.heapContainer[currentIndex] <= this.heapContainer[nextIndex]) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    const firstElement = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer[this.heapContainer.length - 1];
    this.heapContainer.pop();
    this.heapifyDown();

    return firstElement;
  }
  add(data) {
    this.heapContainer.push(data);
    this.heapElements.set(data, data);
    this.heapifyUp();

    return this;
  }
  remove(data) {
    const dataToRemoveIndexes = this.find(data);
    this.heapElements.delete(data);

    if (dataToRemoveIndexes.length === 0) {
      return this;
    }

    for (let index of dataToRemoveIndexes) {
      this.swap(index, this.heapContainer.length - 1);
      this.heapContainer.pop();
      this.heapifyDown(index);
      this.heapifyUp(index);
    }
  }
}

const bHeap = new MinHeap();

bHeap.add(3);
bHeap.add(5);
bHeap.add(6);
bHeap.add(9);
bHeap.add(1);
bHeap.add(0);
bHeap.remove(0);
bHeap.add(4);
bHeap.remove(1);
bHeap.add(1);

console.log(bHeap.heapContainer);
