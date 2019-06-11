import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from '../store';
import { Provider } from 'react-redux';

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
