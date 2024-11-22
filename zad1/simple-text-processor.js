const text = "abcDEfGhi-jk_l_+mNOp.."
const processText = (text, { uppercase = false, reverse = false, removeSpecialChar = false } = {}) => {
    const { ...rest } = {uppercase, reverse, removeSpecialChar};
    let textReverse = ""
    let textRemoveSpecialChar = ""
    if (uppercase == true){
        let textUppercase = text.toUpperCase()
        console.log(textUppercase)
    }
    
}


