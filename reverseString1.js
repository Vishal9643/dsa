const rev = (str) => {
    let data = [];
let currentSize=data.length;

const push = (newVal) => {
    data[currentSize]=newVal;
    currentSize+=1;
}

const pop =() => {
    removedValue=data[currentSize-1]
    currentSize-=1;
    data.length=currentSize;
    return removedValue;
}

const reverseStr = (item) =>  {
    for(i=0;i<item.length;i++){
        push(item[i]);
    }
    for(i=0;i<item.length;i++){
        item[i]=pop() ;       
    }

}
str=str.split("");
reverseStr(str);
str=str.join("");


return str;

}
// str=str.split("");
// reverseStr(str);
// str=str.join("");
// console.log(str);