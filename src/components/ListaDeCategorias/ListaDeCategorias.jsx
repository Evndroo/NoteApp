import React, { Component } from 'react';
import "./styles.css"

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = {
            categoria: "",
            categorias:[]
        }
        this.newCategoryBind = this._novasCategorias.bind(this);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handleNewCategoryKeyUp(event) {
        event.stopPropagation()
        //Se foi apertada a tecla enter
        if (event.keyCode === 13) {
            if (event.target.value) {
                this.props.adicionarCategoria(event.target.value)
                this.setState({ ...this.state, categoria: ""})
            } else {
                //alertar erro de texto vazio
            }
        }
    }

    _handleChangeCategory(event){
        event.stopPropagation();
        this.setState({ ...this.state, categoria: event.target.value });
    }

    componentDidMount(){
        this.setState({...this.state, categorias: this.props.categorias.categorias})
        this.props.categorias.inscrever(this.newCategoryBind)
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this.newCategoryBind);
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {
                        this.state.categorias.map((categoria, index) =>
                            <li 
                                key={index} 
                                className="lista-categorias_item"
                                onClick={()=>{this.props.deleteCategory(categoria)}}
                            >
                                {categoria}
                            </li>
                        )
                    }
                </ul>
                <input
                    className="lista-categorias_input"
                    type="text"
                    placeholder="Adicionar Categoria"
                    value={this.state.categoria}
                    onChange={this._handleChangeCategory.bind(this)}
                    onKeyUp={this._handleNewCategoryKeyUp.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;