function filtraPares(arr){
    return arr.filter(callBack);
}

function callBack(item){
    return item % 2 === 0; //Para retornar apenas o inpares utiliza o !==
}

const meuArray =  [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));