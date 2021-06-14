
export class ContaCorrente {
    agencia;
    _saldo = 0; // _saldo private ou #saldo para mostrar que este atributo é privado

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;

        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }

        this._saldo += valor;
    }
}