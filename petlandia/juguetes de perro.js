document.addEventListener("DOMContentLoaded", () => {
  // Lista de productos
const productos = [
    {
      id: 1,
      nombre: "Juguete porta alimento goma",
      imagen: "./assets/images/jp0.webp",
      precio:18900,
    },
    {
      id: 2,
      nombre: "Campera Batik",
      imagen: "./assets/images/jp2.webp",
      precio:14400,
    },
    {
      id: 3,
      nombre: "Juguete rellenable alimento",
      imagen: "./assets/images/jp3.webp",
      precio:17500,
    },
    {
      id: 4,
      nombre: "Hueso Goma blanda",
      imagen: "./assets/images/jp4.WEBP",
      precio: 4400
    },
    {
      id: 5,
      nombre: "AFP pelota con audio",
      imagen: "./assets/images/jp5.WEBP",
      precio: 32200,
    },
    {
      id: 6,
      nombre: "Pelota Goma Saltarina 6cm",
      imagen: "./assets/images/JP6.WEBP",
      precio: 6500,
    },
    {
      id: 7,
      nombre: "Pelota de tenis con puas",
      imagen: "./assets/images/JP7.WEBP.webp",
      precio: 7900,
    },
    {
      id: 8,
      nombre: "Pelota de rugby con luz y sonido",
      imagen: "./assets/images/JP8.WEBP",
      precio: 8900,
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
