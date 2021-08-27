import { useEffect, useState } from "react";
import axios from "axios";
import { GET_POKEMON_BY_NAME } from "../constants/urls";

export function useCreatePokemon(namePokemon) {
  const [stat, setStat] = useState({});
  const [pokemonImages, setPokemonImages] = useState({});
  const [moves, setMoves] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const getDatas = async () => {
      try {
        const resPokemon = await axios.get( GET_POKEMON_BY_NAME(namePokemon) );
        const allStatus = resPokemon.data.stats;
        const novoStatus = {};

        allStatus.forEach((eachStatus) => {
          const statusName = eachStatus.stat.name;
          const statusValue = eachStatus.base_stat;
          novoStatus[statusName] = statusValue;
        });

        let pokemonName = resPokemon.data.name;
        pokemonName =
          pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

        setStat(novoStatus);
        setName(pokemonName);
        setPokemonImages({
          imgBack: resPokemon.data.sprites.back_default,
          imgFront: resPokemon.data.sprites.front_default
        });

        const newMoves = [];

        const maxLength = resPokemon.data.moves.length;
        const randIndexMove = Math.floor((maxLength - 4) * Math.random());

        for (let i = randIndexMove; i < randIndexMove + 4; i++) {
          try {
            const urlMove = resPokemon.data.moves[i].move.url;
            const resMoves = await axios.get(urlMove);

            const newMove = {
              power: resMoves.data.power,
              effect: resMoves.data.effect_entries[0].short_effect,
              type: resMoves.data.type.name,
              name: resMoves.data.name
            };
            newMoves.push(newMove);
          } catch (error) {
            alert("Erro ao buscar move:", i);
          }
        }

        setMoves(newMoves);
      } catch (err) {
        alert('Erro ao procurar pokemon.')
      }
    };

    getDatas();
    // eslint-disable-next-line
  }, []);

  return { ...stat, ...pokemonImages, name, moves };
}
