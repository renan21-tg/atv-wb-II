'use client'; // <- Adicione esta linha no topo do seu arquivo

import Sidebar from "@/components/sidebar";
import { Component } from "react";

class Page extends Component{
  render() {
    return (
      <div>
        <Sidebar />
      </div>
    );
  }
}

export default Page;