import {Cliente} from "./Cliente.js";  // importando classes 
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Jean";
cliente1.cpf = 12345678910;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 12345678911;



const contaCorrenteJean = new ContaCorrente();
contaCorrenteJean.saldo;
contaCorrenteJean.agencia = 1001;
contaCorrenteJean.nome = "Jean";


contaCorrenteJean.depositar(1000);
contaCorrenteJean.depositar(1000);
contaCorrenteJean.depositar(1000);


const valorSacado = contaCorrenteJean.sacar(800);


console.log(valorSacado);

console.log(contaCorrenteJean);

// console.log(`\nConta corrente ${cliente1.nome}`);
// console.log(`CPF ${cliente1.cpf} \n`);
// console.log(`Conta corrente ${cliente2.nome}`);
// console.log(`CPF ${cliente2.cpf}`);
