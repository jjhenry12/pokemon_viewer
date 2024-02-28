import { cleanup, render, screen } from "@testing-library/react";
import PokemonListItem from "./PokemonListItem";
import { PokemonContext } from "../../contexts/pokemon";

describe("<PokemonListItem />", () => {
  const pokemon = {
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
  };

  afterEach(cleanup);

  test("renders hover class", () => {
    const defaultValue = {
      state: {
        hoverIndex: 1,
      },
    };

    render(
      <PokemonContext.Provider value={defaultValue}>
        <PokemonListItem pokemon={pokemon} order={1} />
      </PokemonContext.Provider>
    );
    expect(
      screen.getByRole("button").classList.contains("pokemon-list-item-hover")
    ).toBe(true);
  });

  test("renders selected class", () => {
    const defaultValue = {
      state: {
        selectedIndex: 5,
      },
    };

    render(
      <PokemonContext.Provider value={defaultValue}>
        <PokemonListItem pokemon={pokemon} order={5} />
      </PokemonContext.Provider>
    );

    expect(
      screen
        .getByRole("button")
        .classList.contains("pokemon-list-item-selected")
    ).toBe(true);
  });
});
