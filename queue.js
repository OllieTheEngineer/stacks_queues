/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // create a new node
    const newNode = new Node(val);
    // if length equals 0
    if(this.size === 0) {
      // make new node the first
      this.first = newNode;
      // and make last node the last
      this.last = newNode
    } else {
      // make last node point to the new node
      this.last.next = newNode;
      // make the new node last
      newNode = this.last;
    }
    return this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // store reference to old first node
    const prevFirstNode = this.first;
    // check if length is 0 which means queue is empty and throw an error
    if(this.size === 0) throw new Error('Queue is empty');
   // if length is 1
    if(this.size === 1){
  // set both first and last to null
      this.first = null;
      this.last = null;
    } else {
      // store reference to a new first node
      const newFirstNode = this.first.next;
      // make new first node first
      this.first = newFirstNode;
      // decrement
      this.size--;
      return prevFirstNode; 
    } 
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) return;
  }
}

module.exports = Queue;
