var currentNumber = document.getElementById("currentNumber")
let count = 0;


function increment(){
    count++
    currentNumberWrapper.innerHTML = count;
}

function decrement(){
    count--
    currentNumberWrapper.innerHTML = count;
}