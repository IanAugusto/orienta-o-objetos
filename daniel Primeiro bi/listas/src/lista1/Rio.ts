class Rio {
    /*
    nome: string;
    nivel: number;
    poluido: boolean;

    constructor(nome: string, nivel: number, poluido: boolean){
        this.nome = nome
        this.nivel = nivel
        this.poluido = poluido
    }
*/
    constructor(public nome:string, public nivel:number, public poluido: boolean){

    }


    chover(x: number): void{ 
        this.nivel = this.nivel + x
    }
    ensolarar(x: number): void{
        this.nivel = this.nivel - x
    }
    limpar(): void {
        this.poluido = false;
    }
    sujar(): void {
        this.poluido = true;
    }
    mostrar(): string{
        return ` Nome do rio: ${this.nome} Nível do rio: ${this.nivel} Poluição do rio: ${this.poluido ? `Sim` : `Não`}`
    }
}

let tigre = new Rio("tigre", 1000, false);
let eufrates = new Rio("eufrates", 3000, true);

console.log(tigre.mostrar());
console.log(eufrates.mostrar());
tigre.chover(1000);
eufrates.ensolarar(2500);
tigre.limpar();
eufrates.sujar();
console.log(tigre.mostrar());
console.log(eufrates.mostrar());