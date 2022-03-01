function solution(fees, records) {
  const answer = [];
  const [ baseTime, baseFee, unitTime, unitFee ] = fees;
  
  // 1. 차량번호 별로 입차는 스택에, 출차 시 스택에서 꺼낸 입차시간과 비교해 주차시간 구하기
  const obj = records.reduce((acc, element) => {
      const [ time, number, type ] = element.split(' ');
      const convertedTime = Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]);
      
      if (type === 'IN') {
          if (!acc[number]) {
              acc[number] = { stack: [], parkingTime: 0, parkingFee: 0 };
          }
          acc[number].stack.push(convertedTime);
      } else {
          acc[number].parkingTime += (convertedTime - acc[number].stack.pop());
      }
      
      return acc;
  }, {});
  
  for (const n in obj) {
      if (obj[n].stack.length) {
          obj[n].parkingTime += ((23 * 60 + 59) - obj[n].stack.pop());
      }
      
      const time = obj[n].parkingTime;
      
      obj[n].parkingFee = time <= baseTime ? baseFee : Math.ceil((time - baseTime) / unitTime) * unitFee + baseFee; 
  }
  
  const arr = Object.keys(obj).sort((a, b) => a - b);
  arr.forEach((number) => {
      answer.push(obj[number].parkingFee);
  })
  
  return answer;
}
