import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { SearchControls } from "./SearchControls";

if (typeof window.ResizeObserver === "undefined") {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.ResizeObserver = ResizeObserver;
}

const renderWithRouter = (initialEntries: string[] = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <SearchControls />
    </MemoryRouter>,
  );
};

describe("SearchControls", () => {
  test("should render SearchControls with default values", () => {
    const { container } = renderWithRouter();

    expect(container).toMatchSnapshot();
  });

  test("should set input value when search param name is set", () => {
    renderWithRouter(["/?name=Batman"]);

    const input = screen.getByPlaceholderText(
      "Buscar héroes, villanos, poderes, equipos...",
    );

    expect(input.getAttribute("value")).toBe("Batman");
  });

  test("should change params when input is changed and enter is pressed", () => {
    renderWithRouter(["/?name=Batman"]);
    const input = screen.getByPlaceholderText(
      "Buscar héroes, villanos, poderes, equipos...",
    );
    expect(input.getAttribute("value")).toBe("Batman");

    fireEvent.change(input, { target: { value: "Superman" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(input.getAttribute("value")).toBe("Superman");
  });
});
