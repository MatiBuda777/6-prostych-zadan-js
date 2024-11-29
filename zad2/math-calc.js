class Calculator {
    static add(...rest){
        let sum = rest.reduce((acc, num) => acc + num)
        return sum
    }

    static subtract(...rest){
        let difference = rest.reduce((acc, num) => acc - num)
        return difference
    }

    static multiply(...rest){
        let product = rest.reduce((acc, num) => acc * num)
        return product
    }

    static divide(...rest){
        let ratio = rest.reduce((acc, num) => acc / num)
        return ratio
    }
}

console.log(Calculator.add(1,2,3,4,5))
console.log(Calculator.subtract(10,2,3))
console.log(Calculator.multiply(2,5,10,20))
console.log(Calculator.divide(1000,10,2))