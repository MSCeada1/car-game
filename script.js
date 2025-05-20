const coche = document.getElementById('coche'); // Obtiene el elemento con el id 'coche' y lo asigna a la constante coche
let topPos = 500; // Posición inicial del coche en el eje vertical (con respecto al margen superior de la ventana)
let leftPos = 100; // Posición inicial del coche en el eje horizontal (con respecto al margen izquierdo de la ventana)
const velocidad = 20; // Cantidad de píxeles que se moverá el coche por cada tecla presionada
const anchoCoche = 100; // Ancho de la imagen del coche (en píxeles)
const altoCoche = 100; // Altura de la imagen del coche (en píxeles)
const teclas = {}; // Objeto vacío para almacenar el estado de las teclas presionadas (true = presionada, false = no presionada)

document.addEventListener('keyup', function(e) {
    teclas[e.key.toLowerCase()] = false; // Cuando una tecla se suelta, se marca como no presionada en el objeto 'teclas'
});

document.addEventListener('keydown', function(e) {
    const tecla = e.key.toLowerCase(); // Obtiene la tecla que se presionó, convertida a minúsculas
    teclas[tecla] = true; // Marca la tecla como presionada en el objeto 'teclas'

    const maxAncho = window.innerWidth - anchoCoche; // Calcula el ancho máximo en el que el coche puede moverse 
    const maxAlto = window.innerHeight - altoCoche; // Calcula la altura máxima en la que el coche puede moverse 

    // Mover el coche en diagonal hacia arriba a la derecha si las teclas 'w' y 'd' están presionadas
    if (teclas['w'] && teclas['d']) {
        topPos = Math.max(0, topPos - velocidad); 
        // Mueve el coche hacia arriba sin pasarse del borde superior de la pantalla
        leftPos = Math.min(maxAncho, leftPos + velocidad); // Mueve el coche hacia la derecha sin pasarse del borde derecho
        coche.style.top = topPos + 'px';
        coche.style.left = leftPos + 'px'; 
        coche.style.backgroundImage = "url('img/coche-diagonal-derecha-arriba.png')"; 
    } 
  
    else if (teclas['s'] && teclas['a']) {
        topPos = Math.min(maxAlto, topPos + velocidad); 
        leftPos = Math.max(0, leftPos - velocidad); 
        coche.style.top = topPos + 'px'; 
        coche.style.left = leftPos + 'px'; 
        coche.style.backgroundImage = "url('img/coche-diagonal-izquierda-abajo.png')";
    } 
    // Mover el coche en diagonal hacia arriba a la izquierda si las teclas 'w' y 'a' están presionadas
    else if (teclas['w'] && teclas['a']) {
        topPos = Math.max(0, topPos - velocidad); // Mueve el coche hacia arriba sin pasarse del borde superior de la pantalla
        leftPos = Math.max(0, leftPos - velocidad); // Mueve el coche hacia la izquierda sin pasarse del borde izquierdo
        coche.style.top = topPos + 'px'; // Actualiza la posición vertical del coche
        coche.style.left = leftPos + 'px'; // Actualiza la posición horizontal del coche
        coche.style.backgroundImage = "url('img/coche-diagonal-izquierda-arriba.png')"; // Cambia la imagen del coche a una específica para esta dirección
    } 
    // Mover el coche en diagonal hacia abajo a la derecha si las teclas 's' y 'd' están presionadas
    else if (teclas['s'] && teclas['d']) {
        topPos = Math.min(maxAlto, topPos + velocidad); // Mueve el coche hacia abajo sin pasarse del borde inferior de la pantalla
        leftPos = Math.min(maxAncho, leftPos + velocidad); // Mueve el coche hacia la derecha sin pasarse del borde derecho
        coche.style.top = topPos + 'px'; // Actualiza la posición vertical del coche
        coche.style.left = leftPos + 'px'; // Actualiza la posición horizontal del coche
        coche.style.backgroundImage = "url('img/coche-diagonal-derecha-abajo.png')"; // Cambia la imagen del coche a una específica para esta dirección
    } 
    // Mover el coche hacia arriba si solo se presiona la tecla 'w'
    else if (tecla === 'w') {
        topPos = Math.max(0, topPos - velocidad); // Mueve el coche hacia arriba sin pasarse del borde superior de la pantalla
        coche.style.top = topPos + 'px'; // Actualiza la posición vertical del coche
        coche.style.backgroundImage = "url('img/coche-arriba.png')"; // Cambia la imagen del coche a una imagen de coche hacia arriba
    } 
    // Mover el coche hacia abajo si solo se presiona la tecla 's'
    else if (tecla === 's') {
        topPos = Math.min(maxAlto, topPos + velocidad); // Mueve el coche hacia abajo sin pasarse del borde inferior de la pantalla
        coche.style.top = topPos + 'px'; // Actualiza la posición vertical del coche
        coche.style.backgroundImage = "url('img/coche-abajo.png')"; // Cambia la imagen del coche a una imagen de coche hacia abajo
    } 
    // Mover el coche hacia la izquierda si solo se presiona la tecla 'a'
    else if (tecla === 'a') {
        leftPos = Math.max(0, leftPos - velocidad); // Mueve el coche hacia la izquierda sin pasarse del borde izquierdo de la pantalla
        coche.style.left = leftPos + 'px'; // Actualiza la posición horizontal del coche
        coche.style.backgroundImage = "url('img/coche-izquierda.png')"; // Cambia la imagen del coche a una imagen de coche hacia la izquierda
    } 
    // Mover el coche hacia la derecha si solo se presiona la tecla 'd'
    else if (tecla === 'd') {
        leftPos = Math.min(maxAncho, leftPos + velocidad); // Mueve el coche hacia la derecha sin pasarse del borde derecho de la pantalla
        coche.style.left = leftPos + 'px'; // Actualiza la posición horizontal del coche
        coche.style.backgroundImage = "url('img/coche-derecha.png')"; // Cambia la imagen del coche a una imagen de coche hacia la derecha
    }
});