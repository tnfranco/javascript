class Cliente { 
    
    constructor(nome, cpf, agencia, saldo) {
      this.nome = nome;
      this.cpf = cpf;
      this.agencia = agencia;
      this.saldo = saldo;
    }
}
  
  cliente1 = new Cliente("Tiago", 4234234242423, 0220, 9999999.99);
  cliente2 = new Cliente("Adriano", 94397573939, 0220, 9439349.94);
  cliente3 = new Cliente("Aline", 7499393943943, 0220, 9439439.94);

    console.log(cliente1, cliente2, cliente3);


  
