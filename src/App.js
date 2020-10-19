import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import "./assets/App.css"

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    }
  }

  createNote(titulo, texto){
    const novaNota = {
      titulo,
      texto      
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

  render() { 
    return ( 
      <section className="conteudo">
        <FormularioCadastro createNote={this.createNote.bind(this)} />
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}
 
export default App;