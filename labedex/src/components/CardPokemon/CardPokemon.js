import { CardsPokemon } from "./styled";
import React from "react";
import axios from "axios";
import { useState } from "react";
import PokeImagem from "./PokeImagem";

function CardPokemon(props) {
  return (
    <CardsPokemon>
      <PokeImagem name={props.pokename} />
      <h2>{props.pokename}</h2>
      <div>
        <button>Adicionar</button>
        <button onClick={props.onclickDetails}>Detalhes</button>
      </div>
    </CardsPokemon>
  );
}

export default CardPokemon;
