import { useState } from "react"
import PokemonListItem from "../PokemonListItem/PokemonListItem"
import "./index.css"

function PokemonList({pokemonList, onSelected}) {
  const [hoverIndex, setHoverIndex] = useState(null)
  return (
    <>
      {pokemonList.map((pokemon, index) => <PokemonListItem shouldHighlight={index === hoverIndex} pokemon={pokemon} onHover={setHoverIndex} onSelected={onSelected} order={index} />)}
    </>
  )
}
export default PokemonList