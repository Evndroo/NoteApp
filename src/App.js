import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import ListaDeCategorias from "./components/ListaDeCategorias/index";
import Categorias from "./data/Categorias"
import Notas from "./data/Notas"
import "./assets/App.css"

class App extends Component {
  
  constructor(){
    super();
    this.notas = new Notas();
    this.categorias = new Categorias();
  }

  render() { 
    return ( 
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} createNote={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} categorias={this.categorias}/>
          <ListaDeNotas deletarNota={this.notas.deletarNota.bind(this.notas)} notas={this.notas}/>
        </main>
      </section>
    );
  }
}
 
export default App;