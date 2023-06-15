import React from "react";
import Mascota from "./Mascota";



export default class ListaPerfiles extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                {this.props.mascotas.map((mascota) => (
                    <Mascota nombre={mascota.nombre} img={mascota.img} descripcion={mascota.descripcion} intereses={mascota.intereses} />
                ))}
            </>
        );
    }

}