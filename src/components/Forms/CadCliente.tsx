import React from "react";

class CadCliente extends React.Component {
  render() {
    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-blue-600 text-3xl font-bold mb-4">Cliente</h1>
            </div>
            <form className="flex flex-col gap-4">
                <input
                type="text"
                placeholder="Nome"
                className="border p-2 rounded text-black placeholder:text-gray-500"
                />
                <input
                type="text"
                placeholder="Nome Social"
                className="border p-2 rounded text-black placeholder:text-gray-500"
                />
                <input
                type="text"
                placeholder="Telefone"
                className="border p-2 rounded text-black placeholder:text-gray-500"
                />
                <input
                type="text"
                placeholder="CPF"
                className="border p-2 rounded text-black placeholder:text-gray-500"
                />
                <input
                type="date"
                className="border p-2 rounded text-black placeholder:text-gray-500"
                />
                <div className="flex gap-6 items-center">
                <label className="flex items-center gap-2 text-black">
                    <input type="radio" name="genero" value="masculino" className="accent-blue-600" />
                    Masculino
                </label>
                <label className="flex items-center gap-2 text-black">
                    <input type="radio" name="genero" value="feminino" className="accent-pink-500" />
                    Feminino
                </label>
                </div>
                
                <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Salvar
                </button>
            </form>
        </div>
    );
  }
}

export default CadCliente;