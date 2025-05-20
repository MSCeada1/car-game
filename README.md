# Control de un coche con teclas ASDW

Este proyecto permite controlar un coche en pantalla mediante las teclas del teclado:

- `W`: mover hacia arriba
- `A`: mover hacia la izquierda
- `S`: mover hacia abajo
- `D`: mover hacia la derecha

Cada dirección cambia la imagen del coche según la dirección en la que se mueve.
El movimiento está limitado al área visible del navegador para que el coche no se salga de los bordes.

---

## Estructura del proyecto

```
coche/
├── coche.html          # Archivo principal con la estructura HTML
├── script.js           # Lógica de movimiento y eventos de teclado
├── estilos/
│   └── estilos.css     # Estilos CSS del coche y del fondo
├── img/
│   ├── coche-abajo.png
│   ├── coche-arriba.png
│   ├── coche-derecha.png
│   ├── coche-izquierda.png
│   └── red_vehicles.png   # Imagen extra no usada actualmente
└── README.md           # Este archivo con información del proyecto
```

---

## Instrucciones

1. Abre `coche.html` en un navegador moderno.
2. Usa las teclas `W`, `A`, `S`, `D` para mover el coche.
3. Verás cómo cambia la dirección del coche con cada tecla.

Este proyecto puede servir como introducción a eventos de teclado, posicionamiento en pantalla y manipulación del DOM.