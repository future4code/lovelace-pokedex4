import { useEffect, useState } from "react";

export default function StatusCard({ pokemon, currentHp }) {
  const widthValue = 200;
  const totalHp = pokemon.hp * pokemon.level;

  const [color, setColor] = useState("green");

  useEffect(() => {
    const percentage = currentHp / totalHp;

    if (percentage > 0.6) setColor("green");
    if (percentage <= 0.6 && percentage > 0.2) setColor("yellow");
    else if (percentage <= 0.2) setColor("red");
    // eslint-disable-next-line
  }, [currentHp]);

  return (
    <div
      style={{
        margin: "15px 10px",
        padding: "0 10px",
        borderRadius: "5px",
        background: "#FEE6A3",
      }}
    >
      <p>
        <strong>{pokemon.name}</strong> Lv: {pokemon.level}
      </p>
      <div
        style={{
          height: "10px",
          width: `${widthValue}px`,
          background: "gray",
          borderRadius: "15px",
        }}
      >
        <p
          style={{
            height: "10px",
            width: `${widthValue * (currentHp / totalHp)}px`,
            background: color,
            borderRadius: "15px",
          }}
        ></p>
      </div>
      <p>
        <small>{currentHp}/{totalHp}</small>
      </p>
    </div>
  );
}
