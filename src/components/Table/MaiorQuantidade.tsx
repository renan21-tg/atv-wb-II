import React, { Component } from "react";

class MaiorQuantidade extends Component {
  render() {
    const clientes = [
      { nome: "João Silva", quantidade: 25 },
      { nome: "Maria Oliveira", quantidade: 22 },
      { nome: "Carlos Souza", quantidade: 20 },
      { nome: "Ana Costa", quantidade: 19 },
      { nome: "Pedro Martins", quantidade: 17 },
      { nome: "Luciana Lima", quantidade: 15 },
      { nome: "Felipe Rocha", quantidade: 13 },
      { nome: "Aline Cardoso", quantidade: 11 },
      { nome: "Gabriel Mendes", quantidade: 9 },
      { nome: "Juliana Pires", quantidade: 8 },
    ];

    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-blue-600 text-3xl font-bold mb-4">Maiores Consumidores (Quantidade)</h1>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border text-center text-black bg-white rounded shadow">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="border px-4 py-2">{cliente.nome}</td>
                  <td className="border px-4 py-2">{cliente.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MaiorQuantidade