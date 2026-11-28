# DesarrolloWeb_M5

Misión M5 · Pixel Perfect — Web Development I.

## Cómo probarlo
Ejecutas npm run dev e inmediatamente podrás ver el título de nuestro videojuego y recorrer toda la información que desees sobre él, incluso añadirlo a tu wishlist (lo cual no está implementado porque el juego no va a salir realmente en steam ni en otras plataformas)

## Uso de IA
Usé Claude como pareja de programación: para ayudarme sobretodo a entender los conceptos de estas nuevas librerías y a mejorar mi eficiencia al escribir partes del código.

Ejemplos:
"vale, hazme una seccion que vamos a llamar Info. va a tener 3 tarjetitas primero en un grid que sean respondive con sm md y eso, que van a tener una imagen, y debajo de ella pondrá "explora" "resuelve" "descubre""


## Autopsia
La IA me sugirió hacer el cambio de modo oscuro a modo claro con una regla @layer base que cambiaba algunas variables del index.css cuando el html tenía la clase dark. 
Preferí hacer esto y reescribir las variables que se utilizan en la página web antes que ir escribiendo en todos los componentes que quiero que cambien la condición extra dark: y su alternativa, ya que eso podía llevar a tener demasiadas propiedades.
