const maxArea = (h, w, horizontalCuts, verticalCuts) => { 
    const mod = 1e9 + 7;
    
    return findMaxLength(horizontalCuts, h) * findMaxLength(verticalCuts, w) % BigInt(mod);
};

const findMaxLength = (cutPoints, maxPoint) => {
    cutPoints.push(maxPoint);

    cutPoints.sort((a, b) => a - b);

    let maxLength = cutPoints[0];

    for (let i = 1; i < cutPoints.length; i++) {
        maxLength = Math.max(maxLength, cutPoints[i] - cutPoints[i - 1])
    }

    return BigInt(maxLength);
}