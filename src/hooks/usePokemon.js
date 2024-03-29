import { useCallback, useEffect, useState } from "react";

const usePokemon = (url) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState([]);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPreviousUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = useCallback(async () => {
    try {
      const { results, next, previous } = await (await fetch(url)).json();
      const pokemonDetail =
        results?.map(
          async (detail) =>
            await (
              await fetch(`https://pokeapi.co/api/v2/pokemon/${detail.name}`)
            ).json()
        ) || [];
      const pokemonDescArr =
        results?.map(
          async (detail) =>
            await (
              await fetch(
                `https://pokeapi.co/api/v2/pokemon-species/${detail.name}`
              )
            ).json()
        ) || [];
      const listArr = await Promise.all(pokemonDetail);
      const descrArr = await Promise.all(pokemonDescArr);
      setPokemonList(listArr);
      setPokemonDescription(descrArr);
      setNextUrl(next);
      setPreviousUrl(previous);
    } catch (error) {
      setError(error);
    }
  }, [url]);

  useEffect(() => {
    fetchPokemon();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPokemon]);

  return { pokemonList, error, loading, pokemonDescription, nextUrl, prevUrl };
};

export default usePokemon;
