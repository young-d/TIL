var maxArea = function(height) {    
    let start = 0;
    let end = height.length - 1;
    let max = 0;
    
    while (start < end) {
        max = getArea(height, start, end) > max ? getArea(height, start, end) : max;
        
        height[start] < height[end] ? start++ : end--;
    }
    
    return max;
};

function getArea(arr, start, end) {
    return (end- start) * Math.min(arr[start], arr[end])
}