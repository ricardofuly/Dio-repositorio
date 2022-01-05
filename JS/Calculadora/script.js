function calculadora(){
    const operacao = Number (prompt('Escolha uma operação:\n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Porcentagem \n 6 - Potencia'));
}

if(!operacao || oprecao > 7){
    alert('Erro 404 - Operção não encontrada!');
    calculadora();
}

let n1 = Number (prompt('Insira o primeiro valor: '));
let n2 = Number (prompt('Insira o segundo valor: '));
let resultado;

if(!n1 || !n2){
    alert('Erro 404 - Valores não encontrados!')
    calculadora();
}else {

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
    }
    
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
    }
    
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} x ${n2} = ${resultado}`)
    }
    
    function divisao(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
    }
    
    function porcentagem(){
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`)
    }
    
    function potencia(){
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`)
    }
    
    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não')
    
        if (opcao == 1){
            calculadora();
        }else if(opcao == 2){
            alert('Até Mais!')
        }else{
            alert('Digite um opção valida!')
            calculadora()
        }
    }

}

// if(opreacao == 1){
//     soma();
// }else if (operacao == 2){
//     subtracao();
// }else if (operacao == 3){
//     multiplcacao();
// }else if(opreacao == 4){
//     divisao();
// }else if(operacao == 5){
//     porcentagem();
// }else if(operacao == 6){
//     potencia();
// }

switch(operacao){
    case 1:
        soma();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisao();
        break;
    case 5:
        porcentagem();
        break;
    case 6:
        potencia();
        break;    
}

calculadora();