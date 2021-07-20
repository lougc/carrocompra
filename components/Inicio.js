import React from 'react'
import styled from 'styled-components'
import imgInicio from './../assets/img/img-inicio.jpg'

const Inicio = () =>{

    return (
        <div>
            <ContainerInicio>
                <ImagenInicio src={imgInicio} alt="Imagen inicio"/>
                <Jumbotron>
                    <h1 className="mb-10">Bienvenido/a,</h1>
                    <p>Conoce nuestra mejor ropa y accesorios de deporte.</p>
                </Jumbotron>
            </ContainerInicio>
        </div>
    )
}

const ContainerInicio = styled.div`
    position: relative;
`
const ImagenInicio = styled.img`
    width: 100%;
    min-height: 350px;
    object-fit: cover;
    object-position: 20%;
`
const Jumbotron = styled.div`
    margin: 20px 0;
    padding: 20px 0;
    background: rgba(238,243,245, 0.4);

    @media (min-width: 720px) {
        position: absolute;
        top: 30%;
        right: 50%;
        padding: 20px;
    }
`

export default Inicio