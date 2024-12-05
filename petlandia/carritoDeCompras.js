document.addEventListener("DOMContentLoaded", () => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedorCarrito = document.querySelector("#contenedorCarrito");

  const actualizarCarrito = () => {
    // Limpiar el contenedor
    contenedorCarrito.innerHTML = "";

    // Si el carrito está vacío, mostrar mensaje
    if (carrito.length === 0) {
      contenedorCarrito.innerHTML = `
            <div class="alert alert-warning text-center" role="alert">
              No hay productos en el carrito.
            </div>`;
      return;
    }

    // Calcular la suma total asegurándonos de que 'precio' sea un número válido
    const sumaTotal = carrito.reduce((acc, producto) => {
      const precio = parseFloat(producto.precio);
      return !isNaN(precio) ? acc + precio : acc;
    }, 0);

    // Mostrar suma total arriba de los productos
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("mb-4");
    totalDiv.innerHTML = `
          <h4 class="titulo-total">
            Suma total de los productos: <strong>$${sumaTotal.toFixed(
              0
            )}</strong>
          </h4>
        `;
    contenedorCarrito.appendChild(totalDiv);

    // Crear fila de productos
    const row = document.createElement("div");
    row.classList.add("row", "gy-4");

    carrito.forEach((producto, index) => {
      const col = document.createElement("div");
      col.classList.add("col-md-4");

      col.innerHTML = `
            <div class="card h-100">
              <img src="${producto.imagen}" class="card-img-top" alt="${
        producto.nombre
      }">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: <strong>$${producto.precio.toFixed(
                 0
                )}</strong></p>
                <button class="btn btn-danger btn-sm eliminar-producto" data-index="${index}">Eliminar</button>
              </div>
            </div>
          `;

      row.appendChild(col);
    });

    // Agregar fila de productos al contenedor
    contenedorCarrito.appendChild(row);

    // Asignar eventos de eliminación a los botones
    const botonesEliminar = document.querySelectorAll(".eliminar-producto");
    botonesEliminar.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        carrito.splice(index, 1); // Eliminar producto del carrito
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar localStorage
        actualizarCarrito(); // Actualizar la vista
      });
    });
  };

  // Inicializar la vista del carrito
  actualizarCarrito();
});
