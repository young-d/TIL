class Stack {
    constructor() {
        this._arr = [];
        this.length = 0;
    }

    push(item) {
        this._arr[this.length++] = item;
    }

    pop() {
        if (this.length === 0) return;
        const item = this.peek();
        this._arr.length = --this.length;
        return item;
    }

    peek() {
        if (this.length === 0) return;
        return this._arr[this.length - 1];
    }
}

let stackArr = new Stack();
stackArr.push('first item');
stackArr.push('second item');
console.log(stackArr._arr);
console.log(stackArr.peek());
console.log(stackArr.pop());
console.log(stackArr._arr);
console.log(stackArr._arr.length);
console.log(stackArr.length);

/*
[ 'first item', 'second item' ]
second item
second item
[ 'first item' ]
1
1
*/