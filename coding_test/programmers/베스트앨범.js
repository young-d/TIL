function solution(genres, plays) {
  const answer = [];

  const info = genres.reduce((acc, element, index) => {
    !acc[element]
      ? acc[element] = [plays[index], []]
      : acc[element][0] += plays[index];

    acc[element][1].push(index);

    return acc;
  }, {});

  const order = Object.keys(info).sort((a, b) => info[b][0] - info[a][0]);

  for (const g of order) {
    info[g][1].sort((a, b) => plays[b] - plays[a]);
    answer.push(...info[g][1].slice(0, 2));
  }

  return answer;
}
