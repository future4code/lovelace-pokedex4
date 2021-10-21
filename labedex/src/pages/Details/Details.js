import Header from "../../components/Header/Header.js";
import NaveBar from "../../components/NavBar/NaveBar.js";
import ScreenDetails from "../../components/Screen/ScreenDetails.js";
import Loading from "../../components/Loading.js";
import { useHistory, useParams } from "react-router-dom";
import { goBack } from "../../routes/Coordinator.js";

function Details() {
  const history = useHistory();
  const { name } = useParams();

  return (
    <div>
      <Header title="Quem é esse Pokemon?" />
      <NaveBar
        button1="Voltar"
        onclick1={() => goBack(history)}
        showButton={true}
        namePokemon={name}
      />
      {name ? <ScreenDetails /> : <Loading />}
    </div>
  );
}

export default Details;
