const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce(
  (acumulador, producto) => acumulador + producto.price,
  0
);
document.getElementById(
  "cartNumber"
).innerHTML = `${carrito.length} - $${total}`;

function agregarAlCarrito(producto) {
carrito.push(producto);
  console.log(carrito);
  let cartNumber = parseInt(document.getElementById("cartNumber").innerHTML);
  cartNumber++;
  document.getElementById("cartNumber").innerHTML = cartNumber;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.price,
    0
  );
  document.getElementById(
    "cartNumber"
  ).innerHTML = `${carrito.length} - $${total}`;
  Swal.fire({
  icon: 'success',
  title: 'Producto agregado al carrito!',
  text: 'Gracias por elegirnos!',
  })
}



function borrarProductoDelCarrito() {
  carrito.pop();
  console.log(carrito);
  let cartNumber = parseInt(document.getElementById("cartNumber").innerHTML);
  (cartNumber != 0) && cartRemover();
  Swal.fire({
    icon: 'error',
    title: 'Producto eliminado del carrito!',
    text: 'Gracias por elegirnos!',
    })
  }

function cartRemover() 
{
  cartNumber--;
  document.getElementById("cartNumber").innerHTML = cartNumber;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.price,
    0
  );
  document.getElementById(
    "cartNumber"
  ).innerHTML = `${carrito.length} - $${total}`;
}



const productos = [
  {
    id: 1,
    title: "Remera Negra XL",
    price: 5300,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/144/208/products/whatsapp-image-2021-03-27-at-16-42-00-31-1f5e74dddd15eeca4c16182787449474-240-0.jpeg",
  },

  {
    id: 2,
    title: "Pantalon Cargo",
    price: 4200,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/015/914/products/bclub11-e12dc76e00b566682016179053634854-1024-1024.jpg",
  },

  {
    id: 3,
    title: "Buzo XL",
    price: 4000,
    img: "https://cdn.shopify.com/s/files/1/0527/0008/6469/products/HOMBREB-NG-A_bece5452-3a7b-467c-841a-cf3e5d50e1ea_2048x.jpg?v=1647277362",
  },
];

function prueba() {
  for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.id = producto.id;
    contenedor.innerHTML = `
<div class="col mb-5">
<div class="card h-100">
        <!-- Sale badge-->
<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
        <!-- Product image-->
<img class="card-img-top" src="${producto.img}" alt="..." />
        <!-- Product details-->
<div class="card-body p-4">
<div class="text-center">
        <!-- Product name-->
<h5 class="fw-bolder">${producto.title}</h5>
        <!-- Product price-->
$${producto.price} 
</div>
</div>
<!-- Product actions-->
<div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
<div class="text-center"><a class="btn btn-outline-dark mt-auto " 
onclick= "agregarAlCarrito({id: ${producto.id}, name: '${producto.title}', price: ${producto.price} })"
href="#">Agregar al carrito</a></div>
</div>
</div>
</div>
`
    document.getElementById("cardContainer").appendChild(contenedor);
  }

  let botonsillo = document.createElement("div");
  botonsillo.innerHTML = `<div class="text-center"><a class="btn btn-primary mt-auto " 
onclick= "borrarProductoDelCarrito(); "
href="#">Borrar último producto del carrito</a>
</div>`;
  document.getElementById("cardContainer").appendChild(botonsillo);
}

prueba();

