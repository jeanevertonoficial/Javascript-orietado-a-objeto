import { Cliente } from "./Cliente.js";

// classe conta Corrente 
export class ContaCorrente {
    agencia;
    _cliente;

    // metodos acessores getter e setter, fazendo a proteção de dados
    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }
    

    _saldo = 0; // _saldo private ou #saldo para mostrar que este atributo é privado


    // fazendo o retorno do saldo 
    get saldo(){
        return this._saldo;
    }

    
    // function de sacar
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;

        }
    }
    // function de depositar
    depositar(valor) {
        if (valor <= 0) {
            return;
        }

        this._saldo += valor;
    }

    // tomar cuidado para não alterar nenhum objeto aqui dentro da função.
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}