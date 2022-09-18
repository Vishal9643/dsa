// let arr = [5, 7, 2, 6, 9, 4];
const bubbleSort = (arr) => {
for (i = arr.length-1; i >= 0; i--) {
    for (j = arr.length-1; j >=0; j--) {
        if (arr[i] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log(arr);
}

// bubbleSort(arr);

