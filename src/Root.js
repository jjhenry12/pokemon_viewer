import App from './App';
import { PokemonProvider } from './contexts/pokemon';

function Root() {
  return (
    <PokemonProvider>
      <App />
    </PokemonProvider>
  );
}

export default Root;
