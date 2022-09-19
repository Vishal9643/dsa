let data = [];
let currentSize = data.length;

const push = (newVal) => {
    data[currentSize]=newVal;
    currentSize+=1;

} 

const pop = () => {
    lastRemovedNumber = data[currentSize-1]
    currentSize-=1;
    data.length=currentSize;
    return lastRemovedNumber;
    
}

const reverseStr = (item) => {
    for(i=0;i<item.length;i++){
        push(item[i]);
    }
    for(i=0;i<item.length;i++){
        item[i]=pop();
    }


}
// push(20);
// console.log(data);
// pop();
// console.log(data);
let str = "amit";
str=str.split("");
reverseStr(str);
str=str.join("");
console.log(str);
// console.log(str);
// console.log(data);

