import { useCallback, useEffect, useState } from "react";

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonDescription, setPokemonDescription] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchPokemon = useCallback(async () => {
    setLoading(true)
    try {
      const { results } = await (await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)).json()
      const pokemonDetail = results?.map(async (detail) => await (await fetch(`https://pokeapi.co/api/v2/pokemon/${detail.name}`)).json()) || []
      const pokemonDescArr = results?.map(async (detail) => await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${detail.name}`)).json()) || []
      Promise.all(pokemonDetail).then(setPokemonList)
      Promise.all(pokemonDescArr).then(setPokemonDescription)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPokemon])

  return {pokemonList, error, loading, pokemonDescription}
};

export default usePokemon