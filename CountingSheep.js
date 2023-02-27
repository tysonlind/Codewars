function countSheeps(arrayOfSheep) {
    let x = 0;
    arrayOfSheep.map((sheep) => {
      if (sheep){
        x++;
      }
    })
    return x;
  }