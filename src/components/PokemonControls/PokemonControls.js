import { usePokemonProvider } from "../../contexts/pokemon";
import { MAPPING_ACTIONS } from "../../reducers/pokemon";

import "./index.css";

function PokemonControls() {
  const {
    state: { previousUrl, nextUrl },
    dispatch,
  } = usePokemonProvider();

  const handleBack = () => {
    dispatch({
      type: MAPPING_ACTIONS.SET_URL,
      payload: previousUrl,
    });
  };

  const handleNext = () => {
    dispatch({
      type: MAPPING_ACTIONS.SET_URL,
      payload: nextUrl,
    });
  };

  return (
    <div className="pokemon-controls">
      {Boolean(previousUrl) && <button onClick={handleBack}>Back</button>}
      {Boolean(nextUrl) && <button onClick={handleNext}>Next</button>}
    </div>
  );
}

export default PokemonControls;
