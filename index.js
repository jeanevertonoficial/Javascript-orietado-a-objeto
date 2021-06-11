// classe é um molde
class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente(); 
const cliente2 = new Cliente(); 


cliente1.nome = "Jean";
cliente1.cpf = 12345678910;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 98765432121;

cliente2.nome = "Alice";
cliente2.cpf = 12345678911;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);

