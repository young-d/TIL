function solution(N, road, K) {
  let answer = 0;
  const INF = Infinity;
  const graph = Array.from({length: N}, (_, rIndex) => 
    Array.from({length: N}, (_, cIndex) => rIndex === cIndex ? 0 : INF));
  const isVisit = new Array(N).fill(false);

  for (let i = 0; i < road.length; i++) {
    const r = road[i];
    graph[r[0] - 1][r[1] - 1] = graph[r[1] - 1][r[0] - 1] = Math.min(graph[r[0] - 1][r[1] - 1], r[2]);
  }
  console.log(graph);
  
  const getMin = (array) => {
    let min = INF;
    let idx = 0;

    for (let i = 0; i < array.length; i++) {
      if (min > array[i] && !isVisit[i]) {
        min = array[i];
        idx = i;
      }
    }

    return idx;
  }

  const getDistance = (start) => {
    const curr = graph[start - 1];
    const end = curr.length;
    let count = 0;
    let min = 0;
    let currStart = curr;
    isVisit[start - 1] = true;
    
    while (count < end) {
      const idx = getMin(currStart);
      console.log(idx)
      min += currStart[idx];
      const next = graph[idx];
      for (let i = 0; i < end; i++) {
        if (curr[i] > next[i] + min && !isVisit[i]) {
          curr[i] = next[i] + min;
          console.log(next, i, next[i], min)
        }
      }
      console.log(curr, next, count, min);
      currStart = next;
      isVisit[idx] = true;
      count++;
    }
    return curr;
  }

  answer = getDistance(1).reduce((acc, element) => {
    if (element <= K) {
      acc++;
    }
    return acc;
  }, 0);
 
  return answer;
}




solution(6, [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4);