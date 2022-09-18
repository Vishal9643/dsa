let arr1=[1,2,3,4,5,6];
let arr2=[7,8,9];
let arr3=[...arr1,...arr2];
arr1.push(arr2);
console.log(arr3);