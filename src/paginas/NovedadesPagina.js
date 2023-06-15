import React, { useState, useEffect } from 'react';
import '../componentes/Mascotas.css';
import Perros from '../Apis/Perros';

function App() {
  const [perro, setPerro] = useState('');
  const [razas, setRazas] = useState([]);

  useEffect(() => {
    fetchRazas();
  }, []);

  const fetchRazas = () => {
    fetch('https://api.thedogapi.com/v1/breeds?&page=0')
      .then(response => response.json())
      .then(data => {
        setRazas(data.map(raza => raza.name));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    setPerro(document.getElementById('search').value);
  };

  return (
    <div className="App mt-5">
      <h1>PERROS</h1>
      <input type="text" list="razas" id="search" />
      <datalist id="razas">
        {razas.map(raza => (
          <option value={raza} key={raza} />
        ))}
      </datalist>
      <input type="button" value="Buscar" onClick={handleSearch} />
      <Perros perro={perro} />
    </div>
  );
}

export default App;
