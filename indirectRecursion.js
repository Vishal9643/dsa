let i=0;
let j=0;
const func1 = (i) => {
    if(i<10){
        console.log(`the value of i is ${i}`);
        func2(j+1);
    }

}

const func2 = (j) => {
    if(j<10){
        console.log(`the value of j is ${j}`);
        func1(i+1);
    }

}

func1(0);

