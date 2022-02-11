function solution(s) {
  let result = [];

  for (let i = 1; i < s.length / 2 + 1; i++) {
      let cnt = 1;
      let aux = '';
      
      for (let j = 0; j < s.length; j += i) {
          const curr = s.substr(j, i);
          const next = s.substr(j + i, i);
          if (curr === next) {
              cnt++;
          } else {
              aux += cnt > 1 ? cnt + curr : curr;
              cnt = 1;
          }
      }
      result.push(aux.length);
  }
  
  return Math.min(...result);
}
