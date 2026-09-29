// Variables para crear los objetos
let nameClients = "Kleyder";
let nameProduct = "Arroz";
const Proveedor = "Diana";
const dateInput = "29/09/2026";
const price = 5000;
let stock = 20;
let avaible = true;

// Impresión de los tipos de variables
console.log(typeof nameProduct);
console.log(typeof price);
console.log(typeof stock);
console.log(typeof avaible);
console.log(typeof dateInput);


// Arreglo de productos de Coquito Amarillo S.A.S.
const listProducts = [
    {
        Nombre: "Arroz",
        precio: 5000,
        Cantidad_disponible: 20
    },
    {
        Nombre: "Leche",
        precio: 4500,
        Cantidad_disponible: 15
    },
    {
        Nombre: "Pan",
        precio: 3000,
        Cantidad_disponible: 10
    },
    {
        Nombre: "Huevos",
        precio: 12000,
        Cantidad_disponible: 30
    },
    {
        Nombre: "Aceite",
        precio: 8500,
        Cantidad_disponible: 5
    }
];

// Calcular el valor total del inventario

let valorTotalInventario = 0;

for (let i = 0; i < listProducts.length; i++) {
    valorTotalInventario +=
        listProducts[i].precio * listProducts[i].Cantidad_disponible;
}

console.log(`El valor total del inventario es: $${valorTotalInventario}`);

// Mostrar nombre y estado de cada producto

console.log("ESTADO DE LOS PRODUCTOS:");

for (const producto of listProducts) {

    if (producto.Cantidad_disponible > 0) {
        console.log(`${producto.Nombre}: Disponible`);
    } else {
        console.log(`${producto.Nombre}: Agotado`);
    }
}

// Reducir el stock de un producto en promoción
// hasta llegar a cero

// Seleccionamos el producto "Aceite" para la promoción
let productoPromocion = listProducts[4];

let stockPromocion = productoPromocion.Cantidad_disponible;
let iteraciones = 0;

console.log(`
Producto en promoción: ${productoPromocion.Nombre}
Stock inicial: ${stockPromocion}
`);

// El ciclo se repite hasta que el stock llegue a cero
while (stockPromocion > 0) {
    stockPromocion--;
    iteraciones++;
}

console.log(`
Producto: ${productoPromocion.Nombre}
Stock final: ${stockPromocion}
Cantidad de iteraciones: ${iteraciones}
Producto agotado: ${stockPromocion === 0}
`);

console.log(`
El producto ingresado es: ${nameProduct}
El proveedor es: ${Proveedor}
Fecha de ingreso: ${dateInput}
Precio: $${price}
Cantidad disponible: ${stock}
¿Está disponible?: ${avaible}
`);