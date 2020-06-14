console.log("trabalhando com condicionais")

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Buenos Aires`
);

const idadeComprador = 21;
listaDeDestinos.push('Manaus') // adiciona um novo item na lista
console.log("Listas de destinos: ");
console.log(listaDeDestinos);

if(idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); 
}


console.log(listaDeDestinos);

