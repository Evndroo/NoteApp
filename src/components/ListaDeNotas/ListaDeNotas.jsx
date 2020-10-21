import React, { Component } from "react";
import CardNota from "../CardNota/";
import "./estilo.css"

class ListaDeNotas extends Component {

    constructor(){
        super();
        this.state={
            notas:[]
        };
        this.newNoteBind = this._novasNotas.bind(this)
    }

    

    componentDidMount(){
        this.props.notas.inscrever(this.newNoteBind);
    }

    componentWillUnmount(){
        this.props.notas.desinscrever(this.newNoteBind);
    }

    _novasNotas(notas){
        this.setState({...this.state, notas})
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota deletarNota={()=>{this.props.deletarNota(index)}}  nota={nota}/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListaDeNotas