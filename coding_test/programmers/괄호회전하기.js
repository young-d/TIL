function solution(s) {
  let answer = 0;
  const len = s.length;
  const openBrace = ['(', '{', '['];
  const closeBrace = [')', '}', ']'];
  
  for (let i = 0; i < len; i++) {
    const brace = [];
    let pointer = i;
    let cnt = 0;

    while (cnt < len) {
      const target = s.charAt(pointer % len);
        
      if (openBrace.some(v => v === target)) brace.push(target);
      else if (closeBrace.indexOf(target) === openBrace.indexOf(brace[brace.length - 1])) brace.pop();
      else break;
        
      cnt++;
    }

    cnt === len && !brace.length && answer++;
  }

  return answer;
}