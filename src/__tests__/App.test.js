import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Componente App", () => {
  test("se renderiza", () => {
    render(<App />);
    screen.debug();
  });
  test("se muestra el título de la app", () => {
    render(<App />);
    const titulo = screen.getByText("Listado de personas");
    expect(titulo).toBeInTheDocument();
  });
});
