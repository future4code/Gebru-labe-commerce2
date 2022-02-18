import styled from "styled-components";

export const ConjuntoDoCarrinho = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: gray;
    border-radius: 10px;
    button {
        border-radius: 5px;
        background-color: #E0FFFF;
        font-family: Roboto;
        font-size: 15px;
        border: 0px solid;
        :hover {
            background-color: #D3D3D3;
        }
    }
`