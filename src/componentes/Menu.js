import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="row row bg-light fixed-top px-4 py-0">
        <div className="col-12 d-flex align-items-center ml-3 px-4">
          <h1 className="paws"> Pawsbook </h1>
          <div className="px-5">
            <Link to="/" className="mx-4"> Inicio </Link>
            <Link to="/perfiles" className="mx-4"> Perfiles </Link>
            <Link to="/novedades" className="mx-4"> Novedades </Link>
            <Link to="/contacto" className="mx-4"> Contacto </Link>
            <Link to="/registro" className="mx-4"> Registrate </Link>
          </div>
        </div>
      </div>
    );
  }
}
