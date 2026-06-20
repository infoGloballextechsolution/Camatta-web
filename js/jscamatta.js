document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cart-btn');
    const cartCount = document.getElementById('cart-count');
    let contadorProductos = 0;

    // Simulación rápida: Al hacer clic al carrito, sumará un ítem para ver el cambio interactivo
    cartBtn.addEventListener('click', () => {
        contadorProductos++;
        cartCount.textContent = contadorProductos;
        console.log(`Productos en carrito: ${contadorProductos}`);
    });
});