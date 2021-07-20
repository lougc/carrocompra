import React from 'react'
import {ContainerProducts, Products, ContainerImg} from './../elements/Products'
import Button from './../elements/Button'
import accesorios1 from './../assets/img/accesorios-1.jpg'
import accesorios2 from './../assets/img/accesorios-2.jpg'
import accesorios3 from './../assets/img/accesorios-3.jpg'
import accesorios4 from './../assets/img/accesorios-4.jpg'
import accesorios5 from './../assets/img/accesorios-5.jpg'
import accesorios6 from './../assets/img/accesorios-6.jpg'

const Accesorios = ({agregarProducto}) =>{
    const products = [
        {id:13, marca: 'Nike Perfomance', modelo: 'Gorra-Aero Advantage', image: accesorios1, precio: 27.95},
        {id:14, marca: 'Nike Perfomance', modelo: 'Mochila-Elite Pro', image: accesorios2, precio: 54.95},
        {id:15, marca: 'Jordan', modelo: 'Mochila-Jumpman by Nike', image: accesorios3, precio: 49.95},
        {id:16, marca: 'Adidas Performance', modelo: 'Mitones-Versatile Climate', image: accesorios4, precio: 29.95},
        {id:17, marca: 'Quicksilver', modelo: 'Gorra-Sun faded', image: accesorios5, precio: 27.99},
        {id:18, marca: 'Adidas Performance', modelo: 'Mochila-Essentials Duffel', image: accesorios6, precio: 24.95}
    ]
    return (
        <div>
            <h1>Accesorios</h1>
            <ContainerProducts>
                {products.map((product, index) => {
                    return (
                        <Products key={index}>
                            <ContainerImg>
                                <img src={product.image} alt="Imagen accesorios"/>
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

export default Accesorios