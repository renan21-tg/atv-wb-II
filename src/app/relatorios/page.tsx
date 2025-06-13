'use client';
import Card from "@/components/card";
import ComprasGenero from "@/components/Table/ComprasGenero";
import Geral from "@/components/Table/Geral";
import ListarTodos from "@/components/Table/ListarTodos";
import MaiorQuantidade from "@/components/Table/MaiorQuantidade";
import MaiorValor from "@/components/Table/MaiorValor";
import MenorQuantidade from "@/components/Table/MenorQuantidade";
import { Component } from "react";

class Page extends Component<any, { cardSelecionado: string }> {
  constructor(props: any) {
    super(props);
    this.state = { cardSelecionado: "" };
  }

  selecionarCard = (tipo: string) => {
    this.setState({ cardSelecionado: tipo });
  };

  renderConteudo = () => {
    switch (this.state.cardSelecionado) {
        case "maior-quantidade":
            return <MaiorQuantidade />;
        case "listar-todos":
            return <ListarTodos />;
        case "geral":
            return <Geral />;
        case "compras-genero":
            return <ComprasGenero />;
        case "menor-quantidade":
            return <MenorQuantidade />
        case "maior-valor":
            return <MaiorValor />
        default:
            return null;
    }
  };

  render() {
    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-blue-600 text-4xl font-bold mb-4">Relatórios</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-6 p-8">
          <Card
            titulo="Maiores consumidores em quantidade"
            descricao="Liste os 10 clientes que mais compraram (em quantidade, não valor)."
            onClick={() => this.selecionarCard('maior-quantidade')}
          />
          <Card
            titulo="Listar todos os clientes"
            descricao="Liste todos os clientes cadastrados, ordenados por gênero."
            onClick={() => this.selecionarCard('listar-todos')}
          />
          <Card
            titulo="Produtos e serviços mais consumidos"
            descricao="Liste os produtos e serviços mais consumidos no geral."
            onClick={() => this.selecionarCard('geral')}
          />
          <Card
            titulo="Produtos e serviços por gênero"
            descricao="Liste os produtos e serviços mais consumidos por gênero."
            onClick={() => this.selecionarCard('compras-genero')}
          />
          <Card
            titulo="Menores consumidores em quantidade"
            descricao="Liste os 10 clientes que menos compraram (em quantidade, não valor)."
            onClick={() => this.selecionarCard('menor-quantidade')}
          />
          <Card
            titulo="Maiores consumidores em valor"
            descricao="Liste os 5 clientes que mais gastaram."
            onClick={() => this.selecionarCard('maior-valor')}  
          />
        </div>

        <div className="flex justify-center">
          {this.state.cardSelecionado && (
            <div className="mt-6 p-4 bg-gray-100 rounded-xl w-full max-w-2xl">
              {this.renderConteudo()}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Page;