import { createContext, useContext, useMemo, useReducer } from "react";
import reducer, { initialState } from "../reducers/pokemon";

const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <PokemonContext.Provider value={providerValue}>
      {children}
    </PokemonContext.Provider>
  );
}

function usePokemonProvider() {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("Pokemon Context must be used within a PokemonProvider");
  }
  return context;
}

export { PokemonProvider, PokemonContext, usePokemonProvider };
