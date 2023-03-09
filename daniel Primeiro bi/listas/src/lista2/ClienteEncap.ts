class ClientEncap {
    private nroConta: string
    private nroAgencia: string
    private nome: string
    private saldo: number

    constructor(nroConta: string, nroAgencia: string, nome: string, saldo: number ){
       this.setNroConta(nroConta); this.setNroAgencia(nroAgencia);
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

}