document.addEventListener("DOMContentLoaded", () => {
    // Lista de productos
  const productos = [
      {
        id: 1,
        nombre: "Royal Canin gato renal alimento humedo 85gr",
        imagen: "./assets/images/alimento gato1.webp",
        precio: 5200,
      },
      {
        id: 2,
        nombre: "Royal Canin recovery alimento humedo 195gr",
        imagen: "./assets/images/alimento gato2.webp",
        precio: 4400,
      },
      {
        id: 3,
        nombre: "Royal Canin recovery alimento humedo 195gr",
        imagen: "./assets/images/alimento gato3.webp",
        precio: 7500,
      },
      {
        id: 4,
        nombre: "Dispenser gato",
        imagen: "./assets/images/alimento gato4.webp",
        precio: 16000
      },
      {
        id: 5,
        nombre: "Royal Canin kitten gato 1.5kg",
        imagen: "./assets/images/alimento gato5.webp",
        precio: 30700,
      },
      {
        id: 6,
        nombre: "Royal Canin indoor gato 1.5k",
        imagen: "./assets/images/alimento gato6.webp",
        precio: 28300,
      },
      {
        id: 7,
        nombre: "Royal Canin fit gato 1.5kg",
        imagen: "./assets/images/alimento gato7.webp",
        precio: 28300,
      },
      {
        id: 8,
        nombre: "AFP bowl de tela p/ alimento",
        imagen: "./assets/images/alimento gato8.webp",
        precio: 13200,
      },
      {
        id: 9,
        nombre: "Bebedero portatil con compartimiento de alimento",
        imagen: "./assets/images/alimento gato9.webp",
        precio: 13700,
      },
      {
        id: 10,
        nombre: "Royal Canin gato gastrointestinal alimento humedo 85gr",
        imagen: "./assets/images/alimento gato10.webp",
        precio: 4500,
      },
      {
        id: 11,
        nombre: "Agility para gatos urinary 1.5kg",
        imagen: "./assets/images/alimento gato11.webp",
        precio: 15900,
      },
      {
        id: 12,
        nombre: "Agility para gatos adultos 1.5kg",
        imagen: "./assets/images/alimento gato12.webp",
        precio: 14900,
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