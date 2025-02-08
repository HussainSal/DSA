console.log("Binary Search");

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertTest(val) {
    // creating a new node out of val
    let newNode = new Node(val);

    // if root is null
    if (!this.root) {
      return (this.root = newNode);
    }

    // accessing top most element i.e root
    let current = this.root;

    // this loop will keep on executing unless we return something.
    while (true) {
      if (current.value == newNode.value) return undefined;

      // if new node is smaller then current, then it will go in left
      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      }

      //if new node is greater then current, then it will go in right.
      if (newNode.value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  // Video 167 :- Insert
  insert(val) {
    // creating a new node
    let newNode = new Node(val);

    // if root does not exist assign new node to be the root
    if (this.root == null) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        // If same value is entered again
        if (newNode.value == current.value) return undefined;
        // if newNode is less than current
        if (newNode.value < current.value) {
          // if left to current does not exist
          if (current.left == null) {
            current.left = newNode;
            return this;
          } else {
            // reaching out to new left
            current = current.left;
          }
          // if newNode is grater than current
        } else if (newNode.value > current.value) {
          // if right to current does not exist
          if (current.right == null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // Video 168 :- Find
  find(val) {
    let newNode = new Node(val);
    if (this.root == null) {
      return undefined;
    } else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (newNode.value < current.value) {
          current = current.left;
        } else if (newNode.value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }

      if (!found) {
        return "value could not be found";
      }

      return `Valud found :- ${current.value}`;
    }
  }

  maxDepth() {
    const calculateDepth = (node) => {
      if (!node) return 0;
      const leftDepth = calculateDepth(node.left);
      const rightDepth = calculateDepth(node.right);
      return Math.max(leftDepth, rightDepth) + 1;

      let check = Infinity
    };

    return calculateDepth(this.root);
  }

  pathSum(target) {
    let counter = 0;
  }
}

let tree = new BinarySearchTree();

//  basic structure of a tree

// tree.root = new Node(10);
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
// tree.root.left.left = new Node(4)
// console.log(tree,"TREE")

// video 166 :- Insert

// Video  :- Insert Solution
// tree.insertTest(10);
// tree.insertTest(5);
// tree.insertTest(2);
// tree.insert(7);
// tree.insert(1);

// tree.insert(13);
// tree.insert(11);
// tree.insert(16);
// [3, 9, 20, null, null, 15, 7];

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(null);
tree.insert(5);
tree.insert(null);
tree.insert(4);

console.log(tree, "TREE");
