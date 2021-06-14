// classe conta Corrente 
export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0; // _saldo private ou #saldo para mostrar que este atributo é privado

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