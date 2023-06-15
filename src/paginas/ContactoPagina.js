import React from "react";

export default class ContactoPagina extends React.Component {
  render() {
    return (
        <>
          <div className="mt-5">
                <h4>Contacto</h4>
                <h5>Desarrollandose por Damian Flores</h5>
                <h6>yoman.damian@gmail.com </h6>
                <a href="https://wa.link/ei9frj" target="_blank"> +598 95.677.460 </a>
          </div>
          <div>
            <h3>Seguimos Codeando....</h3>
          <img src="/img/working.png" alt="Working" className="working" />
          </div>
        </>
    );
  }
}