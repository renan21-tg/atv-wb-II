'use-client'

import { Component, ReactNode } from "react";

class Sidebar extends Component {
    render() {
        return (
            <aside className="w-56 min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-2xl font-bold mb-10">Grupo WB</h1>
            <nav>
              <ul className="space-y-6">
                <li className="text-gray-300 hover:text-white transition cursor-pointer">
                  Clientes
                </li>
                <li className="text-gray-300 hover:text-white transition cursor-pointer">
                  Produtos/Serviços
                </li>
                <li className="text-gray-300 hover:text-white transition cursor-pointer">
                  Consumo
                </li>
                <li className="text-gray-300 hover:text-white transition cursor-pointer">
                  Relatórios
                </li>
              </ul>
            </nav>
          </aside>
        )
    }
}

export default Sidebar