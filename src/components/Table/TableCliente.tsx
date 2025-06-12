import { Component } from "react";

class TableCliente extends Component {
  render() {
    const clientes = [
        { nome: "João Silva", nomeSocial: "João", cpf: "123.456.789-00", genero: "Masculino" },
        { nome: "Maria Oliveira", nomeSocial: "Maria", cpf: "987.654.321-00", genero: "Feminino" },
        { nome: "Carlos Pereira", nomeSocial: "Carlos", cpf: "321.654.987-11", genero: "Masculino" },
        { nome: "Ana Souza", nomeSocial: "Ana", cpf: "456.789.123-22", genero: "Feminino" },
        { nome: "Pedro Lima", nomeSocial: "Pedro", cpf: "654.321.987-33", genero: "Masculino" },
        { nome: "Juliana Costa", nomeSocial: "Jú", cpf: "789.123.456-44", genero: "Feminino" },
        { nome: "Lucas Rocha", nomeSocial: "Luk", cpf: "147.258.369-55", genero: "Masculino" },
        { nome: "Fernanda Ramos", nomeSocial: "Fer", cpf: "963.852.741-66", genero: "Feminino" },
        { nome: "Rafael Almeida", nomeSocial: "Rafa", cpf: "852.741.963-77", genero: "Masculino" },
        { nome: "Beatriz Martins", nomeSocial: "Bia", cpf: "741.963.852-88", genero: "Feminino" }
    ];

    return (
      <div>
        <div className="flex justify-center">
            <h1 className="text-blue-600 text-3xl font-bold mb-4">Lista Clientes</h1>
        </div>
        <div className="overflow-x-auto w-full">
            <table className="min-w-full border text-center text-black bg-white rounded shadow">
            <thead className="bg-blue-100 text-blue-900">
                <tr>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Nome Social</th>
                <th className="border px-4 py-2">CPF</th>
                <th className="border px-4 py-2">Gênero</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente, index) => (
                <tr key={index} className="hover:bg-blue-50">
                    <td className="border px-4 py-2">{cliente.nome}</td>
                    <td className="border px-4 py-2">{cliente.nomeSocial}</td>
                    <td className="border px-4 py-2">{cliente.cpf}</td>
                    <td className="border px-4 py-2">{cliente.genero}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default TableCliente;