import { Component } from "react";

class ListarTodos extends Component {
  render() {
    const clientes = [
      { nome: "João Silva", nomeSocial: "João", cpf: "123.456.789-00", genero: "Masculino" },
      { nome: "Maria Oliveira", nomeSocial: "Maria", cpf: "987.654.321-00", genero: "Feminino" },
      { nome: "Carlos Souza", nomeSocial: "Carl", cpf: "321.654.987-00", genero: "Masculino" },
      { nome: "Ana Costa", nomeSocial: "Aninha", cpf: "111.222.333-44", genero: "Feminino" },
      { nome: "Pedro Martins", nomeSocial: "Pedrinho", cpf: "555.666.777-88", genero: "Masculino" },
      { nome: "Luciana Lima", nomeSocial: "Luh", cpf: "444.333.222-11", genero: "Feminino" },
      { nome: "Felipe Rocha", nomeSocial: "Feh", cpf: "999.888.777-66", genero: "Masculino" },
      { nome: "Aline Cardoso", nomeSocial: "Ali", cpf: "123.123.123-12", genero: "Feminino" },
      { nome: "Gabriel Mendes", nomeSocial: "Biel", cpf: "456.456.456-45", genero: "Masculino" },
      { nome: "Juliana Pires", nomeSocial: "Ju", cpf: "789.789.789-78", genero: "Feminino" },
    ];

    const clientesOrdenados = clientes.sort((a, b) => a.genero.localeCompare(b.genero));

    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-blue-600 text-3xl font-bold mb-4">Todos os Clientes</h1>
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
              {clientesOrdenados.map((cliente, index) => (
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

export default ListarTodos;