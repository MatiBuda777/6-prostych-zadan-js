class Products{
    constructor(name = "Nieznany", price = 0, category = "Brak"){
        this.name = name
        this.price = price
        this.category = category
    }
}

// obiekty wcale nie generowane przez chat-gpt 
const products = [
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
// ^ ^ obiekty wcale nie generowane przez chat-gpt ^ ^

const byCategory = "Owoce i warzywa" // wpisz tu kategorię
const minPrice = 0 // wpisz minimalną cenę
const maxPrice = 7 // wpisz maksymalną cenę

// wybierz, po czym chcesz sortować produkty
const choice = "oba" // kategoria || cena || oba


if (choice == "kategoria"){
    const filterByCategory = products.filter( product => product.category == byCategory)
    console.log("Produkty przefiltrowane na podstawie kategorii:")
    filterByCategory.forEach(pp => { console.log(`Produkt: ${p.name}, cena: ${p.price}, kategoria: ${p.category}`) })
}

if (choice == "cena"){
    const filterByPrice = products.filter( product => minPrice <= product.price && product.price <= maxPrice)
    console.log("Produkty przefiltrowane na podstawie ceny:")
    filterByPrice.forEach(p => { console.log(`Produkt: ${p.name}, cena: ${p.price}, kategoria: ${p.category}`) })
}

if (choice == "oba"){
    const filterByBoth = products.filter( product => product.category == byCategory && minPrice <= product.price && product.price <= maxPrice)
    console.log("Produkty przefiltrowane na podstawie kategorii i ceny:")
    filterByBoth.forEach(p => { console.log(`Produkt: ${p.name}, cena: ${p.price}, kategoria: ${p.category}`) })
}