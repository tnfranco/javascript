console.log("trabalhando com listas")

// const salvador =`Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// const Curitiba = `Curitiba`;
// const beloHorizonte = `Belo Horizonte`;

const listaDeDestinos = new Array( // cria uma lista com varias variaveis
    `Salvador`,
    `São Paulo`,
    `Buenos Aires`
);

listaDeDestinos.push('Manaus') // adiciona um novo item na lista
console.log("Listas de destinos: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // remove o item da lista, de acordo com sua posição
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // imprimi um item na lista de acordo com a posição que voce por
