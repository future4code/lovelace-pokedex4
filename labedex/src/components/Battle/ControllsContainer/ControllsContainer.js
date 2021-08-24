import Attack from "../Attack/Attack"

const style = {
  margin: "15px 10px",
  padding: "0 10px",
  borderRadius: "5px",
  background: "gray",
  display: "flex"
};

export default function ControllsContainer({ myPokemon, attack, message, setMessage }) {
  return (
    <div style={style}>
      <div>
        <p>{message}</p>
      </div>
      <Attack myPokemon={myPokemon} attack={attack} setMessage={setMessage} />
    </div>
  );
}
