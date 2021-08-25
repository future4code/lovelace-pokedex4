import Header from "../../components/Header/Header.js";
import NaveBar from "../../components/NavBar/NaveBar.js";
import ScreenDetails from "../../components/Screen/ScreenDetails.js";

import { useHistory } from "react-router-dom";
import { goBack } from "../../routes/Coordinator.js";

function Details() {
  const history = useHistory();

  return (
    <div>
      <Header title="Quem é esse Pokemon?" />
      <NaveBar
        button1="Voltar"
        onclick1={() => goBack(history)}
        showButton={true}
      />
      <ScreenDetails />
    </div>
  );
}

export default Details;
