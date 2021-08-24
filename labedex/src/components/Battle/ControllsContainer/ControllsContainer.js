import Attack from "../Attack/Attack"
import { StyledControlls, StyledControllsInten } from './styled'

export default function ControllsContainer({ myPokemon, attack, message, setMessage, myTurn }) {
 
  return (
    <StyledControlls>
      <StyledControllsInten>
        <div>
          <p>{message}</p>
        </div>
        {myTurn &&
          <Attack
            myPokemon={myPokemon}
            attack={attack}
            setMessage={setMessage}
          />}
      </StyledControllsInten>
    </StyledControlls>
  );
}
