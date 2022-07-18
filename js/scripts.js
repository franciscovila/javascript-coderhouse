const carrito = [];

function agregarAlCarrito(producto){
carrito.push(producto);
console.log(carrito);
}



function borrarProductoDelCarrito(){
        carrito.pop();
        console.log(carrito);
}

// ACUMULADOR

const miCompra = [
{nombre: 'Remera negra XL', precio: 4200},
{nombre: 'Pantalon Cargo', precio: 4000},
{nombre: 'Buzo XL', precio: 5300}
];
const total = miCompra.reduce((acc, el) => acc + el.precio, 0);
console.log(total); 

// MAP 

const actualizado = miCompra.map ((el) => {
        return {
                nombre: el.nombre,
                precio: el.precio * 1.25 
        }
                });

console.log(actualizado);