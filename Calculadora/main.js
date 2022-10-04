//Variaveis
var numeroExibido = '0';
var numeroReal = 0.0;
var operation = 'none';
var comma = false;
//Botões numerais
function botaoPressionado(digitoObtido){
    if(comma == true){
        numeroExibido += '.';
        comma = false;
    }
    if(numeroExibido === '0' && numeroExibido.length < 7){
        numeroExibido = digitoObtido.toString();
        document.getElementById('visor').innerHTML = numeroExibido;
    } else if(numeroExibido != '0' && numeroExibido.length < 7) {
        numeroExibido += digitoObtido.toString();
        document.getElementById('visor').innerHTML = numeroExibido;
    }
}
//Botões Apagar
let botaoBackspace = () => {
    if(numeroExibido.length > 1){
        numeroExibido = numeroExibido.slice(0,-1);
        document.getElementById('visor').innerHTML = numeroExibido;
    } else {
        numeroExibido = '0';
        document.getElementById('visor').innerHTML = numeroExibido;
    }
}
let botaoCE = () => {
    numeroExibido = '0';
    document.getElementById('visor').innerHTML = numeroExibido;
}
let botaoC = () => {
    numeroExibido = '0';
    numeroReal = 0.0;
    document.getElementById('visor').innerHTML = numeroExibido;
    operation = 'none';
}
//Botões operacionais
let botaoDivide = () => {
    if(operation != 'none' && numeroExibido !== '0'){
        botaoEqual();
    }
    if(numeroExibido !== '0'){
        operation = 'divide';
        lastTerm = parseFloat(numeroExibido);
        numeroExibido = '0';
    }
}
let botaoMultiply = () => {
    if(operation != 'none' && numeroExibido !== '0'){
        botaoEqual();
    }
    if(numeroExibido !== '0'){
        operation = 'multiply';
        lastTerm = parseFloat(numeroExibido);
        numeroExibido = '0';
    }
}
let botaoSubtract = () => {
    if(operation != 'none' && numeroExibido !== '0'){
        botaoEqual();
    }
    if(numeroExibido !== '0'){
        operation = 'subtract';    
        lastTerm = parseFloat(numeroExibido);
        numeroExibido = '0';                
    }
}
let botaoSum = () => {
    if(operation != 'none' && numeroExibido !== '0'){
        botaoEqual();
    }
    if(numeroExibido !== '0'){
        operation = 'sum';
        lastTerm = parseFloat(numeroExibido);
        numeroExibido = '0';
    }
}
//Virgula e Igual
let botaoComma = () => {
    if(numeroExibido.indexOf('.') == -1){
        comma = true;
    }
}
let botaoEqual = () => {
    switch(operation){
        case 'divide':
            numeroExibido = lastTerm / parseFloat(numeroExibido);
            numeroExibido = numeroExibido.toString();
            if(numeroExibido.length > 8){
                numeroExibido = numeroExibido.substring(0,7);
            }
            document.getElementById('visor').innerHTML = numeroExibido;
        break;
        case 'multiply':
            numeroExibido = lastTerm * parseFloat(numeroExibido);
            numeroExibido = numeroExibido.toString();
            if(numeroExibido.length > 8){
                numeroExibido = numeroExibido.substring(0,7);
            }
            document.getElementById('visor').innerHTML = numeroExibido;
        break;
        case 'subtract':
            numeroExibido = lastTerm - parseFloat(numeroExibido);
            numeroExibido = numeroExibido.toString();
            if(numeroExibido.length > 8){
                numeroExibido = numeroExibido.substring(0,7);
            }
            document.getElementById('visor').innerHTML = numeroExibido;
        break;
        case 'sum':
            numeroExibido = lastTerm + parseFloat(numeroExibido);
            numeroExibido = numeroExibido.toString();
            if(numeroExibido.length > 8){
                numeroExibido = numeroExibido.substring(0,7);
            }
            document.getElementById('visor').innerHTML = numeroExibido;
        break;
    }
    operation = 'none';
}