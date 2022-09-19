let arr=[];
let currentSize=arr.length;
let max=5;

const push=(newVal) => {
    if(currentSize>=max){
        console.log("you cannot add another value");
    }
    arr[currentSize]=newVal;
    currentSize+=1;
    return arr;
}

const pop = () => {
    if(currentSize>0){
        arr.length-=1
        return arr;
    }else{
        console.log("stack is already empty")
    }
    
}
// push(30);

console.log(arr);

pop();

console.log(arr);

