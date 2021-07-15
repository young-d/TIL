class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0 ;
    }

    enqueue(item) {
        let currNode = new Node(item);
        if(this.size === 0) {
            this.head = currNode;
        } else {
            this.tail.next = currNode;
        }
        this.tail = currNode;
        this.size++;
    }

    dequeue() {
        if(this.size === 0) return;
        this.head = this.head.next;
        if(this.size === 0) {
            this.tail = null;
        }
        this.size--;
    }
}

let queue = new Queue();
queue.enqueue("data1");
console.log(`queue size: ${queue.size}`);
console.log(queue.head);
queue.enqueue("data2");
console.log(`queue size: ${queue.size}`);
console.log(queue.head);
queue.dequeue();
console.log(`queue size: ${queue.size}`);
console.log(queue.head);


/*
queue size: 1
Node { data: 'data1', next: null }
queue size: 2
Node { data: 'data1', next: Node { data: 'data2', next: null } }
queue size: 1
Node { data: 'data2', next: null }
*/
