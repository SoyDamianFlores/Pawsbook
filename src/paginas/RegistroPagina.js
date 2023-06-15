import React from "react";

export default class RegistroPagina extends React.Component {

  constructor(props){
    super(props);

    this.state ={
        nombre: '',
        descripcion: '',
        intereses: '',
    }

    this.submitted = this.submitted.bind(this);
    this.changed = this.changed.bind(this);
  }

  
  submitted(event) {
    alert("Se ha registrado exitosamente \n¡Bienvenido a Pawsbook" + " " + this.state.nombre + "!");
    event.preventDefault();
  }

  changed(event){
    this.setState({
        nombre: event.target.value
    })
  }

  render() {
    return (
        <>
            <div className="mt-5 pb-5">
            <h2> Registrate </h2>
            
            <form onSubmit={this.submitted}>
                <div className="justify-content-center">
                    <div className="col-6 justify-content-center">
                        <div className="form-group my-2">
                            <label>Nombre:</label>
                            <input type="text" className="form-control" placeholder="Nombre de perfil" onChange={this.changed} />
                        </div>
                    </div>
                    <div className="col-6 justify-content-center">
                        <div className="form-group my-2">
                            <label>Correo:</label>
                            <input type="email" class="form-control" placeholder="correo@gmail.com" />
                        </div>
                    </div>
                    <div className="col-6 justify-content-center">
                        <div className="form-group my-2">
                            <label>Descripcion:</label>
                            <textarea className="form-control" placeholder="Sobre ti"></textarea>
                        </div>
                    </div>
                    <div className="col-6 justify-content-center">
                        <div className="form-group my-2">
                            <label>Intereses:</label>
                            <textarea className="form-control" placeholder="Pareja / Amigos / Apareamiento, Viajar/  Etc"></textarea>
                        </div>
                    </div>
                    <div className="col-6 justify-content-center">
                        <div className="form-group my-2">
                            <label> Foto de Perfil: </label>
                            <input type="file"/> <p className="reco"><span>(</span>Recomendacion: Foto de Cuerpo Completo<span>)</span></p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mt-2">Registrar</button>
                </div>
                
            </form>
            </div>
            </>
    );
  }
}