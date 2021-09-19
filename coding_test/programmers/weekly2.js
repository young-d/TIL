function solution(scores) {
    let answer = '';

    for (let i = 0; i < scores.length; i++) {
        const isTopOrBottom = !validateScore(scores[i], i);
        const validScores = scores[i].reduce((acc, score, idx) => {
            if (i !== idx || isTopOrBottom) {
                acc[0] += score[idx];
                acc[1]++;
            }

            return acc;
        }, [0, 0]);

        console.log(validScores[0] / validScores[1]);
    }

    return answer;
}

function validateScore(arr, i) {
    const targetScore = arr[i];
    
    return (arr.some((score, index) => (i !== index) && (targetScore <= score))
            && arr.some((score, index) => (i !== index) && (targetScore >= score)));
}