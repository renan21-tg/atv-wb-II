'use client';
import Card from "@/components/card";
import AtlServico from "@/components/Forms/AtlServico";
import CadServico from "@/components/Forms/CadServico";
import ExcServico from "@/components/Forms/ExcServico";
import TableServico from "@/components/Table/TableServico";
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
      case "servico":
        return <CadServico />;
      case "atualiza":
        return <AtlServico />;
      case "excluir":
        return <ExcServico />;
      case "listar-servicos":
        return <TableServico />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-blue-600 text-4xl font-bold mb-4">Serviços</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-6 p-8">
          <Card
            titulo="Cadastrar Serviço"
            descricao="Formulário para cadastro de serviço"
            onClick={() => this.selecionarCard("servico")}
          />
          <Card
            titulo="Atualizar Serviço"
            descricao="Formulário para atualizar dados do serviço"
            onClick={() => this.selecionarCard("atualiza")}
          />
          <Card
            titulo="Excluir Serviço"
            descricao="Formulário para excluir serviço"
            onClick={() => this.selecionarCard("excluir")}
          />
          <Card
            titulo="Listar todos os Serviços"
            descricao="Veja a lista de todos os serviços"
            onClick={() => this.selecionarCard("listar-servicos")}
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
