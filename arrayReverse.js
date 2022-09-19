let arr= [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0];
let temp;
let start=0;
let end=arr.length-1;

const reverseArr=(arr,start,end)=> {
    if(start<=end){
        temp=arr[end];
        arr[end]=arr[start];
        arr[start]=temp;
        reverseArr(arr,start+1,end-1);
    
    }
   return(arr);
}

console.log(reverseArr(arr,start,end));