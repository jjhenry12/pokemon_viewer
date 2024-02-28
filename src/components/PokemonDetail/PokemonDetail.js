import "./index.css"

function PokemonDetail({pokemon, description}) {
  const {sprites, name, weight, height, abilities, moves, stats, types} = pokemon
  const { flavor_text_entries, shape } = description
  console.dir(description)
  return (
    <section className="pokemon-detail">
      <div className="pokemon-info">
        <img width="280" height="280" src={sprites?.other?.dream_world?.front_default || ""} alt="" />
        <p>
          <h3>{name}</h3>
          {flavor_text_entries?.[1].flavor_text} {flavor_text_entries?.[2].flavor_text} {flavor_text_entries?.[3].flavor_text}
        </p>  
      </div>
      <div className="pokemon-desc pokemon-props">
        <ul>
          <li>
            <em>Height</em>
            <span>{height}ft</span>
          </li>
          <li>
            <em>Weight</em>
            <span>{weight}lbs</span>
          </li>
          <li>
            <em>Category</em>
            <span>{moves?.[0].move.name}</span>
          </li>
          <li>
            <em>Abilities</em>
            <span>{abilities?.[0].ability.name || ""}</span>
          </li>
        </ul>
      </div>
      <div className="pokemon-stats pokemon-props">
        <ul>
          <li>
            <em>HP</em>
            <span>{stats?.[0].base_stat}</span>
          </li>
          <li>
            <em>Attack</em>
            <span>{stats?.[1].base_stat}</span>
          </li>
          <li>
            <em>Defense</em>
            <span>{stats?.[2].base_stat}</span>
          </li>
          <li>
            <em>Speed</em>
            <span>{stats?.[4].base_stat}</span>
          </li>
        </ul>
      </div>
      <div className="pokemon-type pokemon-section">
        <em>Type</em>
        <span>{types?.[0].type.name}</span>
      </div>
      <div className="pokemon-weak pokemon-section">
        <em>Shape</em>
        <span>{shape?.name}</span>
      </div>
    </section>
  )

}
export default PokemonDetail