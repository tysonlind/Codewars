function miniMaxSum(arr) {
    // Write your code here
    let sCopy = arr.slice();
    let minVal = sCopy.reduce((acc, prev) => acc + prev) - Math.max(...sCopy);
    let maxVal = sCopy.reduce((acc, prev) => acc + prev) - Math.min(...sCopy);
    return console.log(minVal, maxVal);

}

let arr = [1,3,5,7,9];

miniMaxSum(arr);

