function plusMinus(arr) {
    // Write your code here
let shallowCopy = arr.slice();
let l = shallowCopy.length;
let positiveCounter = 0;
let negativeCounter = 0;
let zeroCounter = 0;

for (let i = 0; i < shallowCopy.length; i++){
    if (shallowCopy[i] > 0){
        positiveCounter++;
    } else if (shallowCopy[i] < 0){
        negativeCounter++;
    } else if (shallowCopy[i] === 0){
        zeroCounter++;
    }
}
return ((positiveCounter/l).toFixed(6) + (negativeCounter/l).toFixed(6) + (zeroCounter/l).toFixed(6));
}

console.log(plusMinus([1,1,0,-1,-1]))