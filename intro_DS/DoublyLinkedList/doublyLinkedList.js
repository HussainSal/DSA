class Node {
  constructor(val) {
    (this.val = val), (this.next = null), (this.previous = null);
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push
  push(val) {
    let newNode = new Node(val);

    // setting head and tail incase of 1t element
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // setting new node to the next of existing tail
      this.tail.next = newNode;
      // setting prv prop of new node to current tail
      newNode.previous = this.tail;

      // setting new tail to new node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Pop

  pop() {
    // doublylist is empty
    if (!this.head) return undefined;

    // new tail
    let currentTail = this.tail;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.previous;
      this.tail.next = null;
      currentTail.previous = null;
    }
    this.length--;

    return currentTail;
  }

  shift() {
    if (!this.head) return undefined;

    // current head
    let currentHead = this.head;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.previous = null;
      currentHead.next = null;
    }

    this.length--;
    return currentHead;
  }

  //   shift() {
  //     if (!this.head) return undefined;

  //     // old head
  //     let cuurentStart = this.head;

  //     // if length is one
  //     if (this.length == 1) {
  //       this.head = null;
  //       this.tail = null;
  //     } else {
  //       // setting new head to be the next element
  //       this.head = cuurentStart.next;
  //       // setting new head prv to null
  //       this.head.previous = null;
  //       // setting old head next to be null
  //       cuurentStart.next = null;
  //     }

  //     this.length--;
  //     return cuurentStart;
  //   }

  unshift(val) {
    // new node
    let newNode = new Node(val);

    // head does not exist make head and tail to be the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // setting previous prop of current head pointing to the newNode, bcz now it will be the element on index 0
      this.head.previous = newNode;

      // setting next prop of newNode pointing to the current head, bcz now it will be the element on index 1
      newNode.next = this.head;

      // Changing current head to be the new node
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;

    let mid = Math.floor(this.length / 2);
    let counter = 0;
    if (index < mid) {
      let current = this.head;
      while (counter != index) {
        current = current.next;
        counter++;
      }
    } else {
      let current = this.tail;
      counter = this.length - 1;
      while (counter != index) {
        current = current.previous;
        counter--;
      }
    }

    return current;
  }

  set(index, val) {
    let newNode = new Node(val);
    const foundNode = this.get(index);

    if (foundNode != null) {
      foundNode.val = val;
    }
  }

  pairSum() {
    let maxSum = 0;
    let slow = this.head;
    let fast = this.head;

    //reaching the middle of list.
    while (fast && fast.next) {
      // increasing slow by 1
      slow = slow.next;
      // increasing fast by 2
      fast = fast.next.next;
    }

    // fast is null right now, and slow points to 2 i.e middle of LL
    // reversing LL from slow to end.
    let prv = null;
    while (slow) {
      // storing next node
      // i.e 1
      let nextNode = slow.next;

      // i.e null
      slow.next = prv;
      // i.e 2
      prv = slow;
      // i.e1
      slow = nextNode;
    }

    let left = this.head;
    let right = prv;

    while (left <= right) {
      maxSum = Math.max(maxSum, left.val + right.val);
      left = left.next;
      right = right.next;
    }

    return maxSum;
  }
}

// inserting item in node
const newNode = new Node(12);

// creating a doubly linked list
const doublyList = new DoublyLinkedList();

// inserting next item in newnode
newNode.next = new Node(13);

// inserting previous item in newnode
newNode.next.previous = newNode;

doublyList.push(1);
doublyList.push(1000);
// doublyList.push(2);
// doublyList.push(3);

console.log(doublyList.pairSum(), "entireArray");
