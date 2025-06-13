import { Component } from "react";

class Geral extends Component {
  render() {
    const dados = [
      { nome: "Corte Masculino", tipo: "Serviço", total: 40 },
      { nome: "Corte Feminino", tipo: "Serviço", total: 35 },
      { nome: "Shampoo", tipo: "Produto", total: 60 },
      { nome: "Condicionador", tipo: "Produto", total: 45 },
    ];

    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-blue-600 text-3xl font-bold mb-4">Mais Consumidos (Geral)</h1>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border text-center text-black bg-white rounded shadow">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Tipo</th>
                <th className="border px-4 py-2">Total Consumido</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="border px-4 py-2">{item.nome}</td>
                  <td className="border px-4 py-2">{item.tipo}</td>
                  <td className="border px-4 py-2">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Geral;