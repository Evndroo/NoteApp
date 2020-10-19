import React, { Component } from "react"
import "./estilo.css"

class FormularioCadastro extends Component {
    
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = ""
    }
    
    _handleTitleChange(event){
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleTextChange(event){
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();

        this.props.createNote(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._handleSubmit.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Título" 
                    className="form-cadastro_input"
                    onChange={this._handleTitleChange.bind(this)}
                />
                <textarea 
                    rows={15}
                    className="form-cadastro_input" 
                    placeholder="Escreva sua nota..."
                    onChange={this._handleTextChange.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;