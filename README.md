# Volá
Products Catalog - VolaFlyWear
## [eCommece Practice](https://gemmaclaverodelmoral.github.io/vola/) - Proyecto de prueba de funcionalidades de ecommerce usando React / Vite / TailwindCss. Simulacion parcial de presentacion de Catalogo de productos con algunas características de tiendas online como CheckOut, Account management, Sign In
Usando React, Vite y TailwanCSS

## ¿Que contiene este proyecto?
-	Acceso a base de datos FireStore
-	Filtros por título (input) y categorías (navbar) 
-	Creacion y vistas de CheckOuts de Ordenes de compra.
-	Creacion de buscador por nombre (parte de nombre) y por opciones del Navbar
-	Deploy a github
## ¿Qué se usó?
-	CSS, HTLM, JavaScrip, GiT y GitHub, manipulación del DOM, React, Vite con TailwindCSS
  
## Para mi:
-	Instalacion de Vite: ‘npm créate vite@latest’ y seguir instrucciones. Version de vite para este proyecto:
    //"vite": "^4.1.0" 
    //la version del curso es "4.1.0" _ Si da algun error raro. Se cambia en package.json
-	Instalacion de TaiwindCSS: ¡!!! Lo que diga la pagina oficial ¡!!! con vite.... antes la embarre!
-	Borrar todos los estilos css de index.css y app.css (excepto lo de @tailwind)
-	Para ejecutar en el Local: npm run dev 

## 01- Inicialización sin contenidos de las páginas principales del proyecto eCommerce. / ESQUELETO
## 02- Usar React Router DOM para enrutar las paginas
- npm install react-router-dom
## 03- Implementacion Nav-Bar 
- navlink para acceder a otras paginas
- navegador principal con dos hijos derecho y izquierdo
- uso de navlink - ya no funciona isActives y demas.... cuidado. Ahora se hace con useLocation:     import { NavLink, useLocation } from 'react-router-dom'
- uso de Layout
- desarrollo de cards con componentes dinamicos
- uso asincronico de base de datos de FireStore
- uso de iconos importados como componentes desde heroicons: npm install @heroicons/react
- uso de context para pasar la informacion de 1 componente a otrp: Por ejemplo: Del componente cart al componente Cart detail
- Implementación de Visualizacion de detalle de producto con componentes
- Implementacion de Checkout con componentes: Implementacion de Orden de compra y de lista de ordenes de compra
    - Guardar el producto seleccionado en un estado global con aperturas y cierres de componentes (show producto & chekout) segun necesidad.
    - Crear mini Card para la lista de chechouts
    - Crear boton de checkOut
    - Crear funcion totalizadora de precios de ambiente general, independiente de la logica del programa para poder ser reutilizada . UTILS
- Creacion de imput y uso de las opciones del Navbar para filtrar la lista de productos por categoria y parcial del nombre.
- Deploy:
    - en vite.config.js: introducir la base: base: ["https://GemmaClaverodelMoral.github.io/vola",] (vola es el nombre del repositorio en guthub)
    - En la linea de comandos: npm install --save-dev gh-pages
    - En los scripts de package.json: "deploy": "npm run build && gh-pages -d dist"
    - Ejecutamos el script en la linea de comandos: npm run deploy

- OJO: Quiero que el cursor valla despues que yo
- OJO: Quiero que en Detail las fotos pasen de unas a otras con las flechas laterales.
- OJO: Quiero que si pongo una lo¿upa en la foto se vea bastante grande con una lupa dentro de su cuadrito
- OJO: Quiero cambiar a una base de datos mas comoda que se pueda exportar y demas
- OJO: Falta desarrollar enlace a whapp con font awesome: npm install @fortawesome/fontawesome-free
- OJO: No esta desarrollado: Crear el carrito de compras SideMenu
- OJO: Los componentes de ShowProduct y CheckOut estan pisando el Grid en viewports de pocos pixeles.