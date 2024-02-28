import PokemonListItem from "../PokemonListItem/PokemonListItem";
import { usePokemonProvider } from "../../contexts/pokemon";

import "./index.css";

function PokemonList() {
  const {
    state: { pokemons = [] },
  } = usePokemonProvider();

  return (
    <>
      {pokemons.length &&
        pokemons.map((pokemon, index) => (
          <PokemonListItem pokemon={pokemon} order={index} />
        ))}
    </>
  );
}
export default PokemonList;
