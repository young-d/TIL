//tree가 중복 데이터 없이 정렬되어 있다는 조건 하에 

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaraSearchTree {
    constructor() {
        this.root = null;
    }

    //데이터 추가
    insert(data) {
        if(this.root === null) {
            this.root = new Node(data);
            return;
        }
        let current = this.root;
        _insert(current, data);

        return;
    }

    _insert(current, data){

        if(data < current.data) {
            if(current.left === null) {
                current.left = new Node(data); 
                return;
            }else {
                current = current.left;
                this._insert(current, data);
            }
        }else {
            if(current.right === null) {
                current.right = new Node(data);
                return;
            }else {
                current = current.right;
                this._insert(current, data);
            }
        }

        // base case
        // if ()

        // if{
        //     insert(node, data)
        // }else insert(node, data);

    }
    //데이터 검색
    search(current, data) {
        if(this.root === null) {
            return false;
        }
        
        let current = this.root;

        if(data < current.data) {
            if(current.left.data === data) {
                return true;
            }else {
                current = current.left;
            }
        }else if(data > current.data) {
            if(current.right.data === data) {
                return true;
            }else {
                current = current.right;
            }
        }

        this.search(data);

        return false;

    }
}


//테스트