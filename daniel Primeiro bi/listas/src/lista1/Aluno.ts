class Aluno {
    numAluno: number;
    nome: string;
    idade: number;
    P1: number;
    P2: number;
    constructor(numAluno: number, nome: string, idade: number, P1: number, P2: number){
        this.numAluno = numAluno; 
        this.nome = nome;
        this.idade = idade;
        this.P1 = P1;
        this.P2 = P2;
    }    

    NotaFinal(): number {
        return (this.P1 + this.P2) / 2;
    }
    
    dadosAlunos(): string{
        return this.nome+"  idade:"+this.idade+" número do aluno:"+ this.numAluno;
    }
    
    passou(): void{
        let x = this.NotaFinal();
        if(x >= 6){
        console.log("Passou na matéria")
        } else {
            console.log("Não passou na matéria")
        }
    }
}

class testaAluno{
    main(): void{
        console.log(objeto1.dadosAlunos())
        console.log(objeto2.dadosAlunos())
        console.log(objeto1.NotaFinal())
        console.log(objeto2.NotaFinal())
        objeto1.passou()
        objeto2.passou()
    }
    
}

let objeto1 = new Aluno(1, "Ian", 15, 6, 8);


let objeto2 = new Aluno(2, "Julio", 16, 7, 4);


let teste = new testaAluno();
teste.main();
// não precisa chamar a classe teste aluno, 