import React, { Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
 // Crear listado de productos
 const [productos, guardarProductos] = useState([
  { id: 1, nombre: 'camisa ReactJS', precio: 50 },
  { id: 2, nombre: 'camisa VueJS', precio: 40 },
  { id: 3, nombre: 'camisa Node.js', precio: 30 },
  { id: 4, nombre: 'camisa Angular', precio: 20 },
 ])

 //Obtener la fecha
 const fecha = new Date().getFullYear()

 return (
  <Fragment>
   <Header titulo='Tienda virtual' />

   <Footer fecha={fecha} />
  </Fragment>
 )
}

export default App
