class Cart {
    products = []

    addProduct(name, price, number){
        const existingProduct = this.products.find(prod => prod.name === name)
        if (existingProduct) {
            existingProduct.number += number
        }
        else {
            this.products.push( new Product(name, price, number) )
        }
    }
    removeProduct(name, number){
        const productIndex = this.products.findIndex( prod => prod.name == name )
        if (productIndex != -1) {
            const product = this.products[productIndex]
            product.number -= number
            if (product.number <= 0) {
                this.products.splice(productIndex, 1)
            }
        }
    }
    showCart(){
        return this.products
    }
}

class Product {
    constructor(name = "Nieznany", price = 0, number = 0){
        this.name = name
        this.price = price
        this.number = number
    }
}

const cart = new Cart()

cart.addProduct("jabłko", 3, 15)
cart.addProduct("banan", 6, 8)
cart.addProduct("cytryna", 5, 2)
cart.addProduct("jabłko", 3, 45)
console.log(cart.showCart())

cart.removeProduct("jabłko", 50)
console.log(cart.showCart())