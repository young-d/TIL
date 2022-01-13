let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str = input[0].split('');
let cursor = str.length;

function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.cursor = 0;

  LinkedList.prototype.findPrevNode = function() {
    let currNode = this.head;
    let currCursor = 0;

    while (currNode && currCursor < this.cursor) {
      console.log(currNode, currCursor)
      currNode = currNode.next;
      currCursor++;
    }

    return currNode;
  }

  LinkedList.prototype.append = function(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      const prevNode = this.tail;
      const currNode = prevNode.next = this.tail = new Node(value);

      currNode.prev = prevNode;
    }

    this.cursor++;
  }

  LinkedList.prototype.insert = function(value) {
    const prevNode = this.findPrevNode();

    if (!prevNode) {
      const nextNode = this.head;
      const currNode = this.head = new Node(value);
      currNode.next = nextNode;
      nextNode.prev = currNode;
    } else {
      const nextNode = prevNode.next;
      const currNode = prevNode.next = nextNode.prev = new Node(value);
      currNode.prev = prevNode;
      currNode.next = nextNode;
    }

    this.cursor++;
  }

  LinkedList.prototype.remove = function() {
    console.log(this.findPrevNode())
    const targetNode = this.findPrevNode().next;

    if (targetNode === this.tail) {
      this.tail = targetNode.prev;
      targetNode.prev.next = targetNode.next;
    } else if (targetNode === this.head) {
      this.head = targetNode.next;
      targetNode.next.prev = null;
    } else {
      targetNode.next.prev = targetNode.prev;
      targetNode.prev.next = targetNode.next;
    }

    this.cursor--;
  }

  LinkedList.prototype.toString = function() {
    let str = '';
    let currNode = this.head;

    while(currNode) {
        str += currNode.data;
        currNode = currNode.next;
    }
    return str;
  }

  LinkedList.prototype.size = function() {
    return this.toString().length;
  }
}

const linkedList = new LinkedList();
for (const c of str) {
  linkedList.append(c);
}

for (const i of input.splice(2,)) {
  const command = i.split(' ')[0];

  switch(command) {
    case 'L':
      if (cursor){
        cursor--;
      } 
      break;
    case 'D':
      if (cursor < linkedList.size()) {
        cursor++;
      }
      break;
    case 'B':
      if (cursor) {
        linkedList.remove();
        cursor--;
      }
      break;
    case 'P':
      if (cursor && cursor < linkedList.size()) {
        linkedList.insert(i.split(' ')[1]);
      } else {
        linkedList.append(i.split(' ')[1]);
      }
      cursor++;
      break;
  }
}

console.log(linkedList.head, linkedList.tail, linkedList.toString());
