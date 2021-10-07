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
    return this.getLeftChildIndex(parentIndex) > this.heapContainer.length;
  }
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) > this.heapContainer.length;
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
}
