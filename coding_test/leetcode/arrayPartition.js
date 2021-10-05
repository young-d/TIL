var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b)
                .filter((_, idx) => idx % 2 === 0)
                .reduce((acc, element) => acc += element, 0);
};