import { render, screen } from "@testing-library/react";
import { BotonCrear } from "../componentes/BotonCrear";

describe("Componente BotonCrear", () => {
  test("se renderiza", () => {
    render(<BotonCrear />);
  });
  test("muestra el texto Crear cuando estoy creando", () => {
    render(<BotonCrear editando={false} />);
    const botonCrear = screen.getByRole("button", { name: /crear/i });
    expect(botonCrear).toBeInTheDocument();
  });
  test("muestra el texto Modificar cuando estoy editando", () => {
    render(<BotonCrear editando={true} />);
    const botonModificar = screen.getByRole("button", { name: /modificar/i });
    expect(botonModificar).toBeInTheDocument();
  });
  test("no muestra el mensaje de edición cuando estoy creando", () => {
    render(<BotonCrear editando={false} />);
    const mensajeEdicion = screen.queryByRole("heading", {
      name: /editando elemento/i,
    });
    expect(mensajeEdicion).not.toBeInTheDocument();
  });
});
