// let factorialNumber = 50;
let multi = 1;
const fact = (num) => {
    

    if(num>1){
       multi = multi * (num)
       fact(num-1);
    }
    return multi;
}

console.log(fact(20));
