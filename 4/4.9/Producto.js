import React from 'react'

const Producto = ({ producto }) => {
 const { nombre, precio, id } = producto

 //Agregar Producto al Carrito
 const seleccionarProducto = () => {
  console.log('comprando...', id)
 }

 return (
  <div>
   <h2>{nombre}</h2>
   <p>${precio}</p>
   <button type='button' onClick={() => seleccionarProducto()}></button>
  </div>
 )
}

export default Producto
