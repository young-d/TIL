class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.index = 0;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;        
    }

    //node list 찾기
    findNodes(item) {
        let currNode = this.head;
        let itemList = new ArrayList();
        while(currNode !== null) {
            if(currNode.data === item) {
                itemList.append(currNode);
            }
            currNode = currNode.next;
        }
        return itemList[0];
    }

    //node item 찾기
    findNode(item, index = 0) {
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
        let currNode = this.findNodes(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

    //node 삭제
    remove(item) {
        const targetNode = this.findNodes(item);  //삭제할 노드
        let currNode = this.head;
        while(currNode.next !== targetNode) {
            currNode = currNode.next;
        }
        if(targetNode.next === null) {
            currNode.next = null;
        }else {
            currNode.next = currNode.next.next;
        }
    }

    //removeHead
    removeHead() {
        const targetNode = this.head;
        if(targetNode !== null) {
            this.head = targetNode.next;
            
            if(targetNode.next === null) {
                this.tail = null;
            }
        }
    }

    //removeTail
    removeTail() {
        const targetNode = this.tail;
        if(this.head === targetNode) {
            this.head = null;
        }
        this.tail = null;
    }

    //toString
    toString() {
        let str = '[';
        let currNode = this.head;
        while(currNode !== null) {
            str += `currNode : ${currNode.data}, index : ${currNode.index} \n`;
            currNode = currNode.next;
        }
        return str + ']';
    }
}

let list = new LinkedList();
// list.append(`0번째`);
// list.append(`1번째`);
// list.append(`2번째`);
// list.append(`3번째`);
// list.append(`4번째`);
// list.append(`5번째`);
// list.append(`6번째`);
// list.remove(`4번째`);
let current = list.head;
for(let i = 0; i < 10; i++) {
    list.append(`${i}번째`);
}
list.insert('3-1번째', '4번째');
console.log(list.toString());
