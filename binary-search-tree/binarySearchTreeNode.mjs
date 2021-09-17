export default class BSTNode {
  constructor(value = null, data = null) {
    this.value = value;
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (this.value > value && this.left) {
      return this.left.find(value);
    } else if (this.value < value && this.right) {
      return this.right.find(value);
    }

    return null;
  }

  insert(value, data) {
    if (this.value < value && !this.right) {
      this.right = new BSTNode(value, data);
      this.right.parent = this;
      return this.right;
    }
    if (this.value > value && !this.left) {
      this.left = new BSTNode(value, data);
      this.left.parent = this;
      return this.left;
    }

    if (this.value > value) {
      return this.left.insert(value, data);
    }

    if (this.value < value) {
      return this.right.insert(value, data);
    }
  }
}

const node1 = new BSTNode(3, "three");

node1.insert(2, "two");
node1.insert(4, "four");
node1.insert(1, "one");
node1.insert(6, "siz");
node1.insert(5, "five");

console.dir(node1.find(6));
