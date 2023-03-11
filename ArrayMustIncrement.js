function solution(sequence) {
    let sequenceCopy = sequence.slice();
    //have we removed an item yet?
    let removedOne = false;
    //check the middle values in the array
    for (let i = 0; i < sequenceCopy.length; i++){
        console.log(removedOne);
        console.log(i);
        if (removedOne === false && (sequenceCopy[i+1] <= sequenceCopy[i]) || (sequenceCopy[i+1] >= sequenceCopy[i+2])){
            console.log("value of removedOne",removedOne);
            removedOne = true;
            console.log("value of removedOne",removedOne);
            sequenceCopy.splice(i+1, 1);
            console.log("spliced sequence", sequenceCopy);
            i--;
        } else if (removedOne === true && (sequenceCopy[i+1] <= sequenceCopy[i]) || (sequenceCopy[i+1] >= sequenceCopy[i+2]) ) {
           return false;
        }
    }
    //edge case for the end of the array
    if (sequenceCopy[sequenceCopy.length-1] < sequenceCopy[sequenceCopy.length-2]){
        return false;
    }
    //edge case for the start of the array
     else if (sequenceCopy[0] > sequenceCopy[1]){
        return false;
    }
    //all conditions have been checked, function can now return true if it hasn't returned false
    return true;
}

console.log(solution([3, 6, 5, 8, 10, 20, 15]));

let z = [3, 6, 5, 8, 10, 20, 15];

if (z[z.length-1] < z[z.length-2]){
    console.log("z is", false);
}