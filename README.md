# eCommerce-React-Vite
## Simulacion de eCommerce con algunas características de tiendas online usando React, Vite y TailwanCSS

## ¿Que contiene este proyecto?
-	eComerce
-	Filtros por título, categoría
-	Carrito: con acceso a detalle de cada elección. 
-	CheckOut: Ultima compra y todas las órdenes. Totalización.
-	Vistas: 
o	Home
o	My Orders
o	My Account
o	Sign In
## ¿Qué se usó?
-	CSS, HTLM, JavaScrip, GiT y GitHub, manipulación del DOM, React: Hooks, Context, Taps. Vite con TailwindCSS
-	Redireccionamiento/Enrutamiento con React:
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
- navegador principal con dos hijos derecho y izquierdo con clases TaiwlanCss
- uso de navlink - ya no funciona isActives y demas.... cuidado. Ahora se hace con useLocation:     import { NavLink, useLocation } from 'react-router-dom'
- uso de Layout
- desarrollo de cards
- enlace a whapp con font awesome: npm install @fortawesome/fontawesome-free
- uso asincronico de base de datos de FireStore
- uso de iconos importados como componentes desde heroicons: npm install @heroicons/react
- uso de context para pasar la informacion de 1 producto del componente cart al componente Cart detail
- Implementacion de Carrito de Compra:
    - Guardar el producto seleccionado en un estado global con aperturas y cierres de componentes (show producto & chekout) segun necesidad.
    - Crear el carrito de compras SideMenu
    - Crear una mini Card
    - Crear boton de checkOut
    - Crear funcion totalizadora de precios de ambiente general, independiente de la logica del programa para poder ser reutilizada
- Implementacion de Orden de compra y de lista de ordenes de compra

- OJO: Quiero que el cursor valla despues que yo
- OJO: Quiero que en Detail las fotos pasen de unas a otras con las flechas laterales.
- OJO: Quiero que si pongo una lo¿upa en la foto se vea bastante grande con una lupa dentro de su cuadrito
- OJO: Quiero cambiar a una base de datos mas comoda que se pueda exportar y demas


