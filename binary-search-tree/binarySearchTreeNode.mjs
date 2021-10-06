export default class BSTNode {
  constructor(value = null, data = null) {
    this.left = null;
    this.right = null;
    this.parent = null;

    this.value = value;
    this.data = data;
  }

  find(searchVal) {
    if (this.value === searchVal) {
      return this;
    }

    if (searchVal > this.value && this.right) {
      return this.right.find(searchVal);
    } else if (searchVal < this.value && this.left) {
      return this.left.find(searchVal);
    }

    return null;
  }

  insert(value, data) {
    if (value > this.value && !this.right) {
      const newNode = new BSTNode(value, data);
      newNode.parent = this;
      this.right = newNode;
    }
    if (value < this.value && !this.left) {
      const newNode = new BSTNode(value, data);
      newNode.parent = this;
      this.left = newNode;
    }

    if (value > this.value && this.right) {
      this.right.insert(value, data);
    }
    if (value < this.value && this.left) {
      this.left.insert(value, data);
    }
  }

  findMin() {
    if (!this.left) {
      return this;
    }
    return this.left.findMin();
  }

  traverseInOrder() {
    let traverse = [];

    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    traverse.push(this);

    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  remove(value) {
    const nodeToRemove = this.find(value);
    if (!nodeToRemove) {
      throw new Error(`${value} was not found}`);
    }
    if (!nodeToRemove.parent) {
      nodeToRemove.value = null;
    } else if (!nodeToRemove.left && !nodeToRemove.right) {
      nodeToRemove.parent = null;
    } else if (nodeToRemove.left && nodeToRemove.right) {
      const replacement = nodeToRemove.right.findMin();

      if (nodeToRemove.right !== replacement) {
        nodeToRemove.value = replacement.value;
        nodeToRemove.data = replacement.data;
        replacement.parent.left = null;
      } else {
        if (nodeToRemove.parent.right === nodeToRemove) {
          nodeToRemove.parent.right = replacement;
        } else if (nodeToRemove.parent.left === nodeToRemove) {
          nodeToRemove.parent.left = replacement;
        }
        replacement.left = nodeToRemove.left;
        nodeToRemove.left.parent = replacement;
        replacement.parent = nodeToRemove.parent;
      }
      console.log("This should not be printed yet");
    } else if (nodeToRemove.left || nodeToRemove.right) {
      const { parent } = nodeToRemove;
      const child = nodeToRemove.left || nodeToRemove.right;
      child.parent = parent;

      if (parent.left === nodeToRemove) {
        parent.left = child;
      } else if (parent.right === nodeToRemove) {
        parent.right = child;
      }
    }
  }
}

const node = new BSTNode(3, "3");

node.insert(2, "2");
node.insert(5, "5");
node.insert(1, "1");
node.insert(7, "7");
node.insert(4, "4");
node.insert(8, "8");
node.insert(6, "6");

node.remove(5);

node.insert(5, "5");
node.insert(1.5, "1.5");
node.insert(0, "0");
node.remove(1);

console.dir(node.right);

console.log(
  node.traverseInOrder().map((node) => {
    return node.value;
  })
);
