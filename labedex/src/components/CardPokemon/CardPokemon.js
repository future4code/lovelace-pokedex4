import { CardsPokemon } from "./styled";
import React from "react";

function CardPokemon() {
  return (
    <CardsPokemon>
      <img src="https://picsum.photos/250/200" />
      <h2>Pokename</h2>
      <div>
        <button>Adicionar</button>
        <button>Detalhes</button>
      </div>
    </CardsPokemon>
  );
}

export default CardPokemon;
