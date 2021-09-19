const solution = (scores) => {
    const validScores = [];

    for (let i = 0; i < scores.length; i++) {
        let totalScore = 0;
        const isValidScore = !isMaxOrMin(scores, i);

        for (let j = 0; j < scores.length; j++) {
            if (i !== j || isValidScore) {
                 totalScore += scores[j][i];
            }
        }

        validScores.push(totalScore / (isValidScore ? scores[i].length : scores[i].length - 1));
    }
    
    return validScores.map(score => getGrade(score)).join('');
}

const isMaxOrMin = (scores, i) => {
    const targetScore = scores[i][i];
    
    const isMax = !scores.map(scores => scores[i])
                        .some((score, index) => (i !== index) && (targetScore <= score));
    
    const isMin = !scores.map(scores => scores[i])
                        .some((score, index) => (i !== index) && (targetScore >= score));
    
    return isMax || isMin;
}

const getGrade = (score) => {
    switch (Math.floor(score / 10)) {
        case 10:
        case 9:    
            return 'A';
        case 8:
            return 'B';
        case 7:
            return 'C';
        case 6:
        case 5:
            return 'D';
        default:
            return 'F';
    }
}