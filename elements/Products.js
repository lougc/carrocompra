import styled from 'styled-components'

const ContainerProducts = styled.div`
    display: grid;
    grid-template-columns: 290px;
    place-items: center center;
    justify-content: center;
    gap: 20px;
    padding: 20px 0;

    @media (min-width: 770px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: stretch;
    }
`

const Products = styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;

    p {
        margin-bottom: 10px;
    }
`
const ContainerImg = styled.div`
    width: 250px;
    height: 340px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
    }
`

export {ContainerProducts, Products, ContainerImg}