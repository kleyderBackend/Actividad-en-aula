function clasificarStock(stock) {
    if (stock === 0) {
        return "Agotado";
    } else if (stock < 10) {
        return "Stock bajo";
    } else if (stock < 20) {
        return "Stock medio";
    } else {
        return "Stock alto";
    }
}

function calcularDescuento(tipoCliente) {
    switch (tipoCliente) {
        case "mayorista":
            return 0.15;
        case "frecuente":
            return 0.10;
        case "nuevo":
            return 0.05;
        default:
            return 0;
    }
}

console.log(`Stock: 0 -> ${clasificarStock(0)}`);
console.log(`Stock: 5 -> ${clasificarStock(5)}`);
console.log(`Stock: 15 -> ${clasificarStock(15)}`);
console.log(`Stock: 20 -> ${clasificarStock(20)}`);
console.log(`Stock: 30 -> ${clasificarStock(30)}`);


console.log(
    `Cliente mayorista: ${calcularDescuento("mayorista") * 100}%`
);

console.log(
    `Cliente frecuente: ${calcularDescuento("frecuente") * 100}%`
);

console.log(
    `Cliente nuevo: ${calcularDescuento("nuevo") * 100}%`
);

console.log(
    `Cliente ocasional: ${calcularDescuento("ocasional") * 100}%`
);

const producto1 = {
    Nombre: "Arroz",
    Cantidad_disponible: 20
};

const producto2 = {
    Nombre: "Leche",
    Cantidad_disponible: 15
};

const producto3 = {
    Nombre: "Pan",
    Cantidad_disponible: 10
};

const producto4 = {
    Nombre: "Huevos",
    Cantidad_disponible: 30
};

const producto5 = {
    Nombre: "Aceite",
    Cantidad_disponible: 0
};


// Mostrar los resultados de los casos de prueba

console.log(
    `${producto1.Nombre}: ${producto1.Cantidad_disponible} unidades -> ${clasificarStock(producto1.Cantidad_disponible)}`
);

console.log(
    `${producto2.Nombre}: ${producto2.Cantidad_disponible} unidades -> ${clasificarStock(producto2.Cantidad_disponible)}`
);

console.log(
    `${producto3.Nombre}: ${producto3.Cantidad_disponible} unidades -> ${clasificarStock(producto3.Cantidad_disponible)}`
);

console.log(
    `${producto4.Nombre}: ${producto4.Cantidad_disponible} unidades -> ${clasificarStock(producto4.Cantidad_disponible)}`
);

console.log(
    `${producto5.Nombre}: ${producto5.Cantidad_disponible} unidades -> ${clasificarStock(producto5.Cantidad_disponible)}`
);