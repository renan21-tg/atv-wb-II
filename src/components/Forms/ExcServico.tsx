import React from "react";

class ExcServico extends React.Component {
  render() {
    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-blue-600 text-3xl font-bold mb-4">Excluir</h1>
            </div>
            <form className="flex flex-col gap-4">
                <input
                type="number"
                placeholder="ID do serviço"
                className="border p-2 rounded text-black placeholder:text-gray-500"
                />
                <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
                    Deletar
                </button>
            </form>
        </div>
    );
  }
}

export default ExcServico;