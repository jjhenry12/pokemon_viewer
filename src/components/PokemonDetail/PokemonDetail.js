import { usePokemonProvider } from "../../contexts/pokemon";
import "./index.css";

function PokemonDetail() {
  const {
    state: { descriptions, pokemons, selectedIndex, loading },
  } = usePokemonProvider();
  const pokemon = pokemons[selectedIndex];
  const description = descriptions[selectedIndex];

  return (
    <div
      className={
        loading
          ? `pokemon-detail-container loading`
          : `pokemon-detail-container`
      }
    >
      {Boolean(pokemon) && (
        <section role="dialog" aria-labelledby="modal_title" aria-modal="true">
          <div className="pokemon-info">
            <img
              width="280"
              height="280"
              src={pokemon.sprites?.other?.dream_world?.front_default || ""}
              alt=""
            />
            <header>
              <h3 tabIndex="0" id="modal_title">
                {pokemon.name}
              </h3>
              {description.flavor_text_entries?.[1].flavor_text}{" "}
              {description.flavor_text_entries?.[2].flavor_text}{" "}
              {description.flavor_text_entries?.[3].flavor_text}
            </header>
          </div>
          <div className="pokemon-desc pokemon-props">
            <ul>
              <li tabIndex="1">
                <em>Height</em>
                <span>{pokemon.height}ft</span>
              </li>
              <li tabIndex="2">
                <em>Weight</em>
                <span>{pokemon.weight}lbs</span>
              </li>
              <li tabIndex="3">
                <em>Category</em>
                <span>{pokemon.moves?.[0].move.name}</span>
              </li>
              <li tabIndex="4">
                <em>Abilities</em>
                <span>{pokemon.abilities?.[0].ability.name || ""}</span>
              </li>
            </ul>
          </div>
          <div className="pokemon-stats pokemon-props">
            <ul>
              <li tabIndex="5">
                <em>HP</em>
                <span>{pokemon.stats?.[0].base_stat}</span>
              </li>
              <li tabIndex="6">
                <em>Attack</em>
                <span>{pokemon.stats?.[1].base_stat}</span>
              </li>
              <li tabIndex="7">
                <em>Defense</em>
                <span>{pokemon.stats?.[2].base_stat}</span>
              </li>
              <li tabIndex="8">
                <em>Speed</em>
                <span>{pokemon.stats?.[4].base_stat}</span>
              </li>
            </ul>
          </div>
          <div className="pokemon-type pokemon-section">
            <em>Type</em>
            <span>{pokemon.types?.[0].type.name}</span>
          </div>
          <div className="pokemon-weak pokemon-section">
            <em>Shape</em>
            <span>{description.shape?.name}</span>
          </div>
        </section>
      )}
    </div>
  );
}

export default PokemonDetail;
