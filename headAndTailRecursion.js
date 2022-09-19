// Head Recursion

const head = (x) => {
    console.log(x);
    if(x>0){
        head(x-1);
    }
   }

// Tail Recursion

const tail = (x) => {
    
    if(x>0){
        tail(x-1);
    }
    console.log(x);
}

