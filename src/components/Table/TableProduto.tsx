import { Component } from "react";

class TableProduto extends Component {
  render() {
    const produtos = [
        {nome: "Shampoo", preco: 20, id: 1},
        {nome: "Condicionador", preco: 25, id: 2},
        {nome: "Escova", preco: 15, id: 3},
        {nome: "Tinta", preco: 40, id: 4}
    ];

    return (
      <div>
        <div className="flex justify-center">
            <h1 className="text-blue-600 text-3xl font-bold mb-4">Lista Produtos</h1>
        </div>
        <div className="overflow-x-auto w-full">
            <table className="min-w-full border text-center text-black bg-white rounded shadow">
            <thead className="bg-blue-100 text-blue-900">
                <tr>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Preco</th>
                <th className="border px-4 py-2">ID</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((produto, index) => (
                <tr key={index} className="hover:bg-blue-50">
                    <td className="border px-4 py-2">{produto.nome}</td>
                    <td className="border px-4 py-2">{produto.preco}</td>
                    <td className="border px-4 py-2">{produto.id}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default TableProduto;