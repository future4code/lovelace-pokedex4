import axios from "axios";
import { useEffect, useState } from "react";

const PokeImagem = (props) => {
    const [pokeImg, setPokeImg] = useState([]);

    const pegaPoke = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then((resp) => {
                setPokeImg(resp.data.sprites.front_default);
                console.log(pokeImg);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    useEffect(() => {
        pegaPoke();
    }, []);

    return <img src = { pokeImg }
    />;
};

export default PokeImagem;