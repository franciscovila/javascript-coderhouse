let totalCarrito = 0;
let stockRemera = 5;
let stockPantalon = 3;
let stockBuzo = 2;

function agregarAlCarrito (producto, stock, ID) {
        const tenemosStock = validarStock (stock);
        if (tenemosStock) {
            console.log("Agregar producto al carrito: " + producto);
            totalCarrito++;
            switch (ID) {
                case 1:
                    {
                        stockRemera--
                        break;
                    }
                case 2:
                    {
                        stockPantalon--
                        break;
                    }
                case 3:
                    {
                        stockBuzo--
                        break;
                    }
                }
        }else{
                console.log("Lo siento no tenemos stock");
        } 
}

function validarStock(stock) {
    if (stock > 0) {
            return true;
        }else{
            return false;
        } 
    }




