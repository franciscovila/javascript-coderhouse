const carrito = [];

function agregarAlCarrito(producto){
carrito.push(producto);
console.log(carrito);
}



function borrarProductoDelCarrito(){
        carrito.pop();
        console.log(carrito);
}

