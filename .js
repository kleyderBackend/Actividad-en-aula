let nameClients = "Kleyder";
let nameProduct = "Arroz";
const Proveedor = "Diana";
const dateInput = "29/09/2026";
const price = 5000;
let stock = 20;
let avaible = true;

// impression of the variable types
console.log(typeof (nameProduct));
console.log(typeof (price));
console.log(typeof (stock));
console.log(typeof (avaible));
console.log(typeof (dateInput));


// created of the objects whith your entities
const products = {
    Nombre: nameProduct,
    Proveedor: Proveedor,
    precio: price,
    fecha_ingreso: dateInput,
    Cantidad_disponible: stock,
    disponibilidad: avaible
}

//impressión the type for the object
console.log(typeof (products));
// impression for to show the values that have the object
console.log(`
    el producto es: ${products.Nombre} , el proveedor es: ${products.Proveedor}, 
    con fecha de registro :${products.dateInput} su precio es: ${products.precio}.
    ¿ESTA DISPOIBLE?: ${products.disponibilidad} 
    y su cantidad es: ${products.Cantidad_disponible} 
    `);