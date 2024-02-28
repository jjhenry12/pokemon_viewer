import { useEffect, useState } from 'react';
import './App.css';
import usePokemon from './hooks/usePokemon';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

function App() {
  const {pokemonList, pokemonDescription, error, loading} = usePokemon()
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  useEffect(() => {
    console.log(pokemonList)
  }, [pokemonList, pokemonDescription])

  return (
    <div className="container">
        <nav>
        <PokemonList pokemonList={pokemonList} onSelected={setSelectedIndex} />
        </nav>
        <main>
          <div className="masthead"></div>
        <PokemonDetail pokemon={pokemonList[selectedIndex] || {}} description={pokemonDescription[selectedIndex] || {}} />
        </main>
    </div>
  );
}

export default App;
