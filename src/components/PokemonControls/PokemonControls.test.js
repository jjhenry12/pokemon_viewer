import { cleanup, render, screen } from "@testing-library/react";
import PokemonControls from "./PokemonControls";
import { PokemonContext } from "../../contexts/pokemon";

describe("<PokemonControls />", () => {
  afterEach(cleanup);

  test("renders back button when url is present", () => {
    const defaultValue = {
      state: {
        previousUrl: "http://www.previous.com",
      },
    };

    render(
      <PokemonContext.Provider value={defaultValue}>
        <PokemonControls />
      </PokemonContext.Provider>
    );
    const buttonElement = screen.getByText(/Back/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders next button when url is present", () => {
    const defaultValue = {
      state: {
        nextUrl: "http://www.next.com",
      },
    };

    render(
      <PokemonContext.Provider value={defaultValue}>
        <PokemonControls />
      </PokemonContext.Provider>
    );
    const buttonElement = screen.getByText(/Next/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("removes previous button removed when url is not present", () => {
    const defaultValue = {
      state: {
        nextUrl: "http://www.next.com",
      },
    };
    render(
      <PokemonContext.Provider value={defaultValue}>
        <PokemonControls />
      </PokemonContext.Provider>
    );
    expect(screen.queryByText(/Back/i)).not.toBeInTheDocument();
  });

  test("removes next button removed when url is not present", () => {
    const defaultValue = {
      state: {
        previousUrl: "http://www.previous.com",
      },
    };

    render(
      <PokemonContext.Provider value={defaultValue}>
        <PokemonControls />
      </PokemonContext.Provider>
    );
    expect(screen.queryByText(/Next/i)).not.toBeInTheDocument();
  });
});
