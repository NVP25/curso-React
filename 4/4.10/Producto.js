import React from 'react'

const Producto = ({ producto, carrito, agregarProducto }) => {
 const { nombre, precio, id } = producto

 //Agregar Producto al Carrito
 const seleccionarProducto = (id) => {
  const productos = productos.filter((producto) => producto.id === id)
  console.log(producto[0])
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
