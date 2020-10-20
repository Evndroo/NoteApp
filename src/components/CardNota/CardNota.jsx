import React, { Component } from 'react';
import "./styles.css";
import {ReactComponent as DeleteSVG} from "../../assets/images/delete-24px.svg";

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h6 className="card-nota_titulo">{this.props.nota.titulo}</h6>
                    <DeleteSVG className="card-nota_delete" onClick={this.props.deletarNota} />
                </header>
                <p className="card-nota_texto">{this.props.nota.texto}</p>
            </section>
        );
    }
}

export default CardNota;