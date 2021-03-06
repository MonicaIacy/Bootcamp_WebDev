class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; 
    }

    get saldo() {
        return this._saldo; //_ pq tem getter e setter, para a propriedade não ter o nome saldo
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return 'Operação negada';
        }
       this._saldo = this._saldo - valor;
       
       return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero); //manda tudo para a classe pai
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero); //manda tudo para a classe pai
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero); //manda tudo para a classe pai
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operação negada';
        }

        this._saldo = this._saldo - valor;
    }
}
