class Produto {
   public id: number;
   public descricao: string;
   private qtde: number;
   private preco: number;

    constructor(id: number, descricao: string, qtde: number, preco: number){
        this.id = id
        this.descricao = descricao
        this.qtde = qtde
        this.preco = preco
        this.setQtde(qtde); this.setPreco(preco);
    }
    setQtde(qtde: number): void{
        if (qtde >= 0 ){
            this.qtde = qtde
        } else {
            console.log(`quantidade negativa não pode`)
        }
    }
    setPreco(preco: number): void{
        if (preco >+ 0 ){
            this.preco = preco
        }else{
            console.log(`preço negativo não pode`)
        }
    }
    comprar(x: number): void {
        this.qtde = this.qtde + x
    }
    getQtde(): number{
        return this.qtde
    }
    getPreco(): number{
        return this.preco
    }
    vender(x: number): void {
        this.setQtde(this.qtde - x)
    }

    subir(x:number): void{
        this.preco = this.preco + x
    }
    descer(x:number): void{
        this.setPreco(this.preco - x)
    }
    mostra(): string{
        return `Id do produto: ${this.id} Descrição: ${this.descricao} Quantidade: ${this.qtde} Preço do produto: ${this.preco}`
    }

}

let farinha = new Produto(1, "Farinha de mandioca", 100, 10);
let farofa = new Produto(2, "farofa de bacon", 150, 15);

console.log(farinha.mostra());
console.log(farofa.mostra());
farinha.comprar(100);
farofa.comprar(100);
farinha.vender(50);
farofa.vender(150);
farinha.subir(100);
farofa.subir(100);
console.log(farinha.mostra());
console.log(farofa.mostra());
