import React, { Component } from 'react';  
import "./style.css"

class CategoryFilter extends Component {

    _handleFilterChange(event){
        this.props.atualizarFiltro(event.target.value);
    }

    render() { 
        return ( 
            <div className="category-filter">
                <label className="category-filter-label" htmlFor="categories">Filtrar notas:</label>
                <select 
                    className="form-cadastro_input" 
                    name="categories" 
                    id="categories"
                    onChange={this._handleFilterChange.bind(this)}
                >
                    <option defaultChecked={true} value="">Não filtrar</option>
                    <option value="Sem categoria">Notas sem categoria</option>
                    {
                        this.props.categorias.map((categoria, index) =>
                            <option key={index} value={categoria}>{categoria}</option>
                        )
                    }
                </select>
            </div>
        );
    }
}
 
export default CategoryFilter;