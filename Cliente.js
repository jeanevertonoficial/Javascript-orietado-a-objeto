// classe é um molde
export class Cliente {
    nome;
    _cpf;
//acessor
    get cpf(){
        return this._cpf;
    }
//construtor
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}