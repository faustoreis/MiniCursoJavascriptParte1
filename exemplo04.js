let anoNascimento = 2010;
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;
/* 
==  ===  != !== > < >= <=
4>3   true
4<3   false
let sexo = "M"
sexo=="M" true
sexo=="F" false

let inss="123";
inss == 123  // true
inss === 123 // false
*/

if (idade>=18) {
    // executa se for verdadeiro
    alert("você é maior de idade");
    // termina o if
}
// segue a partir daqui

let sexo="F";
if (sexo==="M") {
    console.log("você é do sexo masculino");
} else {
    console.log('você é do sexo feminino');
}
console.log('continua a execução');

// switch

/*
1 = solteiro   2 = casado    3 = viuvo   4 = separado
*/

const estadoCivil = (ec) => {
    switch (ec) {
        case 1:
            console.log("Solteiro(a)");
            break;
        case 2:
            console.log("Casado(a)");
            break;
        case 3:
            console.log("Viuvo(a)");
            break;
        case 4:
            console.log("Separado(a)");
            break;
        default:
            console.log("opção invalida");
    }
}

estadoCivil(7);