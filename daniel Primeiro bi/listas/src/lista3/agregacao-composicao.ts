class Product {
    private name:string
    private price: number
    constructor(name:string, price: number){
        this.name = name; this.price = price
    }
    // fazer os getters e setters
    setName(): string{
        return this.name
    }
    getName(): string{
        return this.name
    }
    setPrice(): number{
        return this.price
    }
    getPrice(): number{
        return this.price
    }
// metodo que converte objeto em string
toString(): string {
    return `{ Name: ${this.name} Price: ${this.price} }`
 }
}
const objtProduct = new Product('Alenza', 480)
const objtProduct2 = new Product('Bola', 200)

// class tudo para associação com produto

class CarItem {
    private product: Product //agregação 
    private quantity: number
    constructor (product: Product, quantity: number){
        this.product = product; this.quantity = quantity
    }
    // fazer os getters e setters
    setProduct(): Product {
        return this.product
    }
    getProduct(): Product{
        return this.product
    }
    setQuantity(): number{
        return this.quantity 
    }
    getQuantity(): number{
        return this.quantity
    }
    //método que calcula o valor total do item do carrinho
    calculateTotalPrice(): number {
        return this.quantity * this.product.getPrice()
    } 
    // método que converte objeto em string
    toString(): string{
        return `Car Item: {Product ${this.product.toString()} Quantity: ${this.quantity} Total Price ${this.calculateTotalPrice()}}`
    }
}
const objtCarItem = new CarItem(objtProduct, 2)
console.log(objtCarItem.toString())
const objtCarItem2 = new CarItem(objtProduct2, 50)
console.log(objtCarItem2.toString())

class ShoppingCart {
    private id: number
    private carItens: CarItem[]
}