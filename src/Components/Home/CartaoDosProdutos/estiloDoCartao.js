import styled from "styled-components";

export const Cartao = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
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
  }
`;