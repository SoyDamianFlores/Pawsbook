import logo from "./logo.svg";
import "./App.css";

import InicioPagina from "./paginas/InicioPagina";
import ContactoPagina from "./paginas/ContactoPagina";
import PerfilesPagina from "./paginas/PerfilesPaginas";
import NovedadesPagina from "./paginas/NovedadesPagina";
import RegistroPagina from "./paginas/RegistroPagina";

import {Routes, Route, BrowserRouter as Router} from "react-router-dom"

import Menu from "./componentes/Menu";

import { Form } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Menu />
          <div className="container pt-5 mt-5">
            
            
              <Routes>
                <Route path="/" element={<InicioPagina />} />
                <Route path="/contacto" element={<ContactoPagina />} />
                <Route path="/perfiles" element={<PerfilesPagina />} />
                <Route path="/novedades" element={<NovedadesPagina />} />
                <Route path="/registro" element={<RegistroPagina />} />
              </Routes>
          </div>
        </Router>
      </>
  );
}

export default App;
