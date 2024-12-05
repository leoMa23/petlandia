document.addEventListener("DOMContentLoaded", () => {
    // Lista de productos
  const productos = [
      {
        id: 1,
        nombre: "Mix Gato - rata y bolita de tela",
        imagen: "./assets/images/juguete gato1.webp",
        precio: 4100,
      },
      {
        id: 2,
        nombre: "Juguete gato con plumas",
        imagen: "./assets/images/juguete gato2.webp",
        precio: 2800,
      },
      {
        id: 3,
        nombre: "Juguete gato con vibrador",
        imagen: "./assets/images/juguete gato3.webp",
        precio: 7600,
      },
      {
        id: 4,
        nombre: "Juguete pelota interactiva con pluma",
        imagen: "./assets/images/juguete gato 4.webp",
        precio: 2800
      },
      {
        id: 5,
        nombre: "Juguete rellenable de alimento",
        imagen: "./assets/images/juguete gato5.webp",
        precio: 17500,
      },
      {
        id: 6,
        nombre: "Rascal 4 pelotas",
        imagen: "./assets/images/juguete gato6.webp",
        precio: 10500,
      },
      {
        id: 7,
        nombre: "Juguete rolando p/ exterior",
        imagen: "./assets/images/juguete gato7.webp",
        precio: 5100,
      },
      {
        id: 8,
        nombre: "Rascador para gato",
        imagen: "./assets/images/juguete gato8.jpg",
        precio: 45300,
      },
      {
        id: 9,
        nombre: "Pelota gato cordero",
        imagen: "./assets/images/juguete gato9.webp",
        precio: 2700,
      },
      {
        id: 10,
        nombre: "Arnes gato ryr",
        imagen: "./assets/images/juguete gato10.webp",
        precio: 24500,
      },
      {
        id: 11,
        nombre: "Rascador esquinero para gatos",
        imagen: "./assets/images/juguete gato11.webp",
        precio: 5900,
      },
      {
        id: 12,
        nombre: "Pelota con hueco para gato",
        imagen: "./assets/images/juguete gato12.webp",
        precio: 8600,
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