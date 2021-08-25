import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokemon/Pokedex";
import Battle from "../pages/Battle/Battle";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route exact path="/details/:name" component={Details} />
        <Route
          exact
          path="/battle/:idPokemon1/:idPokemon2"
          component={Battle}
        />
        <Route>
          <div>Erro 404 - Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
