class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(node) {
    let temp = head;
    node.next = temp;
    this.head = node;
  }

  removeHead() {
    this.head = this.head.next;
  }
}
