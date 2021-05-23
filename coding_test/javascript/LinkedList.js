class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.currNode = null;
        this.nextNode = null;
    }

    find(item) {
        const currNode = this.head;
        const nextNode = currNode.next;
        while(this.currNode.data !== item) {
            currNode = nextNode;
        }
        return currNode;
    }

    append(item) {
        this.currNode = new Node(item);
        if(this.head === null) {
            this.head = this.currNode;
        }else {
            this.nextNode.next = this.currNode;
        }
        this.nextNode = this.currNode;
    }
}

let list = new LinkedList();
for(let i = 0; i < 10; i++) {
    list.append(i);
}
console.log(list);
console.log(list.find(4));