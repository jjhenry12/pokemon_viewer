import { cleanup, render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";
import { PokemonContext } from "../../contexts/pokemon";

describe("<PokemonList />", () => {
  const defaultValue = {
    state: {
      pokemons: [
        {
          name: "Pokemon 1",
          sprites: {
            other: {
              showdown: {
                front_shiny: "pic url",
              },
            },
          },
          abilities: [
            {
              ability: {
                name: "cool ability",
              },
            },
            {
              ability: {
                name: "cool ability1",
              },
            },
            {
              ability: {
                name: "cool ability2",
              },
            },
          ],
        },
        {
          name: "Pokemon 2",
          sprites: {
            other: {
              showdown: {
                front_shiny: "pic url",
              },
            },
          },
          abilities: [
            {
              ability: {
                name: "cool ability",
              },
            },
            {
              ability: {
                name: "cool ability1",
              },
            },
            {
              ability: {
                name: "cool ability2",
              },
            },
          ],
        },
        {
          name: "Pokemon 3",
          sprites: {
            other: {
              showdown: {
                front_shiny: "pic url",
              },
            },
          },
          abilities: [
            {
              ability: {
                name: "cool ability0",
              },
            },
            {
              ability: {
                name: "cool ability1",
              },
            },
            {
              ability: {
                name: "cool ability2",
              },
            },
          ],
        },
      ],
    },
  };

  afterEach(cleanup);

  test("renders correct number of items", () => {
    render(
      <PokemonContext.Provider value={defaultValue}>
        <PokemonList />
      </PokemonContext.Provider>
    );
    const buttonElements = screen.queryAllByRole("button");
    expect(buttonElements).toHaveLength(3);
  });
});
