import React, { Component } from "react"
import "./estilo.css"

class FormularioCadastro extends Component {

    
    constructor(props){
        super(props);
        this.defaultCategoryText = "Sem categoria";
        this.state = {
            titulo:"",
            texto:"",
            categoria:this.defaultCategoryText,
            categorias:[]
        }

        this.newCategoryBind = this._novasCategorias.bind(this);
    }
    
    _handleCategoryChange(event){
        event.stopPropagation();
        this.setState({...this.state, categoria:event.target.value})
    }

    _handleTitleChange(event){
        event.stopPropagation();
        this.setState({...this.state, titulo:event.target.value})
    }

    _handleTextChange(event){
        event.stopPropagation();
        this.setState({...this.state, texto:event.target.value})
    }

    _handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();

        this.props.createNote(this.state.titulo, this.state.texto, this.state.categoria);
        this.setState({titulo:"", texto:"", categoria:this.defaultCategoryText})
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    componentDidMount(){
        this.props.categorias.inscrever(this.newCategoryBind)
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this.newCategoryBind);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._handleSubmit.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Título" 
                    className="form-cadastro_input"
                    value={this.state.titulo}
                    onChange={this._handleTitleChange.bind(this)}
                />
                <select className="form-cadastro_input" value={this.state.categoria} onChange={this._handleCategoryChange.bind(this)}>
                    <option defaultChecked={true}>Sem categoria</option>
                    {
                        this.state.categorias.map((categoria,index)=>
                            <option key={index} value={categoria}>{categoria}</option>
                        )
                    }
                </select>
                <textarea 
                    rows={15}
                    className="form-cadastro_input" 
                    placeholder="Escreva sua nota..."
                    value={this.state.texto}
                    onChange={this._handleTextChange.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;