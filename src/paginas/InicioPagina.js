import React from "react";
import Mascota from '../componentes/Mascota';

export default class InicioPagina extends React.Component {
  render() {
    return (
        <>
         
         <div className="d-flex py-0 mt-5">
         <p className="textoinicio">
         Bienvenido a Pawbook la Red Social de las Mascotas en Montevideo, acá podras encontrar compañeros, parejas, eventos e información de interes para tu mascota :D
         </p>
         </div>
         <div className="d-flex align-item-center justify-content-center">
            <img src="/img/Pawsbookportada.png" alt="Logo Oficial" className="logored" />
         </div>
        </>
    );
  }
}

/*<Mascota
nombre="Orion"
img="/img/orion-labrador.jpg"
descripcion="Hola me llamo Orion, soy un Labrador Chocolate de 6 meses y busco amigos de la misma edad para salir a pasear en las tardes en la zona de Parque Rodó."
intereses="Conocer otros perros"
/>*/