import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from '../store';
import { Provider } from 'react-redux';

import Libros from './libros/Libros';
import MostrarLibro from './libros/MostrarLibro';
import NuevoLibro from './libros/NuevoLibro';
import EditarLibro from './libros/EditarLibro';
import PrestamoLibro from './libros/PrestamoLibro';



import Suscriptores from "./suscriptores/Suscriptores";
import MostrarSuscriptor from "./suscriptores/MostrarSuscriptor";
import NuevoSuscriptor from "./suscriptores/NuevoSuscriptor";
import EditarSuscriptor from "./suscriptores/EditarSuscriptor";
import Navbar from "../components/layout/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Libros} />
            <Route exact path="/libros/mostrar/:id" component={MostrarLibro} />
            <Route exact path="/libros/nuevo" component={NuevoLibro} />
            <Route exact path="/libros/editar/:id" component={EditarLibro} />
            <Route exact path="/libros/prestamo/:id" component={PrestamoLibro} />



            <Route exact path="/suscriptores" component={Suscriptores} />
            <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptor} />
            <Route exact path="/suscriptores/mostrar/:id" component={MostrarSuscriptor} />
            <Route exact path="/suscriptores/editar/:id" component={EditarSuscriptor} />
          </Switch>
        </div>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
