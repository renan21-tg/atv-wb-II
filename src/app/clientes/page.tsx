'use client';
import Card from "@/components/card";
import AtlCliente from "@/components/Forms/AtlCliente";
import CadCliente from "@/components/Forms/CadCliente";
import ExcCliente from "@/components/Forms/ExcCliente";
import TableCliente from "@/components/Table/TableCliente";
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
      case "cliente":
        return <CadCliente />;
      case "atualiza":
        return <AtlCliente />;
      case "excluir":
        return <ExcCliente />;
      case "listar-clientes":
        return <TableCliente />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-blue-600 text-4xl font-bold mb-4">Clientes</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-6 p-8">
          <Card
            titulo="Cadastrar Cliente"
            descricao="Formulário para cadastro de cliente"
            onClick={() => this.selecionarCard("cliente")}
          />
          <Card
            titulo="Atualizar Cliente"
            descricao="Formulário para atualizar dados do cliente"
            onClick={() => this.selecionarCard("atualiza")}
          />
          <Card
            titulo="Excluir Cliente"
            descricao="Formulário para excluir cliente"
            onClick={() => this.selecionarCard("excluir")}
          />
          <Card
            titulo="Listar todos os Clientes"
            descricao="Veja a lista de todos os clientes"
            onClick={() => this.selecionarCard("listar-clientes")}
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
