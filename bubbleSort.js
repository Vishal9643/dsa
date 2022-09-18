let arr = [5, 7, 2, 6, 9, 4];
console.log(arr);
// const bubbleSort = (arr) => {
// for (i = arr.length-1; i >= 0; i--) {
//     for (j = arr.length-1; j >=0; j--) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//             console.log(arr);
//         }
//     }
// }
// console.log(arr);
// }


const bubbleSort = (arr) => {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(arr);
            }
        }
    }
    console.log(arr);
}


bubbleSort(arr);