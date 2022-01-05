function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os Parametros");

        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

        if(typeof num !== 'number') throw new TypeError('Array precisa ser do tipo object');

        if(arr.length !== num) throw new RangeError('Tamanho Invalido');
        return arr;

    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Este error e um ReferenceError!");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Este error e um TyprError!");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Este error e um RangeError!");
            console.log(e.message);
        }else{
            console.log("Tipo de erro não esperado" + e);
        }
    }
}

console.log(validaArray([], 'a'));