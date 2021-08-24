import { useEffect, useState } from "react";

export default function StatusCard({ pokemon, currentHp }) {
  const widthTamanho = 200;
  const totalHp = pokemon.hp * pokemon.level;

  const [color, setColor] = useState("green");

  useEffect(() => {
    const porcentagem = currentHp / totalHp;

    if (porcentagem > 0.6) setColor("green");
    if (porcentagem <= 0.6 && porcentagem > 0.2) setColor("yellow");
    else if (porcentagem <= 0.2) setColor("red");
  }, [currentHp]);

  return (
    <div
      style={{
        margin: "15px 10px",
        padding: "0 10px",
        borderRadius: "5px",
        background: "#FEE6A3"
      }}
    >
      <p>
        {pokemon.name} Lv: {pokemon.level}
      </p>
      <div
        style={{
          height: "20px",
          width: `${widthTamanho}px`,
          background: "gray"
        }}
      >
        <p
          style={{
            height: "20px",
            width: `${widthTamanho * (currentHp / totalHp)}px`,
            background: color
          }}
        ></p>
      </div>
      <p>
        {currentHp}/{totalHp}
      </p>
    </div>
  );
}
