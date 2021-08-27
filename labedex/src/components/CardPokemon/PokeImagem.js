import axios from "axios";
import { useEffect, useState } from "react";
import { GET_POKEMON_BY_NAME } from "../../constants/urls";


const PokeImagem = (props) => {
    const [pokeImg, setPokeImg] = useState([]);

    const pegaPoke = () => {
        axios
            .get(GET_POKEMON_BY_NAME(props.name))
            .then((resp) => {
                setPokeImg(resp.data.sprites.front_default);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    useEffect(() => {
        pegaPoke();
        // eslint-disable-next-line
    }, [props.name]);


    return <img src={pokeImg} alt={'imagem pokemon'}/>;
};

export default PokeImagem;