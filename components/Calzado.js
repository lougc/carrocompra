import React from 'react'
import {ContainerProducts, Products, ContainerImg} from './../elements/Products'
import Button from './../elements/Button'
import calzado1 from './../assets/img/calzado-1.jpg'
import calzado2 from './../assets/img/calzado-2.jpg'
import calzado3 from './../assets/img/calzado-3.jpg'
import calzado4 from './../assets/img/calzado-4.jpg'
import calzado5 from './../assets/img/calzado-5.jpg'
import calzado6 from './../assets/img/calzado-6.jpg'

const Calzado = ({agregarProducto}) =>{
    const products = [
        {id:7, marca: 'Nike Perfomance', modelo: 'Revolution', image: calzado1, precio: 44.95},
        {id:8, marca: 'Adidas Performance', modelo: 'EQ19 run', image: calzado2, precio: 69.95},
        {id:9, marca: 'Nike Performance', modelo: 'Revolution 5', image: calzado3, precio: 45.95},
        {id:10, marca: 'Nike Performance', modelo: 'Legend Essential', image: calzado4, precio: 59.95},
        {id:11, marca: 'Nike Performance', modelo: 'Air Zoom Pegasus', image: calzado5, precio: 99.95},
        {id:12, marca: 'Nike Performance', modelo: 'Reax 8', image: calzado6, precio: 79.95}
      ]

    return (
        <div>
            <h1>Calzado</h1>
            <ContainerProducts>
                {products.map((product, index) => {
                    return (
                        <Products key={index}>
                            <ContainerImg>
                                <img src={product.image} alt="Imagen calzado"/>
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

export default Calzado