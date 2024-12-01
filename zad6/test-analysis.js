// wyniki Prostego Teściku u pana Adama Romana
const scores = [
    { name: 'Jan', score: 85 },
    { name: 'Anna', score: 92 },
    { name: 'Marek', score: 78 },
    { name: 'Ewa', score: 88 },
    { name: 'Tomasz', score: 95 },
]

const avg = (scores) => {
    const avg = (scores.reduce((acc, { score }) => acc + score, 0)) / scores.length
    return avg
}
const maxAndMinScore = (scores) => {
    const sc = scores.map(({ score }) => score)
    const min = Math.min(...sc)
    const max = Math.max(...sc)
    return { min, max }
}
const showScores = (scores) => {
    scores.forEach(({ name, score }) => {
        console.log(`Student: ${name}, wynik: ${score}`)
    })
}

const analysis = (scores) => {
    showScores(scores)
    const average = avg(scores)
    const { min, max } = maxAndMinScore(scores)

    console.log(`Średnia wyników: ${average}`)
    console.log(`Najniższy wynik: ${min}`)
    console.log(`Najwyższy wynik: ${max}`)
}

analysis(scores)