import "./index.css"

function PokemonListItem({pokemon, order, onSelected, shouldHighlight, onHover}) {
  const {name, abilities, sprites} = pokemon
  return (
    <div className={shouldHighlight ? `pokemon-list-item pokemon-list-item-hover` : `pokemon-list-item`}
    role='button' tabIndex={order} onClick={() => onSelected(order)} onMouseEnter={() => onHover(order)} onMouseLeave={() => onHover(null)}>
    <img width="50" height="50px" src={sprites.other.showdown.front_default} alt="" />
      <div className="pokemon-list-addtl">
        <span>{name}</span>
        <ul>
          {abilities.map(({ability}) => <li>{ability.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default PokemonListItem