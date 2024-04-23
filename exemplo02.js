function maiuscula(txt) {
    return txt.toUpperCase();
}

function novoSalario(valor,perc) {
    return valor * perc / 100 + valor
}

console.log(maiuscula('vilanova'));
console.log(novoSalario(1500,20));
console.log(novoSalario(2800,15));