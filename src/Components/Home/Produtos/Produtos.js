import React from "react";
import CartaoDosProdutos from "../CartaoDosProdutos/CartaoDosProdutos";
import { Cabecalho, GrupoDeCartoes } from "./estiloDosProdutos";

class Produtos extends React.Component {
  render() {
    const produtosOrdenados =
      this.props.produtos &&
      this.props.produtos.sort((a, b) => {
        if (this.props.ordenacao === "Crescente") {
          return a.preco - b.preco;
        } else {
          return b.preco - a.preco;
        }
      });

    const produtosMapeados =
      produtosOrdenados &&
      produtosOrdenados.map((produto) => {
        return (
          <CartaoDosProdutos
            key={produto.id}
            imagem={produto.photo}
            nome={produto.name}
            valor={produto.preco}
            onClick={() => this.props.onClick(produto)}
          />
        );
      });
    return (
      <div>
        <Cabecalho>
          <p>Quantidade de produtos: {this.props.quantidade}</p>
          <label>
            Preço:
            <select onChange={this.props.onChangeCabecalho}>
              <option value={"Crescente"}>Crescente</option>
              <option value={"Decrescente"}>Decrescente</option>
            </select>
          </label>
        </Cabecalho>
        <GrupoDeCartoes>{produtosMapeados}</GrupoDeCartoes>
      </div>
    );
  }
}

export default Produtos;
