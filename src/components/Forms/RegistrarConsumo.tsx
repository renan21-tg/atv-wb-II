import React from "react";

class RegistrarConsumo extends React.Component {
    render() {
        const produtos = [
            {nome: "Shampoo", preco: 20, id: 1},
            {nome: "Condicionador", preco: 25, id: 2},
            {nome: "Escova", preco: 15, id: 3},
            {nome: "Tinta", preco: 40, id: 4}
        ];

        const servicos = [
            {nome: "Corte M", preco: 40, id: 1},
            {nome: "Corte F", preco: 60, id: 2},
            {nome: "Barba", preco: 30, id: 3},
            {nome: "Pitura", preco: 80, id: 4}
        ];

        return (
            <div>
                <div className="flex justify-center">
                    <h1 className="text-blue-600 text-3xl font-bold mb-4">Registrar Consumo</h1>
                </div>
                <form className="flex flex-col gap-4">
                    <input
                    type="text"
                    placeholder="CPF do Cliente"
                    className="border p-2 rounded text-black placeholder:text-gray-500"
                    />

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Produtos</h2>
                        {produtos.map(produto => (
                            <div key={produto.id} className="flex items-center justify-between mb-2">
                                <span className="text-black">{produto.nome}</span>
                                <input
                                    type="number"
                                    placeholder="Qtd"
                                    min="0"
                                    className="border p-1 rounded text-black placeholder:text-gray-500 w-20"
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Serviços</h2>
                        {servicos.map(servico => (
                            <div key={servico.id} className="flex items-center justify-between mb-2">
                                <span className="text-black">{servico.nome}</span>
                                <input
                                    type="number"
                                    placeholder="Qtd"
                                    min="0"
                                    className="border p-1 rounded text-black placeholder:text-gray-500 w-20"
                                />
                            </div>
                        ))}
                    </div>

                    <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                        Registrar
                    </button>
                </form>
            </div>
        );
    }
}

export default RegistrarConsumo;