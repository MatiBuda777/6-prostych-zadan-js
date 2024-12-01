import { products } from "./products.mjs"

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