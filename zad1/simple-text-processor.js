const text = "abcDEfGhi-jk_l_+mNOp.."
const processText = (text, { uppercase = false, reverse = false, removeSpecialChar = false } = {}) => {
    
    if (uppercase == true){
        let textUppercase = text.toUpperCase()
        console.log(textUppercase)
    }
    if (reverse == true){
        const [ ...rest ] = text;
        rest.reverse()
        let textReverse = rest.join("")
        console.log(textReverse)
    }
    if (removeSpecialChar == true){
        let textRemoveSpecialChar = text.replace(/[^a-zA-Z ]/g, '') // regex (regular expression)
        console.log(textRemoveSpecialChar)
    }
}

processText(text, {uppercase: true, reverse: true, removeSpecialChar: true})


