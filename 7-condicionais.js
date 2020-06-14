console.log("trabalhando com condicionais")

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Buenos Aires`
);

const idadeComprador = 15;
const estaAcompanhado = true;

listaDeDestinos.push('Manaus') // adiciona um novo item na lista
    console.log("Listas de destinos: ");
    console.log(listaDeDestinos);

if(idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); 
}

else{
 if(estaAcompanhado == true) {
    console.log("Comprador menor de idade, mas está acompnhado pelos pais");
    listaDeDestinos.splice(1,1); 

    }
else{ 
    console.log("Comprador é menor de idade e não pode realizar a compra");
}
}

    console.log(listaDeDestinos);

