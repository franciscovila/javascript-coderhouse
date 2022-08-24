let productos = [];

const productosJson = async () => {
  const response = await fetch ('productos.json');
  const data = await response.json();
  let acumulador = ``;
  data.forEach((producto) => {
    acumulador += `
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
  })
  document.getElementById('cardContainer').innerHTML = acumulador;
  let botonsillo = document.createElement("div");
  botonsillo.innerHTML = `<div class="text-center"><a class="btn btn-primary mt-auto " 
onclick= "borrarProductoDelCarrito(); "
href="#">Borrar último producto del carrito</a>
</div>`;
  document.getElementById("cardContainer").appendChild(botonsillo);
}
productosJson();




const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce(
  (acumulador, producto) => acumulador + producto.price,
  0
);
document.getElementById(
  "cartNumber"
).innerHTML = `${carrito.length} - $${total}`;

function agregarAlCarrito (producto) {
carrito.push(producto);
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







