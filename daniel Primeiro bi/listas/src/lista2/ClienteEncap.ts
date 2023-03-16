class ClientEncap {
    private nroConta: string
    private nroAgencia: string
    private nome: string
    private saldo: number

    constructor(nroConta: string, nroAgencia: string, nome: string, saldo: number ){
       this.setNroConta(nroConta); this.setNroAgencia(nroAgencia); this.setNome(nome); this.setSaldo(saldo)
    }
    setNroConta(nroConta:string){
        if((nroConta.length == 8) && (nroConta.charAt(6) == '-')){
            this.nroConta = nroConta
        }else console.log('Numero da conta invalido')
    }
    setNroAgencia(nroAgencia:string){
        if((nroAgencia.length == 6) && (nroAgencia.charAt(4) == '-')){
            this.nroAgencia = nroAgencia
        }else console.log('Numero da agência invalido')
    }
    setNome(nome:string){
        if(nome.length <= 30){
            this.nome = nome
        }else console.log('Nome Invalido')
    }
    setSaldo(saldo:number){
        saldo >= 0 ? this.saldo = saldo : console.log('Saldo não pode ser negativo')
    }
    sacar(x:number){
        this.setSaldo(this.saldo - x)
    }
    depositar(x:number){
        this.setSaldo(this.saldo + x)
    }
    getNroConta(): string{
        return this.nroConta
    }
    getNroAgencia(): string{
        return this.nroAgencia
    }
    getNome():string{
        return this.nome
    }
    getSaldo(): number{
        return this.saldo
    }
}
let Ianzin = new ClientEncap("12345-1", "1234-5", "Ianzin", 1500)
Ianzin.depositar(500)
Ianzin.sacar(600)
console.log(`O saldo da conta ${Ianzin.getSaldo()}`)