class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;        
    }

    //node item 찾기
    findNode(item) {
        let currNode = this.head;
        while(currNode !== null && currNode.data !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    //node 추가(tail)
    append(item) {
        const newNode = new Node(item);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.index = ++this.tail.index;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    //node 중간 삽입
    insert(newItem, item) {
        const newNode = new Node(newItem);
        let currNode = this.findNode(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

    //node 삭제
    remove(item) {
        const targetNode = this.findNode(item);  //삭제할 노드
        let currNode = this.head;
        let preNode = this.prev;
        while(currNode.next !== targetNode) {
            currNode = currNode.next;
        }

        //중간노드 삭제
        if(targetNode.next === null) {
            currNode.next = null;
        }else {
            currNode.next = currNode.next.next;
        }

        //headNode 삭제
        if(targetNode === this.head) {
            this.head = targetNode.next;
        }
    }

    //toString
    toString() {
        let str = '[';
        let currNode = this.head;
        while(currNode !== null) {
            str += `currNode : ${currNode.data} \n`;
            currNode = currNode.next;
        }
        return str + ']';
    }
}

let list = new LinkedList();
let current = list.head;
for(let i = 0; i < 7; i++) {
    list.append(`${i}번째`);
}
list.insert('3-1번째', '3번째'); //4번째 앞에 노드 삽입
list.remove('5번째'); //5번째 노드 삭제
console.log(list.toString()); 
/*
[currNode : 0번째 
currNode : 1번째
currNode : 2번째
currNode : 3번째
currNode : 3-1번째
currNode : 4번째
currNode : 6번째
]
*/
