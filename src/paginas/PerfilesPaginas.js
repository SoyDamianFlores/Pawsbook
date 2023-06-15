import React from "react";
import ListaPerfiles from "../componentes/ListaPerfiles";

export default class PerfilesPagina extends React.Component {

  mascotas = [
     {
        nombre: 'Orion',
        img:'/img/orion-labrador.jpg',
        descripcion: 'Hola me llamo Orion, soy un Labrador Chocolate de 6 meses y busco amigos de la misma edad para salir a pasear en las tardes en la zona de Parque Rodó.',
        intereses: 'Conocer otros perros.'
     },
     {
        nombre: 'Slash',
        img:'/img/slash2.jpg',
        descripcion: 'Hola mi nombre es Slash, tengo 2 años y busco pareja semejante, soy de la zona de Punta Carreta.',
        intereses: 'Buscar Pareja.'
     },
     {
        nombre: 'Ozz',
        img:'/img/ozz.jpg',
        descripcion: 'Soy Ozz y soy un Carpincho domesticado que busca compañeros semejantes pero silvestres para disfrutar en mi chacra.',
        intereses: 'Busca Carpinchos Silvestres.'
     }

  ]  
  render() {
    return (
        <>
            <div className="mt-5">
            <h3> Pati-Perfiles </h3>
            <ListaPerfiles mascotas={this.mascotas} />
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
/>
<Mascota
nombre="Slash"
img="/img/slash2.jpg"
descripcion="Hola mi nombre es Slash, tengo 2 años y busco pareja semejante, soy de la zona de Punta Carreta."
intereses="Buscar Pareja"
/>*/