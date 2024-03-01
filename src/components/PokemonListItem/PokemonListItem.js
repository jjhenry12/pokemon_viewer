import { usePokemonProvider } from "../../contexts/pokemon";
import { MAPPING_ACTIONS } from "../../reducers/pokemon";

import "./index.css";

function PokemonListItem({ pokemon, order }) {
  const {
    state: { hoverIndex, selectedIndex },
    dispatch,
  } = usePokemonProvider();
  const { name, abilities, sprites } = pokemon;

  const handleClick = (index) => {
    dispatch({
      type: MAPPING_ACTIONS.SET_SELECTED_POKEMON_INDEX,
      payload: index,
    });
    dispatch({ type: MAPPING_ACTIONS.SET_SHOW_DETAIL, payload: true });
  };

  const handleMouseEnter = (index) => {
    dispatch({
      type: MAPPING_ACTIONS.SET_HOVER_POKEMON_INDEX,
      payload: index,
    });
  };

  const handleMouseLeave = () => {
    dispatch({
      type: MAPPING_ACTIONS.SET_HOVER_POKEMON_INDEX,
      payload: null,
    });
  };

  const className = `${hoverIndex === order ? `pokemon-list-item-hover` : ``} ${selectedIndex === order ? `pokemon-list-item-selected` : ``} pokemon-list-item`

  return (
    <div
      className={className}
      role="button"
      tabIndex={order}
      onClick={() => handleClick(order)}
      onMouseEnter={() => handleMouseEnter(order)}
      onMouseLeave={() => handleMouseLeave(order)}
    >
      <img
        width="50"
        height="50px"
        src={sprites.other.showdown.front_shiny}
        alt={`${name}`}
      />
      <div className="pokemon-list-addtl">
        <span>{name}</span>
        <ul>
          {abilities.map(({ ability }) => (
            <li key={ability.name}>{ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonListItem;
