function countingSort(arr) {
    let input = arr.slice();
    let countArr = new Array(input.length).fill(0);
    for (let i = 0; i < input.length; i++){
        countArr[input[i]]++;
    }
    return countArr;
}