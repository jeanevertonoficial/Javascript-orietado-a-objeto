// classe é um molde
class Cliente {
    nome;
    cpf;

}

class ContaCorrente {
    agencia;
    saldo = 0;

    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log(`Olá ${contaCorrenteRicardo.nome}, Saldo indisponivel, teu saldo é de ${contaCorrenteRicardo.saldo}`);
        }

    }
}


const cliente1 = new Cliente();
cliente1.nome = "Jean";
cliente1.cpf = 12345678910;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 12345678911;



const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.nome = "Jean";


console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(200);




console.log(cliente1);
console.log(cliente2);