function Node(value) {
    this.value = value;
    this.next = null;
}

function Queue() {
    this.head = null;
    this.tail = null;
    this.size = 0;

  this.enqueue = function(newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = this.tail = newNode;
    }

    this.size++;
  }

  this.dequeue = function() {
    const targetNode = this.head.value;
    this.head = this.head.next;
    this.size--;

    return targetNode;
  }
}

function solution(priorities, location) {
  let answer = 0;
  const queue = new Queue();
  
  priorities.forEach((element, index) => {
    queue.enqueue([element, index]);
  });

  priorities.sort((a, b) => b - a);

  while (queue.size) {
    const curr = queue.dequeue();

    if (curr[0] >= priorities[answer]) {
      answer++;
      if (curr[1] === location) {
        break;
      }
    } else {
      queue.enqueue(curr);
    }
  }

  return answer;
}

console.log(solution([2,1,3,2], 2));
