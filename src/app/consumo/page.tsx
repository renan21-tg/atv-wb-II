'use client';
import Card from "@/components/card";
import RegistrarConsumo from "@/components/Forms/RegistrarConsumo";
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
        case "registrar":
            return <RegistrarConsumo />;
        default:
            return null;
        }
    };

    render() {
        return (
        <div>
            <div className="flex justify-center">
            <h1 className="text-blue-600 text-4xl font-bold mb-4">Consumo</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-6 p-8">
            <Card
                titulo="Registrar Consumo"
                descricao="Registre o consumo de produtos e serviços por cliente"
                onClick={() => this.selecionarCard("registrar")}
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