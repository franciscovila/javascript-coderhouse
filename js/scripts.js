const carrito = [];

function agregarAlCarrito(producto){
carrito.push(producto);
console.log(carrito);
let cartNumber = parseInt(document.getElementById('cartNumber').innerHTML);
cartNumber++;
document.getElementById('cartNumber').innerHTML = cartNumber;
}




function borrarProductoDelCarrito(){
        carrito.pop();
        console.log(carrito);
        let cartNumber = parseInt(document.getElementById('cartNumber').innerHTML);
        if (cartNumber != 0){
        cartNumber--;
        document.getElementById('cartNumber').innerHTML = cartNumber;      
        }
        
        
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

