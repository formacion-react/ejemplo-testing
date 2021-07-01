import { useContext } from "react";
import { DatosContext } from "../contextos/DatosContext";

export const BotonCrear = () => {
  const { dispatch } = useContext(DatosContext);
  const crearDato = () => {
    dispatch({
      type: "anyadir",
      payload: {
        id: 9,
        nombre: "Antonia",
        edad: 40,
      },
    });
  };
  return <button onClick={crearDato}>Crear</button>;
};
