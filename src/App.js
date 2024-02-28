import { useEffect, useState } from "react";
import usePokemon from "./hooks/usePokemon";
import { usePokemonProvider } from "./contexts/pokemon";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import PokemonControls from "./components/PokemonControls/PokemonControls";

import "./App.css";
import { MAPPING_ACTIONS } from "./reducers/pokemon";

function App() {
  const {
    state: { url, showDetail },
    dispatch,
  } = usePokemonProvider();
  const { pokemonList, pokemonDescription, error, loading, prevUrl, nextUrl } =
    usePokemon(url);

  const handleBack = () => {
    dispatch({
      type: MAPPING_ACTIONS.SET_SHOW_DETAIL,
      payload: false,
    });
  };

  useEffect(() => {
    const payload = {
      pokemons: pokemonList,
      previousUrl: prevUrl,
      nextUrl: nextUrl,
      descriptions: pokemonDescription,
    };

    dispatch({
      type: MAPPING_ACTIONS.SET_INITIAL,
      payload,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonList, pokemonDescription]);

  return (
    <div className="container">
      <nav>
        <PokemonControls />
        <PokemonList />
      </nav>
      <main className={showDetail ? `show-detail` : ``}>
        <div className="masthead">
          <button onClick={handleBack}>Cool, Take me back ...</button>
        </div>
        <PokemonDetail />
      </main>
    </div>
  );
}

export default App;
