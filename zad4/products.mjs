class Products{
    constructor(name = "Nieznany", price = 0, category = "Brak"){
        this.name = name
        this.price = price
        this.category = category
    }
}

// obiekty wcale nie generowane przez chat-gpt
export const products = [
    new Products("Jabłko", 2.50, "Owoce i warzywa"),
    new Products("Baton truskawkowy", 2.90, "Słodycze"),
    new Products("Marchew", 5.20, "Owoce i warzywa"),
    new Products("Czekolada", 4.50, "Słodycze"),
    new Products("Woda mineralna", 1.50, "Napoje"),
    new Products("Sok pomarańczowy", 3.80, "Napoje"),
    new Products("Chleb", 3.00, "Pieczywo"),
    new Products("Ser żółty", 10.00, "Nabiał"),
    new Products("Ser feta", 12.50, "Nabiał"),
    new Products("Banany", 3.30, "Owoce i warzywa")
]