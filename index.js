import {Cliente} from "./Cliente.js";  // importando classes 
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente("Jean", 12345678910);

cliente1.agencia = 122;


console.log(`Cpf:${cliente1.cpf} e nome do cliente:${cliente1.nome}`);


const cliente2 = new Cliente("Alice", 112345848); // nome , cpf




// const cliente3 = new Cliente();
// cliente3.nome = "Everton";
// cliente3.cpf = 12345678913;
// cliente3.cidade = "São paulo";
// cliente3.rg = 12345652451;
// cliente3.agencia = 124;


const contaCorrenteJean = new ContaCorrente(1001, cliente2); // agencia , id cliente
contaCorrenteJean.depositar(1000);

console.log(cliente2);

//const valorSacado = contaCorrenteJean.sacar(800);






// função de tranferencia de valor
// contaCorrenteJean.transferir(200, conta2);
// console.log(conta2);

//criando a conta apartir das classes
//const conta3 = new ContaCorrente();

// conta3.cliente = new Cliente(); // referente ao objeto cliente3 
// conta3.cliente.nome = "Gustavo";  // fazendo atribuição direto 
// conta3.cliente.agencia = 103;
// conta3.cliente.cpf = 123456741;



// conta3.depositar(1500);
// conta3.depositar(3500);


// console.log(conta3);

// conta3.sacar(250);
// console.log(conta3);

// função de tranferencia de valor
// conta3.transferir(250, conta2);
// console.log(conta3);

// conta3.sacar(10);
// console.log(conta2.saldo);




// console.log(`\nConta corrente ${cliente1.nome}`);
// console.log(`CPF ${cliente1.cpf} \n`);
// console.log(`Conta corrente ${cliente2.nome}`);
// console.log(`CPF ${cliente2.cpf}`);

