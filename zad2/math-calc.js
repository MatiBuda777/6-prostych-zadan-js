class Calculator {
    static add(...rest){
        let sum = rest.reduce((acc, num) => acc + num)
        console.log(`Suma liczb ${rest} to ${sum}`)
    }

    static subtract(...rest){
        let difference = rest.reduce((acc, num) => acc - num)
        console.log(`Różnica liczb ${rest} to ${difference}`)
    }

    static multiply(...rest){
        let product = rest.reduce((acc, num) => acc * num)
        console.log(`Iloczyn liczb ${rest} to ${product}`)
    }

    static divide(...rest){
        let ratio = rest.reduce((acc, num) => acc / num)
        console.log(`Iloraz liczb ${rest} to ${ratio}`)
    }
}

Calculator.add(1,2,3,4,5)
Calculator.subtract(10,2,3)
Calculator.multiply(2,5,10,20)
Calculator.divide(1000,10,2)