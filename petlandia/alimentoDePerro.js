document.addEventListener("DOMContentLoaded", () => {
    // Lista de productos
  const productos = [
      {
        id: 1,
        nombre: "Alimento Excellent Formula para Perro Adulto - 20 Kg",
        imagen: "./assets/images/AP1.PNG",
        precio: 49140,
      },
      {
        id: 2,
        nombre: "Alimento Old Prince Novel Cordero y Arroz Perro Adulto Mediano y Grande - 15+3 Kg",
        imagen: "./assets/images/AP2.PNG",
        precio:55800,
      },
      {
        id: 3,
        nombre: "Alimento Royal Canin Mini Adulto - 1 Kg",
        imagen: "./assets/images/AP3.PNG",
        precio:8550,
      },
      {
        id: 4,
        nombre: "Alimento Pro Plan para Perro Adulto Mediano - 15+3Kg",
        imagen: "./assets/images/AP4.PNG",
        precio: 84850
      },
      {
        id: 5,
        nombre: "Alimento Complete Perro Adulto Raza Mediana y Grande - 20kg",
        imagen: "./assets/images/AP5.PNG",
        precio: 42500,
      },
      {
        id: 6,
        nombre: "Alimento Eukanuba Para Perro Adulto Raza Mediana - 15 Kg",
        imagen: "./assets/images/AP6.PNG",
        precio: 58615,
      },
      {
        id: 7,
        nombre: "Alimento Royal Canin Maxi Adulto - 15 Kg",
        imagen: "./assets/images/AP7.PNG",
        precio: 86212,
      },
      {
        id: 8,
        nombre: "Alimento Royal Canin Bulldog Francés Adulto - 3 Kg",
        imagen: "./assets/images/AP8.PNG",
        precio: 30800,
      },
      {
        id: 9,
        nombre: "Alimento Royal Canin Gastrointestinal Canine - 2 Kg",
        imagen: "./assets/images/AP9.PNG",
        precio: 23800,
      },
      {
        id: 10,
        nombre: "Alimento Fawna Perro Adulto Light - 15kg<",
        imagen: "./assets/images/AP10.PNG",
        precio: 71850,
      },
      {
        id: 11,
        nombre: "Alimento Pro Plan Veterinary Diets OM Obesidad - 2 Kg",
        imagen: "./assets/images/AP11.PNG",
        precio: 22250,
      },
      {
        id: 12,
        nombre: "Alimento Natural Mon Ami Adultos Pequeños Y Medianos - 3 Kg",
        imagen: "./assets/images/AP12.PNG",
        precio: 28240,
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
  