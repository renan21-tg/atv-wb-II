'use client'
import { Component,  } from "react";

class Sidebar extends Component {
    render() {
        return (
            <aside className="w-62 min-h-screen bg-gray-900 text-white p-6">
            <div className="mb-10">
              <a href="/" className="text-2xl font-bold">Grupo WB</a>
            </div>
            <nav>
              <ul className="space-y-6">
                <li className="text-gray-300 hover:text-white transition cursor-pointer">
                  <a href="/clientes">Clientes</a>
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