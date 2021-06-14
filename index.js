import {Cliente} from "./Cliente.js";  // importando classes 
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Jean";
cliente1.cpf = 12345678910;
cliente1.cidade = "Paiçandu";
cliente1.rg = 12345652151;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 12345678911;
cliente2.cidade = "Maringá";
cliente2.rg = 12345652;

const cliente3 = new Cliente();
cliente3.nome = "Everton";
cliente3.cpf = 12345678913;
cliente3.cidade = "São paulo";
cliente3.rg = 12345652451;


const contaCorrenteJean = new ContaCorrente();
contaCorrenteJean.saldo;
contaCorrenteJean.agencia = 1001;
contaCorrenteJean.nome = "Jean";


contaCorrenteJean.depositar(1000);


//const valorSacado = contaCorrenteJean.sacar(800);



const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

console.log(conta2);


// função de tranferencia de valor
contaCorrenteJean.transferir(200, conta2);
console.log(conta2);

//criando a conta apartir das classes
const conta3 = new ContaCorrente();
conta3.cliente = cliente3; // referente ao objeto cliente3 
conta3.agencia = 103;
conta3.depositar(1500);
conta3.depositar(3500);


console.log(conta3);

conta3.sacar(250);
console.log(conta3);

// função de tranferencia de valor
conta3.transferir(250, conta2);
console.log(conta3);
console.log(conta2);




// console.log(`\nConta corrente ${cliente1.nome}`);
// console.log(`CPF ${cliente1.cpf} \n`);
// console.log(`Conta corrente ${cliente2.nome}`);
// console.log(`CPF ${cliente2.cpf}`);
