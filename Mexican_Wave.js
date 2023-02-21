function wave(str){
    let x = str.slice();
    let output = [];
    for (let i = 0; i < x.length; i++){
      if (x[i] === ' '){
        
      }else {
        let y = x.slice(0,i) + x[i].toUpperCase() + x.slice(i+1,x.length);
      output.push(y);
      }
      
    }
    return output;
  }