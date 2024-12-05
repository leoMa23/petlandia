document.addEventListener("DOMContentLoaded", () => {
  // Lista de productos
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      imagen: "./assets/images/product-1.jpg",
      precio: 15000,
    },
    {
      id: 2,
      nombre: "Producto 2",
      imagen: "./assets/images/product-2.jpg",
      precio: 8500,
    },
    {
      id: 3,
      nombre: "Producto 3",
      imagen: "./assets/images/product-3.jpg",
      precio: 6500,
    },
    {
      id: 4,
      nombre: "Producto 4",
      imagen: "./assets/images/product-4.jpg",
      precio: 7580,
    },
    {
      id: 5,
      nombre: "Producto 5",
      imagen: "./assets/images/product-5.jpg",
      precio: 15000,
    },
    {
      id: 6,
      nombre: "Producto 6",
      imagen: "./assets/images/product-6.jpg",
      precio: 12000,
    },
    {
      id: 7,
      nombre: "Producto 7",
      imagen: "./assets/images/product-7.jpg",
      precio: 65000,
    },
    {
      id: 8,
      nombre: "Producto 8",
      imagen: "./assets/images/product-8.jpg",
      precio: 65000,
    },
  ];

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contadorBadge = document.querySelector(".btn-badge");

  // Función para actualizar el contador
  const actualizarContador = () => {
    const cantidadProductos = carrito.length;
    contadorBadge.textContent = cantidadProductos; // Actualiza el contador
  };

  // Seleccionamos todos los botones con la clase "card-action-btn"
  const botonesAgregar = document.querySelectorAll(".card-action-btn");

  // Event listener para cada botón
  botonesAgregar.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      // Obtén el producto basado en el índice del botón
      const productoSeleccionado = productos[index];

      // Agregar producto al carrito
      carrito.push(productoSeleccionado);

      // Guardar carrito actualizado en localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Notificar al usuario (opcional)
      alert(`${productoSeleccionado.nombre} agregado al carrito.`);

      // Actualizar el contador después de agregar el producto
      actualizarContador();
    });
  });

  // Inicializa el contador al cargar la página
  actualizarContador();
});
