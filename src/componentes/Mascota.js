import React from "react";
import "./Mascotas.css";

export default class Mascota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      escondido: true,
      buttonText: "Ver Perfil",
    };

    this.toggleEsconder = this.toggleEsconder.bind(this);
  }

  toggleEsconder() {
    this.setState((prevState) => ({
      escondido: !prevState.escondido,
      buttonText: prevState.escondido ? "Ocultar Perfil" : "Ver Perfil",
    }));
  }

  render() {
    return (
      <div className="row my-4">
        <div className="col-12 d-flex align-items-center">
          <img
            src={this.props.img}
            alt={this.props.nombre}
            className="fotoperfil"
          />
          <div className="px-3">
            <h2> {this.props.nombre} </h2>
            <button className="btn btn-success" onClick={this.toggleEsconder}>
              {this.state.buttonText}
            </button>
            <div className={"my-2 " + (this.state.escondido ? "d-none" : "")}>
              <h6>Sobre mi:</h6>
              <p> {this.props.descripcion} </p>
              <h6>Intereses:</h6>
              <p> {this.props.intereses} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
