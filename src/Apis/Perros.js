import React from 'react';

export default class Perros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perros: [],
      imgURL: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.perro !== this.props.perro) {
      this.fetchData();
    }
  }

  fetchData() {
    const { perro } = this.props;

    if (perro) {
      fetch('https://api.thedogapi.com/v1/breeds?page=0')
        .then(response => response.json())
        .then(data => {
          const filteredPerros = data.filter(
            perroData => perroData.name.toLowerCase() === perro.toLowerCase()
          );

          if (filteredPerros.length > 0) {
            const { reference_image_id } = filteredPerros[0];
            this.setState({ perros: filteredPerros });
            this.fetchImageURL(reference_image_id);
          } else {
            this.setState({ perros: [], imgURL: '' });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.setState({ perros: [], imgURL: '' });
    }
  }

  fetchImageURL(referenceImageId) {
    fetch(`https://api.thedogapi.com/v1/images/${referenceImageId}`)
      .then(response => response.json())
      .then(data => {
        const { url } = data;
        this.setState({ imgURL: url });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { perros, imgURL } = this.state;

    return (
      <div>
        {perros.length > 0 ? (
          <div>
            <h2>Información del perro:</h2>
            <p>Raza: {perros[0].name}</p>
            <p>ID: {perros[0].id}</p>
            <p>Propósito: {perros[0].bred_for}</p>
            <p>Grupo de raza: {perros[0].breed_group}</p>
            <p>Vida aprox: {perros[0].life_span}</p>
            <p>Temperamento: {perros[0].temperament}</p>
            {imgURL && <img src={imgURL} alt="Imagen del perro" className='fotope'/>}
          </div>
        ) : (
          <p>No se encontró un perro con esa característica.</p>
        )}
      </div>
    );
  }
}