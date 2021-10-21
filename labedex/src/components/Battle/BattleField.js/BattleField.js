import { useEffect, useState } from "react";
import { damage } from "../../../tools/battle/damage";
import StatusCard from "../StatusCard/StatusCard";
import ControllsContainer from "../ControllsContainer/ControllsContainer";
import PokemonImage from "../PokemonImage/PokemonImage";

import { StyledBattleField, StyledImage, StyledImageCongratulations } from './styled'

export default function BattleField({ myPokemon, hisPokemon }) {

  const [winner, SetWinner] = useState('')
  const [myCurrentHp, setMyCurrentHp] = useState();
  const [hisCurrentHp, setHisCurrentHp] = useState();
  const [turn, setTurn] = useState({
    myTurn: true,
    message: "Escolha um ataque"
  });

  const setMessageToMe = (message) => {
    setTurn({ myTurn: false, message: message });
  };

  const setMessageToHim = (message) => {
    setTurn({ myTurn: true, message: message });
  };

  const myAttack = (damage) => {
    if (hisCurrentHp < damage) setHisCurrentHp(0);
    else setHisCurrentHp(Math.floor(hisCurrentHp - damage));
  };

  const hisAttack = (damage) => {
    if (myCurrentHp < damage) setMyCurrentHp(0);
    else setMyCurrentHp(Math.floor(myCurrentHp - damage));
  };

  useEffect(() => {
    setMyCurrentHp(myPokemon.hp * myPokemon.level);
    setHisCurrentHp(hisPokemon.hp * hisPokemon.level);
  }, [myPokemon, hisPokemon]);

  useEffect(() => {
    if (!turn.myTurn) {
      setTimeout(() => {
        const attack = hisPokemon.attack;
        const level = hisPokemon.level;

        const randIndex = Math.floor(Math.random() * 4);
        const { power, effect, name } = hisPokemon.moves[randIndex];

        hisAttack(damage(power, attack, level));
        setMessageToHim(`${hisPokemon.name} ${name}! ${effect}`);
      }, 2000);
    }
    // eslint-disable-next-line
  }, [turn]);

  useEffect(() => {
    if (myCurrentHp === 0) SetWinner(hisPokemon.name);
    else if (hisCurrentHp === 0) SetWinner(myPokemon.name);

    // eslint-disable-next-line 
  }, [myCurrentHp, hisCurrentHp]);


  if(winner){
    return (
      <StyledImageCongratulations>
        <p>Vitória do {winner}</p>
      </StyledImageCongratulations>
    )
  }


  return (
    <StyledBattleField>
      <StyledImage>
        <div style={{ display: "flex", justifyContent: 'space-around' }}>
          <StatusCard
            pokemon={hisPokemon}
            currentHp={hisCurrentHp}
          />
          <PokemonImage
            pokemon={hisPokemon}
          />
        </div>
        <div style={{ display: "flex", justifyContent: 'space-around' }}>
          <PokemonImage
            pokemon={myPokemon}
          />
          <StatusCard
            pokemon={myPokemon}
            currentHp={myCurrentHp}
          />
        </div>
      </StyledImage>
      <ControllsContainer
        myPokemon={myPokemon}
        attack={myAttack}
        message={turn.message}
        setMessage={setMessageToMe}
        myTurn={turn.myTurn}
      />
    </StyledBattleField>
  );
}
