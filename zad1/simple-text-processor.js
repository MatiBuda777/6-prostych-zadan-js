let text = "abcDEfGhi-jk_l_+mNOp.."
const processText = (text, { uppercase = false, reverse = false, removeSpecialChar = false } = {}) => {
    let operacje = []
    if (uppercase == true){
        text = text.toUpperCase()
        operacje.push(" konwersja na duże litery")
    }

    if (reverse == true){
        const [ ...rest ] = text;
        rest.reverse()
        text = rest.join("")
        operacje.push(" odwrócenie kolejności liter")
    }

    if (removeSpecialChar == true){
        text = text.replace(/[^a-zA-Z ]/g, '') // regex (regular expression) 
        operacje.push(" usunięcie znaków specjalnych")
    }

    console.log(`Tekst po operacjach: ${operacje} - '${text}'`)
}

processText(text, {uppercase: true, reverse: true, removeSpecialChar: true})