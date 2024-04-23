const maiuscula = (txt) => {
    return txt.toUpperCase();
}

const novoSalario = (valor, perc) => {
    return valor * perc / 100 + valor;
}


console.log(maiuscula('fausto'));
console.log(novoSalario(3000, 12));