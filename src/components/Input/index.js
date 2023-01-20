import styled from "styled-components"

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 3px solid #FFF;
    padding: 16px 150px;
    border-radius: 10px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    

    &::placeholder {
            color: #FFF;
            font-size: 16px;
    }
`


export default Input