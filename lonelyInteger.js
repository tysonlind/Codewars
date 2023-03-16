function lonelyinteger(a) {
let x = a.slice().sort((a,b) => a - b);

for (let i = 0; i < x.length-1; i++){
    if (x[i+1] == x[i] || x[i+1] == x[i+2]){
    } else {
        return x[i+1];
    }
}
if (x[0] !== x[1]){
    return x[0];
} else if (x[x.length-1] !== x[x.length-2]){
    return x[x.length-1];
}
}
