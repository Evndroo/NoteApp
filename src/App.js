import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import ListaDeCategorias from "./components/ListaDeCategorias/index";
import "./assets/App.css"

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[],
      categorias:[]
    }
  }

  adicionarCategoria(categoria){
    //adiciona categoria ao array de categorias do state.
    this.setState({...this.state, categorias:[...this.state.categorias, categoria]});
  }

  createNote(titulo, texto, categoria){
    const novaNota = {
      titulo,
      texto, 
      categoria
    };
    
    // atribui ao estado, todo o estado antigo e reatribui no atributo notas o que ele já possuia e adiciona a nova nota
    this.setState({
      ...this.state,
      notas:[
        ...this.state.notas,
        novaNota
      ]
    })
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas: arrayNotas});
  }

  render() { 
    return ( 
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias} createNote={this.createNote.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.adicionarCategoria.bind(this)} categorias={this.state.categorias}/>
          <ListaDeNotas deletarNota={this.deletarNota.bind(this)} notas={this.state.notas}/>
        </main>
      </section>
    );
  }
}
 
export default App;