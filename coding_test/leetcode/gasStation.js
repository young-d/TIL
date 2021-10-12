var canCompleteCircuit = function(gas, cost) {
    const arr = gas.map((elt, idx) => [elt, idx])
                    .filter((elt, idx) => elt[0] >= cost[idx]);
    
    for (const a of arr) {
        const startIdx = a[1];
        let total = a[0] - cost[startIdx];
        let nextIdx = startIdx === cost.length - 1 ? 0 : startIdx + 1;
        
        while (total >= 0) {
            if (nextIdx === startIdx) return startIdx;

            total += (gas[nextIdx] - cost[nextIdx]);
            
            nextIdx = nextIdx + 1 < cost.length ? nextIdx + 1 : 0;
        }
    }
  
    return -1;
};