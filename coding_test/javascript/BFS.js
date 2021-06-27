class Node {
    constructor(data) {
        this.data = data;
        this.lt = null;
        this.rt = null;
    }
}

function BFS(root) {
    let queue = [];
    
    queue.push(root);
    let level = 0;
    while(queue.length > 0) {
        let len = queue.length;
        process.stdout.write(`${level} : `);
        for(let i = 0; i < len; i++) {
            let curr = queue.shift();
            process.stdout.write(`${curr.data} `);
            if(curr.lt !== null) queue.push(curr.lt);
            if(curr.rt !== null) queue.push(curr.rt);
        }
        level++;
        console.log('');
    }
}

const root = new Node(1);
root.lt = new Node(2);
root.rt = new Node(3);
root.lt.lt = new Node(4);
root.lt.rt = new Node(5);
root.rt.lt = new Node(6);
root.rt.rt = new Node(7);

BFS(root);
