const productos = [
    {
        id: 1,
        nombre: "Arroz",
        precio: 5000,
        cantidad_disponible: 20
    },
    {
        id: 2,
        nombre: "Leche",
        precio: 4000,
        cantidad_disponible: 15
    },
    {
        id: 3,
        nombre: "Pan",
        precio: 3000,
        cantidad_disponible: 5
    },
    {
        id: 4,
        nombre: "Huevos",
        precio: 12000,
        cantidad_disponible: 30
    },
    {
        id: 5,
        nombre: "Aceite",
        precio: 10000,
        cantidad_disponible: 0
    }
];

// Función flecha
const clasificarStock = (stock) => {
    if (stock === 0) {
        return "Agotado";
    } else if (stock < 10) {
        return "Stock bajo";
    } else if (stock < 20) {
        return "Stock medio";
    } else {
        return "Stock alto";
    }
};

// Función flecha
const calcularDescuento = (tipoCliente) => {
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
};


productos.forEach(({ nombre, cantidad_disponible }) => {
    console.log(
        `${nombre}: ${cantidad_disponible} unidades -> ${clasificarStock(cantidad_disponible)}`
    );
});


const preciosConIVA = productos.map(({ nombre, precio }) => ({
    nombre,
    precioOriginal: precio,
    precioConIVA: precio * 1.19
}));

console.log("Precios con IVA:");
console.table(preciosConIVA);

const productosStockBajo = productos.filter(
    ({ cantidad_disponible }) =>
        cantidad_disponible > 0 && cantidad_disponible < 10
);

console.log("Productos con stock bajo:");
console.table(productosStockBajo);

const valorTotalInventario = productos.reduce(
    (total, { precio, cantidad_disponible }) =>
        total + (precio * cantidad_disponible),
    0
);

console.log(
    `Valor total del inventario: $${valorTotalInventario.toLocaleString("es-CO")}`
);
const buscarProductoPorId = (id) => {
    try {
        const producto = productos.find(producto => producto.id === id);

        if (!producto) {
            throw new Error(`No existe un producto con el ID ${id}`);
        }

        return producto;

    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
};

console.log("Producto encontrado:");
console.log(buscarProductoPorId(1));
console.log("Búsqueda de producto inexistente:");
console.log(buscarProductoPorId(99));
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

const mostrarProducto = (producto) => {
    const { nombre, precio, cantidad_disponible } = producto;

    return `
        <h2>${nombre}</h2>
        <p><strong>Precio:</strong> $${precio.toLocaleString("es-CO")}</p>
        <p><strong>Stock:</strong> ${cantidad_disponible} unidades</p>
        <p><strong>Estado:</strong> ${clasificarStock(cantidad_disponible)}</p>
    `;
};

const botonProducto = document.getElementById("btnProducto");
const informacionProducto = document.getElementById("informacionProducto");

botonProducto.addEventListener("click", () => {
    const producto = buscarProductoPorId(3);

    if (producto) {
        informacionProducto.innerHTML = mostrarProducto(producto);
    }
});
