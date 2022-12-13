/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    //  create a new node
    const newNode = new Node(val);
    // if stack size is equal to 
    if(this.size === 0){
    // make bottom the new node
    this.first = newNode;
    // make top the new node
    this.last = newNode;
  } else {
    // make current top point to new node
    this.first.next = newNode;
    // make new node the top
    this.last = newNode;
    // increment and return new stack
    return this.size++;
  }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // create node reference to current top node
    const currTopNode = this.last;
    // check to see if stack is empty, if empty throw an error
    if(this.size === 0) throw new Error('Stack is empty!');
    // if the length is equal to 1 set first and last to null
    if(this.size === 1){
      this.first = null;
      this.last = null;
    } else {
      const newTopNode = this.last.next;
      this.last = newTopNode;
      this.size --;
    }
    return currTopNode;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) return;
    }
}

module.exports = Stack;
