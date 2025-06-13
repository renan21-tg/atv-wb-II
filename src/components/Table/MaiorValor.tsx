import { Component } from "react";

class MaiorValor extends Component {
  render() {
    const clientes = [
      { nome: "João Silva", valor: 2000 },
      { nome: "Maria Oliveira", valor: 1850 },
      { nome: "Carlos Souza", valor: 1700 },
      { nome: "Ana Costa", valor: 1600 },
      { nome: "Pedro Martins", valor: 1500 },
    ];

    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-blue-600 text-3xl font-bold mb-4">Maiores Consumidores (Valor)</h1>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border text-center text-black bg-white rounded shadow">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Valor Gasto (R$)</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="border px-4 py-2">{cliente.nome}</td>
                  <td className="border px-4 py-2">{cliente.valor.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MaiorValor;