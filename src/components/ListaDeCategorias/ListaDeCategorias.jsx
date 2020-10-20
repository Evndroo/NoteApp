import React, { Component } from 'react';
import "./styles.css"

class ListaDeCategorias extends Component {

    _handleNewCategoryKeyUp(event){
        //Se foi apertada a tecla enter
        if(event.keyCode === 13){
            if(event.target.value){
                this.props.adicionarCategoria(event.target.value)
            }else{
                //alertar erro de texto vazio
            }
        }
    }

    render() { 
        return ( 
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {
                        this.props.categorias.map((categoria, index) =>
                            <li key={index} className="lista-categorias_item">{categoria}</li>
                        )
                    }
                </ul>
                <input  
                    className="lista-categorias_input" 
                    type="text" 
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleNewCategoryKeyUp.bind(this)}
                />
            </section>
        );
    }
}
 
export default ListaDeCategorias;