import React from 'react'
import {ContainerProducts, Products, ContainerImg} from './../elements/Products'
import Button from './../elements/Button'
import ropa1 from './../assets/img/ropa-1.jpg'
import ropa2 from './../assets/img/ropa-2.jpg'
import ropa3 from './../assets/img/ropa-3.jpg'
import ropa4 from './../assets/img/ropa-4.jpg'
import ropa5 from './../assets/img/ropa-5.jpg'
import ropa6 from './../assets/img/ropa-6.jpg'

const Ropa = ({agregarProducto}) =>{
    const products = [
        {id:1, marca: 'Adidas Perfomance', modelo: 'Camiseta-Tee', image: ropa1, precio: 29.95},
        {id:2, marca: 'Adidas Performance', modelo: 'Camiseta-Core Eleven', image: ropa2, precio: 19.95},
        {id:3, marca: 'Adidas Performance', modelo: 'Sudadera-Grauschwarz', image: ropa3, precio: 49.95},
        {id:4, marca: 'Adidas Performance', modelo: 'Pantalones-Core 18', image: ropa4, precio: 35.96},
        {id:5, marca: 'Adidas Performance', modelo: 'Pantalones-Grey Melange', image: ropa5, precio: 43.95},
        {id:6, marca: 'Nike Performance', modelo: 'Bermudas-Revival', image: ropa6, precio: 40.95}
      ]

    return (
        <div>
            <h1>Ropa Deportiva</h1>
            <ContainerProducts>
                {products.map((product, index) => {
                    return (
                        <Products key={index}>
                            <ContainerImg>
                                <img src={product.image} alt="Imagen ropa"/>
                            </ContainerImg>
                            <h3>{product.marca}</h3>
                            <p>{product.modelo}</p>
                            
                            <span>{product.precio} €</span>
                            <Button onClick={()=>agregarProducto(product.id, product.marca, product.modelo, product.precio)}>Agregar al Carrito</Button>
                        </Products>
                    )
                })}
            </ContainerProducts>
        </div>
    )
}

export default Ropa