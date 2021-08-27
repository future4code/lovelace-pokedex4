import {
  ContainerGeral,
  ContainerDetails,
  ContainerImg,
  ContainerStats,
  BarraStats,
  ValorStat,
  ContainerTypes,
  ContainerMoves,
  ContainerSoloStat,
} from "./StyledDetails";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { GET_POKEMON_BY_NAME } from "../../constants/urls";
import { startWithUpperCase } from "../../tools/languages/startWithUpperCase";

function ScreenDetails(props) {
  const widthValue = 200;
  const { name } = useParams();
  const [data] = useRequestData({}, GET_POKEMON_BY_NAME(name));

  return (
    <ContainerGeral>
      <div>
        <h1>{startWithUpperCase(name)}</h1>
      </div>
      <ContainerDetails>
        <ContainerImg>
          <img
            src={data.sprites && data.sprites.back_default}
            alt={"imagem bunda"}
          />
          <img
            src={data.sprites && data.sprites.front_default}
            alt={"imagem frente"}
          />
        </ContainerImg>
        <ContainerStats>
          <h3>Status</h3>
          <p>{}</p>
          {data.stats &&
            data.stats.map((estat) => {
              return (
                <ContainerSoloStat>
                  <div>
                    <strong>
                      <span>{estat.stat.name} : </span>
                    </strong>
                    <span>{estat.base_stat}</span>
                  </div>
                  <BarraStats>
                    {" "}
                    <ValorStat
                      style={{
                        width: `${widthValue * (estat.base_stat / 100)}px`,
                      }}
                    ></ValorStat>
                  </BarraStats>
                </ContainerSoloStat>
              );
            })}
        </ContainerStats>
        <div>
          <ContainerTypes>
            <p>
              {data.types &&
                data.types.map((tipo) => {
                  return (
                    <strong key={tipo.type.name}>
                      <span>{startWithUpperCase(tipo.type.name)} </span>
                    </strong>
                  );
                })}
            </p>
          </ContainerTypes>
          <ContainerMoves>
            <h2>Especiais</h2>
            {data.moves &&
              data.moves.map((ataque) => {
                return (
                  <div>
                    <strong>
                      {" "}
                      <p>{startWithUpperCase(ataque.move.name)}</p>{" "}
                    </strong>
                    <hr />
                  </div>
                );
              })}
          </ContainerMoves>
        </div>
      </ContainerDetails>
    </ContainerGeral>
  );
}

export default ScreenDetails;
