import React, { Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'

function App() {
 // Crear listado de productos
 const [productos, guardarProductos] = useState([
  { id: 1, nombre: 'camisa ReactJS', precio: 50 },
  { id: 2, nombre: 'camisa VueJS', precio: 40 },
  { id: 3, nombre: 'camisa Node.js', precio: 30 },
  { id: 4, nombre: 'camisa Angular', precio: 20 },
 ])

 //State para un carrito de compras
 const [carrito, agregarProducto] = useState([])

 //Obtener la fecha
 const fecha = new Date().getFullYear()

 return (
  <Fragment>
   <Header titulo='Tienda virtual' />

   <h1>Lista de Productos</h1>
   {productos.map((producto) => (
    <Producto
     producto={producto}
     productos={productos}
     key={producto.id}
     carrito={carrito}
     agregarProducto={agregarCarrito}
    />
   ))}
   <Footer fecha={fecha} />
  </Fragment>
 )
}

export default App
