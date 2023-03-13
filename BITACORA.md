Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

En la carpeta root de la aplicacion correr: npm install
Navega al directorio front y vuelve a correr el comando: npm install
Regresa al directorio root cd ...
La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

npm run dev

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.



Resolucion de la prueba Front End :

-Crear la carpeta redux en el front donde iran los archivos de la store, actions y reducer.  
-Definir que componentes se usaran y crear un archivo para cada uno junto con su CSS module.  
-Configurar las rutas en App.js con sus respectivos componentes.  
-Conectar el backend con el frontend en las actions de getProducts y getDetails, para ello se instalo y uso axios.  
-Se uso la filosofía "Mobile-First Responsive Design".  
-El componente de la pagina principal es el Home.jsx donde va una NavBar y abajo las Cards donde renderiza cada producto en una Card.  
-Al hacer clic en cada Card se redirige al componente Detail donde se muestran mas detalles del producto.  
-Crear una action que limpie el estado cuando se desmonta el componente details.  
-Crear un boton en Details.jsx que añada el producto al carrito.  
-Dentro del carrito se renderizan los productos en un componente CardProduct que muestra la imagen, nombre, precio y cantidad, asimismo se puede eliminar el producto del carrito y añadir o quitar de uno en uno.  
-Se uso la libreria React Hot Toast para mostrar una alerta cuando se añade o elimina un producto del carrito.  
-En la NavBar se ve un icono del carrito donde muestra en tiempo la real la cantidad de produtos que contiene.  
-Se muestra el rating tanto el la Card del home como en los details.  
-Se realizo diseño responsive tanto para mobile como desktop.


Dependencias instaladas:

- react-router-dom
- redux
- react-redux
- redux-thunk
- axios
- react hot toast