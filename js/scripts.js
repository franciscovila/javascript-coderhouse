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

const productos = [
        {id: 1, title: 'Remera Negra XL', price: 5300, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/144/208/products/whatsapp-image-2021-03-27-at-16-42-00-31-1f5e74dddd15eeca4c16182787449474-240-0.jpeg"},

        {id: 2, title: 'Pantalon Cargo', price: 4200, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/015/914/products/bclub11-e12dc76e00b566682016179053634854-1024-1024.jpg"},

        {id: 3, title: 'Buzo XL', price: 4000, img: "https://cdn.shopify.com/s/files/1/0527/0008/6469/products/HOMBREB-NG-A_bece5452-3a7b-467c-841a-cf3e5d50e1ea_2048x.jpg?v=1647277362"}
]



function prueba ()
{
for (const producto of productos) {
        let contenedor = document.createElement("div");
        contenedor.id = producto.id;
        contenedor.innerHTML = ` <div class="container px-4 px-lg-5 mt-5" >
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div class="col mb-5">
        <div class="card h-100">
        <h5 class="fw-bolder">${producto.title}</h5>
        <p>${producto.price}</p>
        <img class="card-img-top" src= ${producto.img} />
        <div class="card-body p-4">
        <div class="text-center">
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
        <a class="btn btn-outline-dark mt-auto"
        href="#">Agregar al Carrito</a> 
        `
        document.getElementById('420').appendChild(contenedor)
}
}

prueba ();

let botton = getElementById


