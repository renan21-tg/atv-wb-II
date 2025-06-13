import { Component } from "react";

class MenorQuantidade extends Component {
  render() {
    const clientes = [
      { nome: "Lucas Torres", quantidade: 1 },
      { nome: "Mariana Dias", quantidade: 2 },
      { nome: "Renato Souza", quantidade: 3 },
      { nome: "Sofia Castro", quantidade: 4 },
      { nome: "Tiago Gomes", quantidade: 5 },
      { nome: "Camila Martins", quantidade: 6 },
      { nome: "Bruno Almeida", quantidade: 7 },
      { nome: "Helena Barbosa", quantidade: 8 },
      { nome: "André Fernandes", quantidade: 9 },
      { nome: "Patrícia Silva", quantidade: 10 },
    ];

    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-blue-600 text-3xl font-bold mb-4">Menores Consumidores (Quantidade)</h1>
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

export default MenorQuantidade;