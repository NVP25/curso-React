import React from 'react'

const Producto = ({ producto, carrito, agregarProducto }) => {
 const { nombre, precio, id } = producto

 //Agregar Producto al Carrito
 const seleccionarProducto = (id) => {
  const productos = productos.filter((producto) => producto.id === id[0])
  agregarProducto([...carrito, ...producto])
 }

 //Elimina un producto del carrito
 const eliminarProducto = (id) => {
  const productos = carrito.filter((producto) => producto.id !== id)

  //Colocar los productos en el state
  agregarProducto(productos)
 }

 return (
  <div>
   <h2>{nombre}</h2>
   <p>${precio}</p>
   <button type='button' onClick={() => seleccionarProducto(id)}>
    comprar
   </button>
   {productos ? (
    <button type='button' onClick={() => seleccionarProducto(id)}>
     comprar
    </button>
   ) : (
    <button type='button' onClick={() => eliminarProductos(id)}>
     Eliminar
    </button>
   )}
  </div>
 )
}

export default Producto
