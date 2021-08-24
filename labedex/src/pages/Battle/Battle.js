import { useHistory, useParams } from 'react-router-dom'

function Battle() {
  const {idPokemon1, idPokemon2} = useParams()


  return (
    <div className="App">
      <p> Battle</p>
    </div>
  );
  }
  
  export default Battle;
  