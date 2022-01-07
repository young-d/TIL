function solution(n, words) {
  const answer = [];
  const pass = [];
  pass.push(words[0]);

  for (let i = 1; i < words.length; i++) {
      if (pass.some((word) => word === words[i]) 
          || words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt()
         ) {
          answer.push(i % n + 1, Math.floor(i / n) + 1);
          return answer;
      }
      
      pass.push(words[i])
  }
 
  return [0, 0];
}
