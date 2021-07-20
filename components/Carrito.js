import React from 'react'
import styled from 'styled-components'

const Carrito = ({carrito, incrementarCantidad, eliminarProducto}) =>{

    const precioTotal = carrito.reduce((a, c)=> a + c.precio * c.cantidad, 0)
    
    return (
        <div>
            <Titulo>Carrito de compras</Titulo>
            {carrito.length > 0 ?
                carrito.map((product, index)=>{
                    const precioProductos = product.precio * product.cantidad
                    return (
                        
                        <ContainerCarrito key={index}>
                            <div>
                                <h4>{product.marca}</h4>
                                <p>{product.modelo}</p>
                            </div>
                            <div>
                                <div>
                                    <BotonRestar onClick={()=>eliminarProducto(product)}>-</BotonRestar><BotonIncrementar onClick={()=>incrementarCantidad(product)}>+</BotonIncrementar><small>Cantidad: {product.cantidad}</small>
                                </div>
                                    <Precio>{precioProductos.toFixed(2)} €</Precio>
                            </div>  
                        </ContainerCarrito>
                    )
                })
            :
                <p className="mb-10">No has agregado productos al carrito</p>    
            }
            <Total>
                <h4>Total a Pagar:</h4>
               <span>{precioTotal.toFixed(2)} €</span>
            </Total>

        </div>
    )
}
const Titulo = styled.h3`
    margin-bottom: 29px;
    margin-top: 8px;
`
const ContainerCarrito = styled.div`
    display: flex;
    justify-content: space-between;
    background: #000;
    color: #fff;
    padding: 10px;
    font-size: 14px;
`
const Precio = styled.small`
    background: red;
    margin-left: 63px;
`
const BotonRestar = styled.button`
    padding: 0px 5.5px;
    border-radius: 100%;
`
const BotonIncrementar = styled.button`
    margin-right: 3px;
    padding: 0 4px;
    border-radius: 100%;
`
const Total = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #000;
`

export default Carrito