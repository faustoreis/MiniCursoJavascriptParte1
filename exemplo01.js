console.log('Mini Curso de JavaScrit')
let nome = "Fausto";  // tipo string
let anoNascimento = 1974;  // tipo numerico
let ano = "2024";   // tipo string
let sobreNome = "vilanova";
let maior_de_idade = true;  // tipo boolean
let salario = 3580.75;
const pi = 3.14;
let valorA = null;
let valorB = undefined;
let registro = {};
let listaClientes = [];
console.log(nome);
console.log(anoNascimento);
console.log(typeof nome);
console.log(typeof anoNascimento);
console.log(typeof ano);
/* 
+ soma    - subtração   * multiplicação   / divisão
*/
console.log(2+3);
console.log(2+3*5);
console.log((2+3)*5);
let novoSalario = salario * 0.15 + salario;
console.log(novoSalario.toFixed(2));
let anoAtual = parseInt(ano); 
let idade = anoAtual - anoNascimento;
console.log(idade);
console.log(idade.toString());
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
let nomeCompleto = nome + ' ' + sobreNome;
console.log(nomeCompleto);
console.log(nomeCompleto.substring(7,11));
console.log(nomeCompleto.indexOf('v'));
console.log(nomeCompleto.replace(' ','#'));
console.log(nomeCompleto.length);



