class Student {
    constructor(name = "Nieznany", age = 0){ // konstruktor
        this.imie = name
        this.wiek = age
        this.oceny = []
    }

    addGrade(...grades) {
        this.oceny.push(...grades)
    }

    getAverage() {
        let avg = this.oceny.reduce((sum, num) => sum + num) / this.oceny.length()
        return avg
    }

    studentInfo() {
        const {imie, wiek, ...oceny} = this
        console.log(`${imie}, ${wiek} lat. Oceny ucznia: ${oceny}`)
    }
}

const uczen = new Student("Mateusz", 17)
uczen.addGrade(5,3,4,2,3)
uczen.getAverage()
uczen.studentInfo()