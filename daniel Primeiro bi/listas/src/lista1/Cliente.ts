class Cliente {
    numConta: number;
    numAgencia: number;
    nome: string;
    saldo: number;
    constructor(numConta: number, numAgencia: number, nome:string, saldo: number){
        this.numConta = numConta;
        this.numAgencia = numAgencia;
        this.nome = nome;
        this.saldo = saldo;
    };
     realizarDeposito(valor: number): void{
        this.saldo = this.saldo + valor
    };
     realizarSaque(valor: number): void{
        this.saldo = this.saldo - valor
    };
     dadosCliente(): string{
        return `Numero da conta:${this.numConta} Nome do cliente:${this.nome} Saldo da conta:${this.saldo} `
    };
}

let cliente1 = new Cliente(1, 1111, "Ian", 1000);
let cliente2 = new Cliente(2, 1111, "Julio", 1500);

console.log(cliente1.dadosCliente());
console.log(cliente2.dadosCliente());
cliente1.realizarDeposito(500)
cliente2.realizarSaque(500)
console.log(cliente1.dadosCliente());
console.log(cliente2.dadosCliente());
