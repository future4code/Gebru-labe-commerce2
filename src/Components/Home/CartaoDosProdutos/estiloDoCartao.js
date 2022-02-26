import styled from "styled-components";

export const Cartao = styled.div`
  border: 10px dashed gray;
  display: flex;
  flex-direction: column;
  background-color: gray;
  border-radius: 10px;
`;

export const TextoDoCartao = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0 16px;
    padding: 10px;
    align-self: center;
  }
  button {
    margin: 10px;
    align-self: center;
    width: 70%;
    background-color: aliceblue;
    border-radius: 10px;
    border: 0px solid;
    font-family: Roboto;
    font-size: 15px;
    :hover {
      background-color: #FFDB58;
    }
    :active {
      background-color: #8FBC8F;
    }
  }
`;