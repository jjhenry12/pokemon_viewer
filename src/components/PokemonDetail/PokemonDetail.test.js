import { cleanup, render, screen } from "@testing-library/react";
import PokemonDetail from "./PokemonDetail";
import { PokemonContext } from "../../contexts/pokemon";

describe("<PokemonDetail />", () => {
  const defaultValue = {
    state: {
      selectedIndex: 0,
      descriptions: [
        {
          flavor_text_entries: [
            {
              flavor_text: "flavor_text1",
            },
            {
              flavor_text: "flavor_text2",
            },
            {
              flavor_text: "flavor_text3",
            },
            {
              flavor_text: "flavor_text4",
            },
          ],
        },
      ],
      pokemons: [
        {
          sprites: {
            other: {
              dreaam_world: {
                front_default: "url",
              },
            },
          },
          name: "Cool Pokemon",
          height: 4,
          weight: 80,
          moves: [
            {
              move: {
                name: "move",
              },
            },
          ],
          abilities: [
            {
              ability: {
                name: "jump",
              },
            },
          ],
          stats: [
            {
              base_stat: "stat1",
            },
            {
              base_stat: "stat2",
            },
            {
              base_stat: "stat3",
            },
            {
              base_stat: "stat4",
            },
            {
              base_stat: "stat5",
            },
          ],
        },
      ],
    },
  };
  afterEach(cleanup);

  test("renders Pokemon heading", () => {
    render(
      <PokemonContext.Provider value={defaultValue}>
        <PokemonDetail />
      </PokemonContext.Provider>
    );
    const heading = screen.getByText(/Cool Pokemon/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders physical properties", () => {
    render(
      <PokemonContext.Provider value={defaultValue}>
        <PokemonDetail />
      </PokemonContext.Provider>
    );
    const height = screen.getByText(/4ft/i);
    const weight = screen.getByText(/80lbs/i);
    const category = screen.getByText(/move/i);
    const abilities = screen.getByText(/jump/i);
    expect(height).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(abilities).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });
});
