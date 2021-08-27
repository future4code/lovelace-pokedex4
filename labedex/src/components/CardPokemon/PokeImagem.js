import axios from "axios";
import { useEffect, useState } from "react";

const PokeImagem = (props) => {
    const [pokeImg, setPokeImg] = useState([]);

    const pegaPoke = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
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
    }, []);

    return <img src = { pokeImg } alt={'imagem pokemon'}/>;
};

export default PokeImagem;