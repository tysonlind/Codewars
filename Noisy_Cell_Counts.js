function cleanedCounts(data) {
    let unmutatedArray = data.slice();
  for (let i = 1; i < unmutatedArray.length; i++) {
    if (unmutatedArray[i] < unmutatedArray[i-1]){
      unmutatedArray[i] += 1;
    }
  }
  return unmutatedArray;
    }
    console.log(cleanedCounts([10,11,10]));