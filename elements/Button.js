import styled from 'styled-components'


const Button = styled.button`
    border: none;
    background: #000;
    color: #fff;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;

    &:hover {
        background: #ccc;
        color: #000;
    }
`

export default Button