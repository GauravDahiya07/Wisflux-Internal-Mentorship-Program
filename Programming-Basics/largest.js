
const largest = (x, y, z) => {
    
    if(x>y && x>z) return x;
    else if(z>x && z>y) return z;
    else return y;

}

const result = largest ( 50, 100, 15);
console.log(result+" is the largest.");